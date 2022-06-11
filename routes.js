const routes = [
    // Homepage
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (req, h) => {
            return 'Page cannot be accessed by that method.';
        },
    },

    // About
    {
        method: 'GET',
        path: '/about',
        handler: (req, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (req, h) => {
            return 'Page cannot be accessed by that method.';
        },
    },
    
    // ./hello/(stranger|name) + ?lang=''
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (req, h) => {
            const { name = "stranger" } = req.params;
            const { lang } = req.query;
            return lang === 'id' ? `Hai, ${name}!` : `Hello, ${name}`;
        }

    },

    // ./login
    {
        method: 'POST',
        path: '/login',
        handler: (req, h) => {
            const { username, password } = req.payload;
            return `Welcome, ${username}!`;
        }
    },

    // ./user
    {
        method: 'POST',
        path: '/user',
        handler: (req, h) => {
            return h.response('success')
                    .type('text/plain')
                    .header('X-Custom', 'some-value');
        }
    },

    // Any other method
    {
        method: '*',
        path: '/{any*}',
        handler: (req, h) => {
            return 'Page not found';
        },
    },
]

module.exports = routes;