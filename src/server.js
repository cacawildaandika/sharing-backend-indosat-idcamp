'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: () => {
                let a = 2;
                let b = 3;

                let c = a + b;
                return `Hasil A + B ${c}`;
            }
        },
        {
            method: 'GET',
            path: '/info',
            handler: () => {
                return 'Info page';
            }
        },
        {
            method: 'GET',
            path: '/contact',
            handler: () => {
                return 'Contact page';
            }
        },
        // routing for endpoint about
        {
            method: 'GET',
            path: '/about',
            handler: () => {
                return 'About page';
            }
        },
    ])

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
