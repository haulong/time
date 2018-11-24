<template>
  <div id="purchas">
   		<div class="head clear">
   			<p class="l p1" @click="handlecity()">{{$store.state.cityname}}</p>
   			<input type="text" placeholder="筛选影院">
   			<p class="r p2">搜索</p>
   		</div>
   		<ul class="nav">
   			<li>离我最近</li>
   			<li>全城</li>
   			<li>影厅特效</li>
   		</ul>
   		<iframe :src="swip" frameborder="0" seamless style="width:100%;height:0.90rem"></iframe>
   		<div class="main">
   			<p class="p3">以下影院均非时光网自营</p>
   			<ul class="cinema">
   				<li v-for="item in cinema" @click="handletheater(item.cinemaId)">
   					<div class="clear">
   						<span class="span1 l">{{item.cinameName}}</span>
   						<span class="span2 r" v-if="item.minPrice/100">{{item.minPrice/100}}元起</span>
   					</div>
   					<div class="address">
   						{{item.address}}
   					</div>
   					<div class="feature">
   						<span v-if="item.feature.has3D">3D</span>
   						<span v-if="item.feature.hasFeature4D">4D</span>
   						<span v-if="item.feature.hasFeature4k">4K</span>
   						<span v-if="item.feature.hasfeatureDolby">杜比</span>
   						<span v-if="item.feature.hasFeatureHuge">巨幕</span>
   						<span v-if="item.feature.hasIMAX">IMAX</span>
   						<span v-if="item.feature.hasLoveseat">情侣座</span>
   						<span v-if="item.feature.hasVIP">VIP</span>
   					</div>
   				</li>
   			</ul>
   		</div>
  </div>
</template>
<script>
import axios from 'axios'
// import cityList from 'cityList.vue'
	export default{
		name:"purchas",
		data(){
			return {
				swip:'',
				// cinema:[]
			}
		},
		computed:{
			cinema(){
				return this.$store.state.info
			},
			cinemaname(){
				return this.$store.state.cityname;
			}
		},
		methods:{
			timelock(){
				var date = new Date();
				console.log(date.getTime());
				return date.getTime();
			},
			handlecity(){
				this.$router.push('/citylist')
			},
			handletheater(id){
				this.$router.push(`/theater/${id}`);
			}
		},
		mounted(){
			axios.get(`/api/proxy/apim/Advertisement/MobileAdvertisementInfo.api?locationId=290&_=${this.timelock()}`).then(res=>{
				console.log(res.data);
				this.swip = res.data.advList[1].url;
			}).catch(error=>{
				console.log(error);
			}),
			// axios.get(`/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=${this.timelock()}`).then(res=>{
			// 	console.log(res.data.data.cinemaList);
			// 	this.cinema = res.data.data.cinemaList;
			// })
			this.$store.dispatch('getcinema');
		}
	}
</script>
<style scoped lang="scss">
.l{float:left;}
.r{float:right;}
.clear:after{content:"";display: block;clear:both;}
	#purchas{
		overflow: hidden;
		.head{
			width:100%;height:0.33rem;background: #f6f6f6;padding:0.18rem 0.22rem;display: flex;
			.p1{margin-right: 0.44rem;line-height: 0.33rem;}
			input{width:1.70rem;height:0.33rem;border:1px solid #bebebe;border-radius: 0.1rem;margin-right: 0.5rem;outline: none;}
			.p2{line-height: 0.33rem;}
		}
		.nav{
			display: flex;padding:0.12rem 0;border-bottom:1px solid #bebebe;
			li{
				flex:1;border-right: 1px solid #bebebe;height:0.16rem;line-height: 0.16rem;text-align: center;
			}
		}
		.main{
			.p3{
				text-align: center;height:0.3rem;line-height: 0.3rem;background: #f2f2f2;
			}
			.cinema{padding: 0 0.18rem;
				li{border-bottom:1px solid black;padding:0.14rem 0;
					.span1{font-size: 0.16rem;font-weight: bold;}
					.span2{font-size: 0.16rem;color:orange;}
					.address{font-size: 0.12rem;line-height: 0.18rem;color:#8e8e8e;margin:0.10rem 0;}
					.feature{
						span{border:1px solid #597189;color:#597189;line-height: 0.18rem;font-size: 0.12rem;margin-right:0.05rem;padding:0 1px;}
					}
				}
			}
		}
	}
</style>