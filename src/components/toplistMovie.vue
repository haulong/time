<template>
	<div class="nav">
<!-- <ul class="navlist">
	<li>新闻</li>
	<li>预告片</li>
	<router-link tag="li" to="/toplist" activeClass="active"><a>排行榜</a></router-link>
	<router-link tag="li" to="/toplistMovie" activeClass="active"><a>影评</a></router-link>
	
</ul> -->

<article class="article">
	<ul>
		<li>
			<a href="" >
				<router-link  to="/toplistMovie_1" activeClass="active"><img :src="datalist.posterUrl" alt=""></router-link>
				<div class="article_div">
					<img :src="datalist.posterUrl" alt="" class="img_2">

					<h2>
					<b>{{datalist.movieName}}
						<br>
						<span><i>{{datalist.title}}</i></span>
					
					
					</b>

				</h2>
				</div>
				
			</a>
		</li>
	</ul>


</article>
<div class="article2">
	<ul>
		<li v-for="data in commentCount" @click="handles(data.id)">
			<b>{{data.title}}</b>
			<br>
			<div class="pinglun">
				<img :src="data.userImage" alt=""><b><span>{{data.nickname}}-评分</span><b>《{{data.relatedObj.title}}》</b><em>{{data.rating}}</em></b>
			</div>
		</li>
	</ul>


</div>
</div>





</template>



<script>
import axios from "axios"
export default {
  name: 'toplistMovie',
  data () {
    return {
     datalist:[],
     commentCount:[],
    
    }
  },
  mounted(){





  	axios.get("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018112520442782166").then(res=>{

      // console.log(res.data);

      this.datalist =res.data.review;
    }).catch(error=>{
      // console.log(error);
    })


    axios.get("/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=2018112521495519738").then(res=>{

      console.log(res);

      this.commentCount =res.data;console.log(this.commentCount);
    })

    
   },
  methods:{
  		handles(id){
			this.$router.push('/toplistMovie_review/'+id);
  		}
  }
}
</script>

<style scoped lang="scss">
	.nav{	
	flex-flow: row wrap;
		
		width: 100%;
		display: flex;	
		}
		.nav ul{width:100%;	
			flex: 1;
			display: flex;
			justify-content: space-around;
			}
			.nav ul li{
				font-size: 0.14rem;
				
				
				color: #000;
				height: 100%;
				box-sizing: border-box;

			}
			a:hover{color:#1e7dd7}
			
		
		
		.navlist {margin:0.2rem}
	.article ul{width:100%;display:flex}
	.article ul li{width:100%}
	.article ul li a>img{width:100%;height:3rem;position: relative}
	.article_div{width:100%;background:rgba(0,0,0,0.5);position: absolute;height:1.1rem;top:3rem}
	.img_2{width:20%;position: absolute;top:-0.5rem;border:1px solid #fff;margin:0.2rem}
	.article_div b{position: absolute;left:1rem;color:#fff}
	.article_div b i{font-style:normal}
	.article_div b span{color:#ccc;font-size:0.1rem}
	.article2{width:100%;display:flex;}
	.article2 ul{width:100%;display:flex;flex-direction:column}
	.article2 ul li{width:100%;border-bottom:1px solid #ccc}
	.article2 ul li a{font-size:0.2rem;margin:0.2rem}
	.article2 ul li img{width:10%;height:10%;border-radius:50%;margin:0.1rem}
	.article2 div{display:flex;flex-direction:row;flex-wrap: wrap;}
	.article2 div em{font-style:normal;width:0.1rem;height:0.1rem;background:#659d0e}
	.article2 a{color:#000}
	.article2 b{font-size:0.2rem}
	.pinglun{display:flex;flex-direction:row;flex-wrap: wrap;}
	.pinglun span{color:#777}
</style>