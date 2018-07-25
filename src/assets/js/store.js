import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
let defaultcity = '瑞安'
try {
    if (localStorage.city) {
        defaultcity = localStorage.city
    }
} catch (e) {

}
export default new Vuex.Store({
    state: {
        city: defaultcity
    },
    mutations: {

    },
    actions: {
        updatecity(ctx, mcity) {
            this.state.city = mcity;
            try {
                if (localStorage.city) {
                    localStorage.city = mcity;
                }
            } catch (e) {

            }
        }
    }
})