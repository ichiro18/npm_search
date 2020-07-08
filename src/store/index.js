import Vue from 'vue';
import Vuex from 'vuex';
// * Modules
import pack from './modules/package'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules: {
        'package': pack
    }
});
export default store;