<template>
	<div id="masks">
		<div class="masks">
			<div class="rela">
				<div class="div1"><span class="span1">相关电影/影人</span><i class="iconfont icon-close" @click="handlemask()"></i></div>
					<div class="swiper-container div2">
					    <div class="swiper-wrapper ullist">
						      <div class="swiper-slide" v-for="datali in content.relations" @click="handledetail(datali.id)">
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
		</div>
		
	</div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

	export default{
		name:"detailmain",
		data(){
			return{

			}
		},
		computed:{
			content(){
				return this.$store.state.content
			}
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
			handledetail(id){
				this.$router.push(`/movie/${id}`);
			}
		}
	}
</script>
<style scoped lang="scss">
	#masks{
		.masks{
			background: rgba(0,0,0,0.6);height:100%;width:100%;position:fixed;bottom:0;z-index:10;
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
		}
	}
</style>