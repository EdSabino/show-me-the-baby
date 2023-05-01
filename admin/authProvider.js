export const authProvider = {
  login: async params => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({
        email: params.username,
        password: params.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) throw 'error';

    const body = await response.json();
    localStorage.setItem('token', body.token);
  },
  checkError:  (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
        localStorage.removeItem('username');
        return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: async () => {
    const response = await fetch('/api/check_auth', {
      method: 'POST',
      body: JSON.stringify({
        token: localStorage.getItem('token')
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) throw 'error';
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  getIdentity: () => Promise.resolve({
    id: 'user',
    fullName: 'John Doe',
  }),
  getPermissions: () => Promise.resolve(''),
};
