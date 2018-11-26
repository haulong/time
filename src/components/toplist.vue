
<template>
	<div class="nav">
<!-- <ul class="navlist">
	<li>新闻</li>
	<li>预告片</li>
	<router-link tag="li" to="/toplist" activeClass="active"><a>排行榜</a></router-link>
	<router-link tag="li" to="/toplistMovie" activeClass="active"><a>影评</a></router-link>
	
</ul> -->

<div class="imgs">
<router-link  to="/movie" activeClass="active"><img :src="datalist.imageUrl" class="datalist"></router-link>
<div class="title">
<b>{{datalist.title}}</b></router-link>
</div>

	</div>
	<div class="toplist">
		<div class="topmenu">
			<ul>
				<router-link  to="/datail2" >
				<li class="lt1" ><img src="/static/img/top01.png" alt="" class="top1"></i><p><span class="p1">时光Top100</span></p></li></router-link>
				<router-link  to="/datail3" ><li class="lt2"><img src="/static/img/top02.png" alt="" class="top2"><p><span class="p2">华语Top100</span></p></li></router-link>
				<router-link  to="/boxoffice" ><li class="lt3"><img src="/static/img/top03.png" alt="" class="top3"><p><span class="p3">全球票房榜</span></p></li></router-link>
				
			</ul>
		</div>


		<div class="topnews">
		<ul class="topul">
			<li v-for="data in list" class="topli" @click="handles(data.id)">
				<h3>{{data.topListNameCn}}</h3><img src="/static/img/arrow.gif" class="adver">
				<p>{{data.summary}}</p>
			
			</li>
		</ul>
		</div>
	</div>


	

</div>

</template>



<script>
import axios from "axios"
export default {
  name: 'toplist',
  data () {
    return {
      datalist:'',
     list:[],
     
     topLists:[]

    }
  },
  mounted(){
    
    axios.get("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018112213381514953").then(res=>{

      // console.log(res.data);

      this.datalist =res.data.topList; 
    }).catch(error=>{
      // console.log(error);
    })


     axios.get("/Service/callback.mi/TopList/TopListOfAll.api?t=201811238211996627&pageIndex=1").then(res=>{

      console.log(res);

      this.list =res.data.topLists; console.log(this.list);
    })

   

  },
  methods:{
  		handles(id){
			this.$router.push('/datail/'+id);
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
			
		
		
		.datalist{width:100%;
		}
		.navlist {margin:0.2rem}
	.look{font-size:0.3rem;border-top:1px solid #000;width:100%;color:#1e7dd7;text-align:center}
	.title{width:100%;height:0.5rem;background: rgba(0,0,0,0.4);}
	.title b{font-size: 0.2rem;position:absolute;color:#fff;line-height:0.5rem;margin-left:13%};
	.toplist{width:100%}
	.topmenu{width:100%;display:flex;}
	.topmenu.ul{width:100%;flex: 1;
			display: flex;
			};
	.topmenu.ul li p{margin-top:0.5rem;text-align:center};	
			
	
		.top1{
			width: 0.7rem;
			height: 0.7rem;
			margin-left: 0.14rem;
			margin-top: 0.16rem;
		}
		.top2{
			width: 0.7rem;
			height: 0.7rem;
			margin-left: 0.14rem;
			margin-top: 0.16rem;
		}
		.top3{
			width: 0.7rem;
			height: 0.7rem;
			margin-left: 0.14rem;
			margin-top: 0.16rem;
		};
		.topmenu .p1{color:#1498c9}
		.topmenu .p2{color:#3bc7c2}
		.topmenu .p3{color:#ffc12d}







		.topnews{width:100%;display: flex;flex-direction:column;
			};

		.topul{width:100%;	flex-direction:column;
			flex: 1;
			
			
			}
		.topli{width:100%;border-top:1px solid #000;
			
			};
			.topli h3{margin-top:0.2rem}
.topli p{color:#777};
.adver{margin-left:3.3rem
		
		
	}
		

</style>