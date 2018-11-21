<template>
	<div id="search">
		<div class="head">
			<div class="back"><router-link to="/home"><img src="/static/img/left.gif" alt=""></router-link></div>
			<div class="select"><input type="text" placeholder="影片/影院/影人，任你搜"></div>
			<button>搜索</button>
		</div>
		<iframe name="content_iframe" src="https://static4da.mtime.cn/feature/mobile/banner/2018/1120/glmfsj750210.html" frameborder=0 class="advertisment"></iframe>
	</div>
</template>
<script>
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';
import axios from 'axios'
export default{
	data () {
		return {
		  content: ''
		}
	},
	mounted () {
		this.$store.commit('close')
		axios.get('/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=290&t=2018112118404521934').then((res)=>{
			this.content = res.data.advList[1].url
			console.log(this.content)
		})   
	},
	beforeDestroy () {
		this.$store.commit('close')
	}
}
</script>
<style scoped lang="scss">
	#search{
		.head{
			height: 0.51rem;
			width: 100%;
			overflow: hidden;
			background: #1c2635;
			display: flex;
			.back{
				width: 0.14rem;
				height: 0.21rem;
				margin: 0.14rem 0.14rem 0 0.15rem;
			}
			.select{
				height: 0.41rem;
				width: 2.56rem;
				border-radius: 0.08rem;
				background: white url(/static/img/mon.gif) no-repeat 0.09rem 0.11rem;
				margin-top: 0.04rem;
				overflow: hidden;
				input{
					display: block;
					width: 1.9rem;
					height: 0.41rem;
					margin-left: 0.31rem;
					outline: none;
					border: none;
					font-size: 0.16rem;
				}
			}
			button{
				width: 0.5rem;
				height: 0.3rem;
				border: 0.02rem solid white;
				background: #1c2635;
				color: white;
				border-radius: 0.06rem;
				margin-left: 0.06rem;
				margin-top: 0.08rem
			}
		}
		.advertisment{
			width: 100%;
			height: 0.88rem;
		}
	}	
</style>