export default {
    methods: {

        keyTypeClass(type) {
            if (type === 'string') return 'secondary';
            if (type === 'hash') return 'info';
            if (type === 'set') return 'warning';
            if (type === 'zset') return 'light';
            if (type === 'list') return 'dark';
        },

    }
};
