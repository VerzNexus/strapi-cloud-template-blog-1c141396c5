export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
   {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:1337', 'http://127.0.0.1:1337', 'http://localhost:3000', 'http://127.0.0.1:3000', 'https://blog-project-beige-one.vercel.app'], // Add both localhost and 127.0.0.1 for both ports
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Accept'],
      // ... (optional: maxAge, credentials if needed)
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
