export default [
    {
        path: '/',
        redirect: '/keys'
    },

    {
        path: '/keys/:key',
        name: 'keys-preview',
        component: require('./screens/keys/preview')
    },

    {
        path: '/keys',
        name: 'Keys',
        component: require('./screens/keys/index')
    },

    {
        path: '/information',
        name: 'Information',
        component: require('./screens/info/index')
    },
];
