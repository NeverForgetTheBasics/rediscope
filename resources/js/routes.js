export default [
    {
        path: '/',
        redirect: '/keys'
    },

    {
        path: '/keys/:key',
        name: 'keys-preview',
        component: require('./screens/keys/preview').default
    },

    {
        path: '/keys',
        name: 'Keys',
        component: require('./screens/keys/index').default,
    },

    {
        path: '/information',
        name: 'Information',
        component: require('./screens/info/index').default,
    },
];
