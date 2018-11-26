<template>
	<div id="citylist">
		<div class="div1">热门城市</div>
		<div class="div2">
			<input type="text" placeholder="请输入搜索关键词" v-model="mycity">
			<ul v-if="mycity!==''" class="div4">
				<li v-for="data in array" @click="handle(data.id,data.n)">{{data.n}}</li>
			</ul>
		</div>
		<ul class="div3" v-if="mycity===''">
			<li>
				<div class="nav">当前城市:</div>
				<div class="mai">定位失败</div>
			</li>
			<li>
				<div class="nav">热门城市:</div>
				<div class="mai hot clear">
					<p v-for="item,index in datalist" v-if="index<9" @click="handle(item.id,item.n)">{{item.n}}</p>
				</div>
			</li>
			<li v-for="data in city">
				<div class="nav">{{data}}</div>
				<div class="mai hot clear">
					<p v-for="item,index in datalist" v-if="item.pinyinFull.indexOf(data,0,1)===0" @click="handle(item.id,item.n)">{{item.n}}</p>

				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:"citylist",
		data(){
			return{
				datalist:[],
				city:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				// array:[],
				mycity:""
			}
		},
		methods:{
			handle(id,name){
				this.$store.commit('changeid',{id,name});
				this.$router.push('/purchas');
			}
		},
		computed:{
			array(){

				if(this.datalist.length){
				return 	this.datalist.filter(item=>{
						return item.pinyinFull.toLowerCase().indexOf(this.mycity)>-1||item.pinyinShort.toLowerCase().indexOf(this.mycity)>-1;
					})
				}else{
					return null;
				}
			}
		},
		mounted(){
			axios.get('/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1543038315919').then(res=>{
				console.log(res);
				this.datalist = res.data.p;
			}).catch(error=>{
				console.log(error)
			})
		}
	}
</script>
<style scoped lang="scss">
.l{float:left;}
.r{float:right;}
.clear:after{content:"";display: block;clear:both;}
	#citylist{

		.div1{
			height:0.54rem;color:white;background: #1c2635;text-align: center;line-height: 0.54rem;font-size: 0.24rem;
		}
		.div2{
			padding:0.09rem 0;
			input{display:block;width:3.13rem;height:0.40rem;border:1px solid black;border-radius: 0.1rem;margin:0 auto;}
			
		}
		.div3{
			width:100%;overflow-x:hidden; 
		}
		.div4{
			padding:0.18rem;
			li{font-size:0.18rem;height:0.30rem;line-height: 0.30rem;border-bottom:1px solid black;}
		}
		.nav{width:100%;height:0.34rem;background: #ebebeb;line-height: 0.34rem;font-size: 0.18rem;padding:0 0.18rem;}
		.mai{padding:0.08rem 0.18rem;line-height: 0.36rem;font-size: 0.16rem;}
		.hot{
			p{
				float:left;width:0.84rem;
				}
			}
	}
</style>