<template>	
	<div id="trailer">
		<div class="div1" v-if="content">
			<img :src="content.coverImg" :alt="content.title">
			<p class="p1">{{content.title}}</p>
			
		</div>
		<ul class="div3">
			<li v-for="data,index in dataList" class="clear" @click="handleplay(data.url)" :key="data.id">
				<img :src="data.coverImg" alt="" class="l">
				<div class="div2 r" >
					<h4>{{data.movieName}}</h4>
					<p>{{data.summary}}</p>
				</div>
			</li>
		</ul>
		 		<child url='http://vfx.mtime.cn/Video/2018/09/05/mp4/180905134907179704.mp4' poster="http://img5.mtime.cn/mg/2018/09/05/134901.74029650_120X90X4.jpg" v-if="isplay"></child>
		 
	</div>
</template>
<script>
import axios from 'axios'
import child from './vedioplay.vue'
import Vue from 'vue'
	export default{
		name:"newsMovie",
		data(){
			return {
				content:null,
				dataList:[],
				videoURL:'',
				poster: '',
				isplay:false
			}
		},
		methods:{
			handleplay(url){
				// this.isplay[i] = true;
				// Vue.set(this.isplay,i,true);
				// console.log(this.isplay);
				console.log(111);
				// this.videoURL = url;
				
				console.log(this.videoURL)
				this.isplay = !this.isplay;
				// console.log(evt.target)
				// console.log(evt.target.previosElementSibling.outerHTML);
			}
		},
		components:{
			child
		},
		mounted(){
			axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20181123947515818').then(res=>{
				this.content = res.data.trailer;
				
				// console.log(this.content);
			}),
			axios.get('/Service/callback.mi/PageSubArea/TrailerList.api?t=2018112310495028334').then(res=>{
				this.dataList = res.data.trailers;
			})
		}
	}
</script>
<style scoped lang="scss">
.l{float:left;}
.r{float:right;}
.clear:after{content:"";display: block;clear:both;}
	#trailer{
		.div1{
			position: relative;
			img{width:100%;height:2.17rem;display: block}
			.p1{
				position: absolute;width: 100%;height:0.5rem;background: rgba(0,0,0,0.5);color:white;font-weight: bold;font-size: 0.20rem;text-align: center;line-height: 0.5rem;bottom:0;
			}
		}
		.div3{padding:0 0.18rem;
			li{
				padding:0.18rem 0;border-bottom: 1px solid #dbdbdb;
				.img{border:1px solid #dbdbdb;}
				.div2{width:1.84rem;
					h4{line-height: 0.26rem;}
					p{line-height: 0.30rem;font-size: 0.15rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
				}
			}
		}
	}
</style>