





































<template>
	<div id="search">
		<div class="head">
			<div class="back"><router-link to="/home"><img src="/static/img/left.gif" alt=""></router-link></div>
			<div class="select"><input type="text" placeholder="影片/影院/影人，任你搜"></div>
			<button>搜索</button>
		</div>
		<div class="advertisment">
			<iframe src="https://static4da.mtime.cn/feature/mobile/banner/2018/1120/glmfsj750210.html" style="height: 1.05rem;width:100%" scrolling="no" ></iframe>
		</div>	
		<div class="hotselect">
			<h3>热门搜索</h3>
			<ul>
				<li v-for="data in list">{{data}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';
import axios from 'axios'
export default{
	data () {
		return {
		  content: '',
		  list: []
		}
	},
	mounted () {
		this.$store.commit('close')
		axios.get('/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=290&t=2018112118404521934').then((res)=>{
			this.content = res.data.advList[1].url
		}) 
		axios.get('/Service/callback.mi/Search/HotKeyWords.api?t=20181122833939976').then((res)=>{
			this.list = res.data.keywords;
			console.log(res.data.keywords);
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
			height: 0.52rem;
			width: 100%;
			overflow: hidden;
			background: #1c2635;
			display: flex;
			.back{
				overflow-x: hidden; 
				width: 0.14rem;
				height: 0.21rem;
				margin: 0.14rem 0.14rem 0 0.15rem;
			}
			.select{
				overflow-x: hidden;
				height: 0.41rem;
				width: 2.56rem;
				border-radius: 0.08rem;
				background: white url(/static/img/mon.gif) no-repeat 0.09rem 0.11rem;
				margin-top: 0.06rem;
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
				margin-top: 0.1rem
			}
		}
		.advertisment{
			overflow-x: hidden;
			width: 100%;
			height: 1.18rem;
			border: none;
			overflow: hidden;
		}
		.hotselect{
			overflow-x: hidden;
			width: 100%;			
			h3{
				height: 0.32rem;
				border-bottom: 0.01rem solid #ececec;
				color: #a2a2a2;
				text-indent: 0.18rem;
				font-size: 0.12rem;
				background: #f6f6f6;
				border-bottom: 0.01rem solid #e5e5e5;
				border-top: 0.01rem solid #e5e5e5;
				line-height: 0.29rem;
			}
			ul{
				height: 3.5rem;
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				margin-left: 0.17rem;
				align-content: flex-start;
				li{
					font-size: 0.18rem;
					color: #4493de;
					line-height: 0.32rem;
					height: 0.32rem;
					padding: 0 0.14rem;
					border: 0.01rem solid #c0e1ff;
					border-radius: 0.06rem;
					margin-right: 0.08rem;
					margin-top: 0.17rem;
				}
			}
		}
	}
</style>



