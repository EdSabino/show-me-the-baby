const url = '/_axiom/logs';
const LOG_LEVEL = process.env.AXIOM_LOG_LEVEL || 'debug';

const throttle = (fn: Function, wait: number) => {
  let lastFn: ReturnType<typeof setTimeout>, lastTime: number;
  return function (this: any) {
    const context = this,
      args = arguments;

    // First call, set lastTime
    if (lastTime == null) {
      lastTime = Date.now();
    }

    clearTimeout(lastFn);
    lastFn = setTimeout(() => {
      if (Date.now() - lastTime >= wait) {
        fn.apply(context, args);
        lastTime = Date.now();
      }
    }, Math.max(wait - (Date.now() - lastTime), 0));
  };
};

export interface LogEvent {
  level: string;
  message: string;
  fields: {};
  _time: string;
  request?: RequestReport;
  platform?: PlatformInfo;
}

export enum LogLevel {
  debug = 0,
  info = 1,
  warn = 2,
  error = 3,
  off = 100,
}

export interface RequestReport {
  startTime: number;
  statusCode?: number;
  ip?: string;
  region?: string;
  path: string;
  host: string;
  method: string;
  scheme: string;
  userAgent?: string | null;
}

export interface PlatformInfo {
  environment?: string;
  region?: string;
  route?: string;
  source?: string;
}

export class Logger {
  public logEvents: LogEvent[] = [];
  throttledSendLogs = throttle(this.sendLogs, 1000);
  children: Logger[] = [];
  public logLevel: string;

  constructor(
    private args: { [key: string]: any } = {},
    private req: RequestReport | null = null,
    private autoFlush: Boolean = true,
    public source: 'frontend' | 'lambda' | 'edge' = 'frontend',
    logLevel?: string
  ) {
    this.logLevel = logLevel || LOG_LEVEL || 'debug';
  }

  debug = (message: string, args: { [key: string]: any } = {}) => {
    this._log('debug', message, args);
  };
  info = (message: string, args: { [key: string]: any } = {}) => {
    this._log('info', message, args);
  };
  warn = (message: string, args: { [key: string]: any } = {}) => {
    this._log('warn', message, args);
  };
  error = (message: string, args: { [key: string]: any } = {}) => {
    this._log('error', message, args);
  };

  with = (args: { [key: string]: any }) => {
    const child = new Logger({ ...this.args, ...args }, this.req, this.autoFlush, this.source);
    this.children.push(child);
    return child;
  };

  withRequest = (req: RequestReport) => {
    return new Logger({ ...this.args }, req, this.autoFlush, this.source);
  };

  _log = (level: string, message: string, args: { [key: string]: any } = {}) => {
    if (LogLevel[level] < LogLevel[this.logLevel]) {
      return;
    }
    const logEvent: LogEvent = { level, message, _time: new Date(Date.now()).toISOString(), fields: this.args || {} };

    // check if passed args is an object, if its not an object, add it to fields.args
    if (args instanceof Error) {
      logEvent.fields = { ...logEvent.fields, message: args.message, stack: args.stack, name: args.name };
    } else if (typeof args === 'object' && args !== null && Object.keys(args).length > 0) {
      const parsedArgs = JSON.parse(JSON.stringify(args, jsonFriendlyErrorReplacer));
      logEvent.fields = { ...logEvent.fields, ...parsedArgs };
    } else if (args && args.length) {
      logEvent.fields = { ...logEvent.fields, args: args };
    }

    logEvent.platform = {
      environment: process.env.NODE_ENV,
      region: process.env.REGION || undefined,
      source: this.source + '-log',
    };

    if (this.req != null) {
      logEvent.request = this.req;
      if (logEvent.platform) {
        logEvent.platform.route = this.req.path;
      }
    }

    this.logEvents.push(logEvent);
    if (this.autoFlush) {
      this.throttledSendLogs();
    }
  };

  attachResponseStatus = (statusCode: number) => {
    this.logEvents = this.logEvents.map((log) => {
      if (log.request) {
        log.request.statusCode = statusCode;
      }
      return log;
    });
  };

  async sendLogs() {
    if (!this.logEvents.length) {
      return;
    }

    const method = 'POST';
    const keepalive = true;
    const body = JSON.stringify(this.logEvents);
    // clear pending logs
    this.logEvents = [];
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'next-axiom/v1.0.0',
    };
    headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_AXIOM_TOKEN}`;
    const reqOptions: RequestInit = { body, method, keepalive, headers };

    function sendFallback() {
      // Do not leak network errors; does not affect the running app
      fetch(url, reqOptions).catch(console.error);
    }

    try {
      if (typeof fetch === 'undefined') {
        const fetch = await require('whatwg-fetch');
        fetch(url, reqOptions).catch(console.error);
      } else {
        sendFallback();
      }
    } catch (e) {
      console.error(`Failed to send logs to Axiom: ${e}`);
    }
  }

  flush = async () => {
    await Promise.all([this.sendLogs(), ...this.children.map((c) => c.flush())]);
  };
}

export const log = new Logger();

function jsonFriendlyErrorReplacer(key: string, value: any) {
  if (value instanceof Error) {
    return {
      // Pull all enumerable properties, supporting properties on custom Errors
      ...value,
      // Explicitly pull Error's non-enumerable properties
      name: value.name,
      message: value.message,
      stack: value.stack,
    };
  }

  return value;
}
