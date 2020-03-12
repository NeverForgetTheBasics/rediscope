import Vue from 'vue';
import Base from './base';
import axios from 'axios';
import Routes from './routes';
import VueRouter from 'vue-router';
import VueJsonPretty from 'vue-json-pretty';
import moment from 'moment-timezone';

require('bootstrap');

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

Vue.use(VueRouter);

window.Popper = require('popper.js').default;

window.Bus = new Vue({ name: 'Bus' });

moment.tz.setDefault(Rediscope.timezone);

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    base: Rediscope.path,
});

Vue.component('alert', require('./components/Alert.vue').default);
Vue.component('index-screen', require('./components/IndexScreen.vue').default);
Vue.component('preview-screen', require('./components/PreviewScreen.vue').default);
Vue.component('information-screen', require('./components/InformationScreen.vue').default);
Vue.component('vue-json-pretty', VueJsonPretty);

Vue.mixin(Base);

new Vue({
    el: '#rediscope',

    router,

    data() {
        return {
            alert: {
                type: null,
                autoClose: 0,
                message: '',
                confirmationProceed: null,
                confirmationCancel: null,
            },
            connections: [],

            current: ""
        }
    },

    mounted() {
        this.setDefaultConnection();

        axios.get('/' + Rediscope.path + '/api/connections'
        ).then(response => {
            this.connections = response.data;
        });
    },

    methods: {
        changeConnection() {
            //this.$redis.conn = this.current;

            localStorage.setItem("conn", this.current);

            Bus.$emit("connectionChanged");
        },

        setDefaultConnection() {
            this.current = localStorage.getItem("conn") || "default";

            //this.$redis.conn = this.current;
        }
    }
});
