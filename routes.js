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