<template>
	<div id="info" v-if="cinemainfo">
		<div class="main" v-for="item in cinemainfo.movies" v-if="item.movieId===$store.state.movieId">
			<div class="div1" @click="handledeta(item.movieId)">
				<p class="p1">{{item.title}}</p>
				<p class="p2">{{item.length}}-{{item.type}}</p>
			</div>
			<div class="clear div2">
				<div class="l" @click="handle(item.showDates[0])">今天({{item.showDates[0]}})</div>
				<div class="l" @click="handle(item.showDates[1])">明天({{item.showDates[1]}})</div>
			</div>
			<div class="div3">
				<ul v-for="data in cinemainfo.showtimes" v-if="$store.state.movieId===data.movieId&&$store.state.date===data.moviekey.split('_')[1].split('-').join('')">
					<li v-for="detail in data.list" class="clear">
						<!-- {{data.moviekey.split('_')[1].split('-').join('')}} -->
						<div class="l div11">{{new Date(detail.showDay*1000).getHours()}}:{{new Date(detail.showDay*1000).getMinutes()||'00'}}</div>
						<div class="l div22">
							<div>{{detail.versionDesc}}/{{detail.language}}</div>
							<div>{{detail.hall}}</div>
						</div>
						<div class="r div44" v-if="detail.providers[0]" @click="handleonline(detail.providers[0].dId)" >购票</div>
						<div class="r div33">
							￥{{detail.price}}
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
// Vue.directive('hello',{
// 	inserted(el,binding,vnode){
// 		el.style
// 	}
// })
	export default{
		name:"info",
		data(){
			return{

			}
		},
		computed:{
			cinemainfo(){
				return this.$store.state.cinemainfo;
			}
		},
		methods:{
			handle(date){
				this.$nextTick(()=>{
					// document.querySelector('.focus').className = 'l';
					var da = date.split('-').join('')
					// evt.target.className = 'l focus'
					// console.log(this.$refs.focus[0]);
					this.$store.commit('changeDate',da)
					
				})
			},
			handledeta(id){
				this.$router.push('/movie/'+id);
			},
			handleonline(id){
				// console.log(id);
				this.$router.push('/online/'+id);
			}
		}
	}
</script>
<style scoped lang="scss">
.l{float:left;}
.r{float:right;}
.clear:after{content:"";display: block;clear:both;}
	#info{
		.div1{width:100%;border-bottom:1px solid black;text-align: center;padding:0.16rem 0;
			.p1{font-size: 0.18rem;font-weight: bold;}
			.p2{font-size: 0.15rem;margin-top: 0.06rem;}
		}
		.div2{
			border-bottom:1px solid black;
			div{padding:0 0.12rem;line-height: 0.50rem;}
			.focus{border-bottom:2px solid #1b7bd6;color:#1b7bd6;}
		}
		.div3{
			padding-left: 0.18rem;
			li{
				border-bottom:1px solid black;padding:0.16rem 0;
				.div11{
					font-size: 0.20rem;margin-right: 0.10rem;font-weight: bold;line-height: 0.40rem;
				}
				.div33{
					color:orange;margin-right: 0.25rem;line-height: 0.40rem;
				}
				.div44{
					width:0.89rem;height:0.34rem;line-height: 0.34rem;text-align: center;background: orange;color:white;border-radius: 0.18rem;
				}
			}
		}
	}
</style>