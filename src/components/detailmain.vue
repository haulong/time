<template>
	<div id="detailmain" v-if="content">
		<div>
			<div class="swiper-container swiper2">
				   <div class="swiper-wrapper">
				     	<div class="swiper-slide" v-for="item,index in content.images" :class="isbig?'big':'cin'">
				     		<img :src="item.url1" alt="">
				     		<p class="desc">{{item.desc}}</p>
				     	</div>
					</div>
			   		<div class="swiper-button-next" @click="handlebig"></div>
			   		<div class="swiper-button-prev" @click="handlebig"></div>
			</div>
		</div>
		<div class="main">
		<div class="head" v-if="!isbig">
			<p class="p1">{{content.title}}</p>
			<p><span>{{content.time}}</span><span>评论{{content.commentCount}}</span><span @click="handlemask()">{{content.source}}</span></p>
				
		</div>
		<div v-html="content.content" v-if="!isbig"></div>
		<div class="foot1">
			<p class="editor" v-if="!isbig">(编辑:{{content.editor}})</p>
			<div class="relate clear">
				<div @click="handleReview(content.id,content.commentCount)">
					<p class="iconfont icon-comments l"></p>
					<span class="ppp">{{content.commentCount}}</span>
				</div>
				<div class="xiangguan r" @click="handlemask">相关电影/影人</div>
			</div>
		</div>
		<masks  v-if="sheetVisible"></masks>
			
		</div>

	</div>
</template>
<script>
	import axios from 'axios'
	import masks from './mask.vue'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
	export default{
		name:"detailmain",
		data(){
			return{
				isbig:false
			}
		},
		components:{
			masks
		},
		computed:{
			content(){
				return this.$store.state.content
			},
			sheetVisible(){
				return this.$store.state.sheetVisible
			}
		},
		mounted(){
			axios.get(`/Service/callback.mi/News/Detail.api?newsId=${this.$route.params.newsid}&t=2018112218161451458`).then((res)=>{
				// console.log(res.data);
				this.$store.commit('changeContent',res.data);
				this.$nextTick(()=>{
					var swiper = new Swiper('.swiper-container', {
					      navigation: {
					        nextEl: '.swiper-button-next',
					        prevEl: '.swiper-button-prev',
					      },
					    });
				})
			})
		},

		methods:{
			handlemask(){
					// this.sheetVisible = !this.sheetVisible;
					this.$store.commit('changeSheet');
					this.$nextTick(()=>{
						new Swiper('.swiper-container', {
						      slidesPerView: 0,
						      spaceBetween: 0,
						      scrollbar: {
						             el: '.swiper-scrollbar',
						             hide: true,
						             draggable : true ,
						             snapOnRelease : true ,
						           },
						    });
						
					})
			},
			handleReview(newsid,count){
				this.$router.push(`/comment/${newsid}`);
				this.$store.commit('commentCount',count)
			},
			handlebig(evt){
				// console.log(111);
				// setTimeout(()=>{
				// 	console.log(evt.target.outerHTML);
				// }, 500;
				this.$nextTick(()=>{
					// console.log(evt.target.getAttribute('aria-disabled'));
					if(evt.target.getAttribute('aria-disabled')==='true'){
						this.isbig = !this.isbig;
					}
				})
			}
		}
	}
</script>
<style lang="scss">
	img{width:100%;display: block;}
	#detailmain{
		.swiper-button-disabled{opacity: 0;}
		.swiper2{
			position:relative;background: black;width:100%;
			.cin{
				height:2.57rem;width:100%;
				img{width:1.55rem;height:100%;margin:0 auto;}
			}
			.big{
				height:5.55rem;width:100%;
				img{width:100%;height:100%;}
			}
			.desc{
				width:100%;height:0.50rem;text-align: left;text-indent:0.2rem;color:white;background: rgba(0,0,0,0.5);line-height: 0.5rem;position:absolute;bottom:0;z-index:2;
			}
		}
		.main{
			padding:0.3rem 0.3rem;height:100%;
			.head{
				margin-bottom:0.4rem;
				.p1{font-size: 0.22rem}
				span{margin-right: 0.25rem;font-size: 0.14rem;}	
			}
			.foot1{margin-top: 0.4rem;
				.editor{text-align: right;margin-right: 0.2rem;}
				.relate{
					border:1px solid black;margin-top: 0.2rem;
					.icon-comments{position: relative;top:0.1rem;font-size: 0.3rem;}
					.ppp{margin-top: 0.1rem;background: red;border-radius: 50%;color:white;}
					.xiangguan{border-radius: 0.3rem;height:0.3rem;width:1.5rem;border:1px solid black;text-align: center;line-height: 0.3rem;position:relative;bottom:0.1rem;}
				}
			}
			
		}
	}
</style>