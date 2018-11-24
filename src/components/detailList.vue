<template>
	<div id="detailList" v-if="content">
		<div>
			<div class="head">
				<p class="p1">{{content.title}}</p>
				<p><span>{{content.time}}</span><span>评论{{content.commentCount}}</span><span @click="handlemask()">相关电影/影人</span></p>
					
			</div>
			<div class="divcontent" v-html="content.content">
				
			</div>
			<div class="foot1">
				<p>(<span v-if="!content.author===''">作者:{{content.author}}</span>&nbsp;&nbsp;<span>编辑:{{content.editor}}</span>)</p>
				<div class="relate clear">
					<div @click="handleReview(content.id,content.commentCount)">
						<p class="iconfont icon-comments l"></p>
						<span class="ppp">{{content.commentCount}}</span>
					</div>
					<div class="xiangguan r" @click="handlemask()">相关电影/影人</div>
				</div>
			</div>
		</div>	
		<masks  v-if="sheetVisible"></masks>
		<!-- <div class="mask" v-if="sheetVisible">
			<div class="rela">
				<div class="div1"><span class="span1">相关电影/影人</span><i class="iconfont icon-close" @click="handlemask()"></i></div>
				

					<div class="swiper-container div2">
					    <div class="swiper-wrapper ullist">
						      <div class="swiper-slide" v-for="datali in content.relations">
							      	<img :src="datali.image" alt="">
							      	<p>{{datali.name}}</p>
							      	<div v-if="datali.rating>0" class="rating">
							      		{{datali.rating}}
							      	</div>
						      </div>
					    </div>
					    <div class="swiper-scrollbar"></div>
					</div>
				
			</div>
		</div> -->
	</div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import masks from './mask.vue'
	
	export default{
		name:"detailList",
		data(){
			return{
				// content:null,
				// sheetVisible:false,

			}
		},
		components:{
			masks
		},
		computed:{
			sheetVisible(){
				return this.$store.state.sheetVisible
			},
			content(){
				return this.$store.state.content
			}
		},
		mounted(){
			axios.get(`/Service/callback.mi/News/Detail.api?newsId=${this.$route.params.Did}&t=2018112117271743175`).then(res=>{
				console.log(res);
				// this.content = res.data;
					this.$store.commit('changeContent',res.data);
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
			}
		}

	}
</script>
<style lang="scss">
img{width:100%;}
.l{float:left;}
.r{float:right;}
.clear:after{content: "";display: block;clear:both;}
#detailList{
	padding:0.3rem 0.3rem;height:100%;
	.head{
		margin-bottom:0.4rem;
		.p1{font-size: 0.22rem}
		span{margin-right: 0.25rem;font-size: 0.14rem;}
		
	}
	.foot1{margin-top: 0.4rem;
		.relate{
			border:1px solid black;margin-top: 0.2rem;
			.icon-comments{position: relative;top:0.1rem;font-size: 0.3rem;}
			/*.ppp{width:0.2rem;height:0.2rem;border-radius: 50%;background: red;}*/
			.ppp{margin-top: 0.1rem;background: red;border-radius: 50%;color:white;}
			.xiangguan{border-radius: 0.3rem;height:0.3rem;width:1.5rem;border:1px solid black;text-align: center;line-height: 0.3rem;position:relative;bottom:0.1rem;}
		}
	}
	/*.mask{
		background: rgba(0,0,0,0.6);height:100%;width:100%;position:fixed;bottom:0;
		.rela{
			width:100%;background: white;position:absolute;bottom:0;
			.div1{text-align: center;height:0.5rem;line-height: 0.5rem;font-size: 0.16rem;border-bottom: 1px solid grey;
				.span1{margin-right: 1rem;}
			}
			.div2{
				.ullist{ padding:0.12rem 0 0.31rem 0;
					.swiper-slide{
						position:relative;width:0.96rem;margin-left: 0.18rem;
						img{border:1px solid grey;width:0.96rem;height:1.43rem;	}
						p{text-align: center;line-height: 0.68rem;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
						.rating{width:0.24rem;height:0.22rem;background: #659d0e;color:white;text-align: center;font-size: 0.12rem;line-height: 0.22rem;position: absolute;right:2px;top:2px;}
						
					}
				}
			}
		}
	}*/
}
</style>
