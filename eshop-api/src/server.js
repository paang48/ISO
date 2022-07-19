require('dotenv').config();

const Hapi = require('@hapi/hapi');



  const init = async () => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({
      name: 'Farhan maulana Arliansyah',
    }),
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);

const Database = require('./conf/Database');

// authentication
const authentication = require('./api/authentication');
const AuthenticationService = require('./services/mysql/AuthenticationsService');
const AuthenticationValidator = require('./validator/authentication');

  const init = async () => {
  const database = new Database();
  const authenticationService = new AuthenticationService(database);

  const server = Hapi.server({
  });

  // register internal plugins
  await server.register([
    {
      plugin: authentication,
      options: {
        service: authenticationService,
        validator: AuthenticationValidator,
      },
    },
  ]);

}

init()}
