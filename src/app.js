const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/tasks',
        handler: (request, h) => {
            return 'hello world'
        }
    })

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};



init();