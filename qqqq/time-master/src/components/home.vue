<template>
	<div id="home">
	  <div class="select">
	  	<div class="regition"><a href="">北京</a></div>
	  	<div class="film">
	  		<router-link to="/search">
	  			影片/影院/影人，任你搜
	  		</router-link>
		</div>	  		
	  </div>
	  <div class="playing">
	  	<h3>正在热映（{{arr.length}}部）</h3>
	  	<ul class="playingFilm">
	  		<li v-for="data in arrhot">
	  			<img :src="data.img" alt="">
	  			<p>{{data.t}}</p>
	  		</li>
	  	</ul>
	  	<h3 class="titlew">即将上映（{{playwill}}部）</h3>
	  </div>
	  <img :src="adver" alt="" class="adver">
	  <div class="focus">
	  	<h3>今日热点</h3>
	  	<ul>
	  		<li v-for="data in list">
	  			<img :src="data.img" alt="">
	  			<hgroup>
	  				<h3>{{data.title}}</h3>
	  				<h4>{{data.desc}}</h4>
	  			</hgroup>
	  		</li>
	  	</ul>
	  </div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
	  data () {
	  	return {
	  		arr: [],
	  		adver: '',
	  		list: [],
	  		playwill: null
	  	}
	  },
	  mounted () {
	  	axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2018112112553372810').then((res)=>{
	  		this.arr = res.data.ms
	  		this.playwill = res.data.totalComingMovie
	  		console.log(typeof this.playwill)
	  	})
	  	axios.get('/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api?t=201811211344614108').then((res)=>{
	  		this.adver = res.data.areaFirst.image
	  		console.log(this.adver)
	  	})
	  	axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201811211344643070').then((res)=>{
	  		this.list = res.data.hotPoints
	  		console.log(this.list)
	  	})
	  },
	  computed: {
	  	arrhot () {
	  		return this.arr.slice(0,8);
	  	}
	  }
	}
</script>
<style scoped lang="scss">  
  #home{
  	width: 100%;
  	background: #f6f6f6;
  	h3{
		font-size: 0.18rem;
		height: 0.48rem;
		width: 100%;
		text-indent: 0.19rem;
		line-height: 0.48rem;
		font-weight: bold;
  	}
	.select{
	  width: 100%;
	  height: 0.62rem;
	  background: #f6f6f6;
	  border-bottom: 1px solid #dbdbdb;
	  display: flex;
	  .regition{
	  	height: 0.62rem;
	  	width: 0.92rem;
	  	a{
	  	  text-align: center;
	  	  font-size: 0.18rem;
	  	  color: black;
		  line-height: 0.62rem;
		  display: block
	  	}
	  }
	  .film{
	  	height: 0.38rem;
	  	width: 2.61rem;
	  	border: 1px solid #c1c1c1;
	  	font-size: 0.14rem;
	  	margin-top: 0.11rem;
	  	border-radius: 8px;
	  	background: white url(/static/img/mon.gif) no-repeat 0.08rem 0.09rem;
	  	a{
	  	  color: black;
	  	  color: #bababa;
	  	  display: block;
	  	  line-height: 0.38rem;
	  	  margin-left: 0.33rem;
	  	}
	  }
	}
	.playing{
		height: 4.8rem;
		margin-top: 0.01rem;
		margin-bottom: 0.13rem;
		border-bottom: 1px solid #e9e9e9;
		width: 100%;
		background: white;
		h3{
			background: url(/static/img/arrow.gif) no-repeat 3.42rem 0.19rem;
		}
		.playingFilm{
			margin-left: 0.2rem;
			height: 3.68rem;
			border-bottom: 1px solid #dcdcdc;
			li{
			  width: 0.8rem;
			  height: 1.84rem;
			  float: left;
			  margin-right: 0.08rem;
			  img{
			  	width: 100%;
			  	height: 1.22rem;
			  }
			  p{
			  	width: 100%;
			  	height: 0.36rem;
			  	font-size: 0.16rem;
			  	margin-top: 0.06rem;
			  	line-height: 0.18rem;
			  	overflow: hidden;
			  }
			}
		}
		.titlew{

		}
	}
	.adver{
		width: 100%;
		height: 1.92rem;
		margin-top: 0.14rem;
	}
	.focus{
		margin-top: 0.14rem;
		background: white;
		ul{
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-bottom: 0.01rem solid #dbdbdb;
			li{
				width: 3.37rem;
				height: 0.98rem;
				padding-top: 0.16rem;
				padding-bottom: 0.18rem;
				border-bottom: 0.01rem solid #dbdbdb;
				display: flex;
				img{
					width: 1.37rem;
					height: 0.96rem;
					border: 0.01rem solid #a29e9c;
					margin-right: 0.13rem;
				}
				hgroup{
					h3{
						height: 0.2rem;
						text-indent: 0;
						line-height: 0.2rem;
					}
					h4{
						font-size: 0.14rem;
						height: 0.34rem;
						color: #a2a2a2;
						line-height: 0.34rem;
					}
				}
			}
			li:first-of-type{
				padding-top: 0;
			}
			li:last-of-type{
				border-bottom: none;
			}
		}
	}
	
  }
</style>