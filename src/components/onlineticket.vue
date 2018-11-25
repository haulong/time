<template>
	<div id="online">
		<div class="main" v-if="onlineinfo">
			<div class="head">
				<p class="p1">{{onlineinfo.movieName}}</p>
				<p>{{onlineinfo.versionDesc}}&nbsp;&nbsp;{{onlineinfo.language}}</p>
			</div>
			<div class="nav">
				<div class="navt">
					<p>{{onlineinfo.hallName}}银幕</p>
					<p class="p2">(剩余{{onlineinfo.remainSeat}}个座位)</p>
				</div>
				<div class="navb">
					<div class="seatl">
						
					</div>
					<div class="seatr">
						<ul>
							<li v-for=" data,index in onlineinfo.seatRowCount">
								<span v-for="item in onlineinfo.seatColumnCount">1</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="div1">{{new Date(onlineinfo.realTime*1000).getUTCMonth()+1}}月{{new Date(onlineinfo.realTime*1000).getUTCDate()}}日({{index}})&nbsp;&nbsp;{{new Date(onlineinfo.realTime*1000).getUTCHours()}}:{{new Date(onlineinfo.realTime*1000).getUTCMinutes()}}<span>更换场次</span></div>
				<div class="div2">
					{{onlineinfo.cinemaName}}
				</div>
				<div class="div3">
					<span>4排9座</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:"online",
		data(){
			return{
				onlineinfo:null,
				day:['周日','周一','周二','周三','周四','周五','周六'],
				index:'',
				url:'../../static/img/icon_seatfalse.png',
			}
		},
		methods:{

		},
		mounted(){
			axios.get(`Service/callback.mi/showtime/OnlineSeatsByShowTimeID.api?dId=${this.$route.params.dId}&t=201811251738220620`).then(res=>{
				console.log(res.data);
				this.onlineinfo = res.data;
				this.index = this.day[new Date(res.data.realTime*1000).getUTCDay()];
				// console.log(this.index);
			}).catch(error=>{
				console.log(error);
			})
		}
	}
</script>
<style scoped lang="scss">
	#online{
		/*overflow: hidden;*/
		.head{
			background: #1c2635;padding:0.05rem 0;
			p{
				color:white;text-align: center;line-height: 0.24rem;
			}
			.p1{font-size: 0.18rem;}
		}
		.nav{
			border-bottom:1px solid #cacaca;
			.navt{
				width:100%;height:0.95rem;background: url("../../static/img/screen.png") no-repeat center 0.2rem;background-size: contain;padding-top: 0.35rem;
				p{text-align: center;line-height: 0.20rem;}
				.p2{color:#cacaca;}
			}
			.navb{
				overflow-x:auto;width:6rem;
				.seatr{
					li{
						span{display:inline-block;width:0.16rem;height:0.15rem;background:url('../../static/img/icon_seat.png') no-repeat 0 0;background-size: 0.16rem 0.15rem;margin-right: 0.03rem;margin-bottom: 0.03rem;}
					}
				}
			}
		}
		.section{
			padding:0 0.18rem;
			.div1{
				font-weight: bold;font-size: 0.19rem;line-height: 0.40rem;
				span{font-size: 0.16rem;color:#1f7ed7;margin-left:0.1rem;}
			}
			.div2{line-height: 0.30rem;}
			.div3{
				span{line-height: 0.3rem;border:1px solid red;padding:0 0.04rem;}
			}
		}
	}
</style>