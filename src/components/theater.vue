<template>
	<div id="theater" >
		<div class="header clear" v-if="cinemainfo">
			<div class="l">
				<h3>{{cinemainfo.cinema.name}}</h3>
				<div class="feature">
					<span v-if="cinemainfo.cinema.feature.hasgame">Game</span>
					<span v-if="cinemainfo.cinema.feature.has3D">3D</span>
					<span v-if="cinemainfo.cinema.feature.hasPark">P</span>
				</div>
			</div>
			<div class="info r clear">
				<div class="r info1">tele</div>
				<div class="r info1">pos</div>
			</div>
		</div>
		<div class="swipers" v-if="cinemainfo">
			<div class="swiper-container">
			   <div class="swiper-wrapper">
			     <div class="swiper-slide" v-for="item,index in cinemainfo.movies" @click="handle(item.movieid)">
			     	<img :src="item.img" alt="">
			      	<p>{{item.title}}</p>
			      	<div v-if="item.ratingFinal>0" class="rating">
			      		{{item.ratingFinal}}
			      	</div>
			     </div>  
			   </div>
			 </div>
		</div>
		<div class="section">
			<component is="info"></component>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import info from './info.vue'
	export default{
		name:"theater",
		data(){
			return{
				// cinemainfo:null,
			}
		},
		methods:{
			handle(id){
				
			}
		},
		computed:{
			cinemainfo(){
				return this.$store.state.cinemainfo
			}
		},
		mounted(){
			axios.get(`/cinema/showtime.api?t=201811241921421953&cinemaId=${this.$route.params.cinemaid}`).then(res=>{
				console.log(res.data);
				// this.cinemainfo = res.data.data;
				this.$store.commit('changecinema',res.data.data);
				this.$nextTick(()=>{
					var swiper = new Swiper('.swiper-container', {
					     slidesPerView: 4,
					     spaceBetween:0,
					     centeredSlides: true,
					   });
					
				})
			}).catch(error=>{
				console.log(error);
			})
		},
		components:{
			info
		}
	}
</script>
<style scoped lang="scss">
.l{float:left;}
.r{float:right;}
.clear:after{content:"";display:block;clear:both;}
	#theater{
		.header{
			padding:0.18rem;
			h3{width:2.14rem;font-size: 0.18rem;line-height: 0.18rem;}
			.feature{
				span{padding:0 0.02rem;border:1px solid #93bb55;line-height: 0.2rem;color:#93bb55;}
			}
			.info{
				.info1{width:0.55rem;height:0.26rem;border-left:1px solid #fefefe;text-align: center;}
			}
		}
		.swipers{
			width:100%;background: #828282;padding: 0.17rem 0 0 0;
			.swiper-slide{
				position:relative;width:0.88rem;margin-left: 0.18rem;
				img{border:1px solid grey;width:0.88rem;height:1.23rem;}
				p{text-align: center;line-height: 0.35rem;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:white;}
				.rating{width:0.24rem;height:0.22rem;background: #659d0e;color:white;text-align: center;font-size: 0.12rem;line-height: 0.22rem;position: absolute;right:2px;top:2px;}
			}
			.touming{opacity:0.6;}
			.notouming{opacity:1;}
		}
	}
</style>