import prisma from "../../../lib/prisma"

const defaults = [
  '_middlewares',
  '_transactionId',
  '_getDmmf',
  '_previewFeatures',
  '_rejectOnNotFound',
  '_clientVersion',
  '_activeProvider',
  '_dataProxy',
  '_tracingConfig',
  '_clientEngineType',
  '_errorFormat',
  '_baseDmmf',
  '_engineConfig',
  '_engine',
  '_fetcher',
  '_metrics'
];

const methods = {
  'GET': getResolver,
  'POST': postResolver,
  'PUT': putResolver,
  'DELETE': deleteResolver
};

async function getResolver(req, res, slug) {
  if (slug[1]) {
    return prisma[slug[0]].findUnique({
      where: {
        id: parseInt(slug[1])
      }
    });
  } else {
    const filters = JSON.parse(req.query.filter || '{}');
    const search = {
      where: filters
    };
    if (filters.ids || filters.id) {
      delete search.where.ids;
      search.where.id = {
        in: filters.ids || filters.id
      };
    }

    if (req.query.sort) {
      const sort = JSON.parse(req.query.sort);
      search['orderBy'] = {
        [sort[0]]: sort[1].toLowerCase()
      };
    }
    const count = await prisma.case.count(search);
    if (req.query.range) {
      const range = JSON.parse(req.query.range);
      search['skip'] = range[0];
      search['take'] = range[0] - range[1];
      res.setHeader('Content-Range', `${range[0]}-${range[1]}/${count}`);
    }
    return prisma[slug[0]].findMany(search);
  }
}

async function postResolver(req, res, slug) {
  return prisma[slug[0]].create({
    data: req.body
  });
}

async function putResolver(req, res, slug) {
  if (slug[1]) {
    return prisma[slug[0]].update({
      where: {
        id: parseInt(slug[1])
      },
      data: req.body
    });
  } else {
    await prisma[slug[0]].updateMany({
      where: {
        id: {
          in: req.query.filter.id
        }
      },
      data: req.body
    });

    return req.query.filter.id;
  }
}

async function deleteResolver(req, res, slug) {
  if (slug[1]) {
    return prisma[slug[0]].delete({
      where: {
        id: parseInt(slug[1])
      }
    });
  } else {
    await prisma[slug[0]].deleteMany({
      where: {
        id: {
          in: req.query.filter.id
        }
      }
    });

    return req.query.filter.id;
  }
}

export default async function handler(req, res) {
  const { slug } = req.query
  const models = Object.keys(prisma).filter(n => !defaults.includes(n));

  if (models.includes(slug[0])) {
    const responseBody = await methods[req.method](req, res, slug);
    return res.status(200).json(responseBody);
  } else {
    return res.status(404).json({ error: 'Path not found' });
  }
}
