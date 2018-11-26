

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		isshow: true,
		commentCount:0,
		sheetVisible:false,
		content:null,
		cityid:290,
		cityname:'beijing',
		info:[],
		cinemainfo:null,
		movieId:0,
		date:''
	},
	actions:{
		getcinema(store){
			axios.get(`/api/proxy/ticket/onlineCinemasByCity.api?locationId=${store.state.cityid}`).then(res=>{
				store.commit('cinema',res.data.data.cinemaList)
			}).catch(error=>{
				console.log(error);
			})
			
		},

	},
	mutations: {
		close (state) {
			state.isshow = !state.isshow;
			console.log(state.isshow)
		},
		commentCount(state,payload){
			state.commentCount = payload;
		},
		changeContent(state,payload){
			state.content = payload;
			console.log(state.content);
		},
		changeSheet(state){
			state.sheetVisible = !state.sheetVisible;
		},
		cinema(state,payload){
			state.info = payload;
		},
		changeid(state,payload){
			state.cityid = payload.id;
			state.cityname = payload.name;
		},
		changecinema(state,payload){
			state.cinemainfo = payload;
		},
		storeId(state,payload){
			state.movieId = payload;
		},
		changeDate(state,payload){
			state.date = payload;
			console.log(state.date);
		}
	}
})
export default store