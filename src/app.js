const Hapi = require('@hapi/hapi');

require('./database');
//model data save for search, delete...
const Task = require('./models/Task')

const init = async () => {
    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/tasks',
        handler: (request, h) => {
            console.log(request.payload);
            return 'hello world'
        }
    })

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};



init();