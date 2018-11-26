import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		isshow: true
	},
	actions: {

	},
	mutations: {
		close (state) {
			state.isshow = !state.isshow;
			console.log(state.isshow)
		}
	}
})
export default store