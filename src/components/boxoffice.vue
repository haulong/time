<template>
<div class="nav">
	<div class="nuv">
		<router-link  to="/toplist" activeClass="active"><img src="/static/img/left.gif" alt=""></router-link>
	</div>
	<div class="filmpeople">
		<h2>{{name}}</h2>	
    <ul class="ful">
      <li>北美</li>
     <router-link  to="/boxoffice2" activeClass="active"> <li>内地</li></router-link>
      <router-link  to="/boxoffice3" activeClass="active"><li>香港</li></router-link>
      <router-link  to="/boxoffice4" activeClass="active"><li>台湾</li></router-link>
      <router-link  to="/boxoffice5" activeClass="active"><li>日本</li></router-link>
     <router-link  to="/boxoffice6" activeClass="active"> <li>韩国</li></router-link>
    </ul>
		<p>{{summary}}</p>

	</div>
  <article>
    <ul>
      <li v-for="movies in rankNum">
        <p><span>{{movies.rankNum}}</span></p>
        <div class="glotop"><img :src="movies.posterUrl" class="glotop_img"></router-link></div>
       <dl>
         <dt class="dt"><a href="">{{movies.name}}({{movies.decade}})</a><em class="dt_em"><span class="dt_span">{{movies.rating}}</span></em></dt>
         <dd class="dd1">{{movies.nameEn}}</dd>
         <dd class="dd2">
           <p>导演:{{movies.director}}</p>
           <p>主演：{{movies.actor}} {{movies.actor2}}</p>
           <p>{{movies.releaseDate}} {{movies.releaseLocation}}</p>
         </dd>
       </dl>
       <br>
       <aside>
         <div class="div1">
           <p>{{movies.remark}}</p>
         </div>
       </aside>
      </li>
    </ul>

  </article>

</div>



</template>

<script>

import axios from "axios"
export default {
  name: 'movie',
  data () {
    return {
      name:'',
     summary:'',
     movies:[],
     rankNum:[],

     
    }
  },
  mounted(){
    console.log(this.$route.params.id);

  
    axios.get("/Service/callback.mi/TopList/TopListDetailsByRecommend.api?t=2018112416361283486&pageIndex=1&type=1&toplistId=2015&pageSubAreaID=2015").then(res=>{

      // console.log(res.data);

      this.name =res.data.topList.name; 
    }).catch(error=>{
      // console.log(error);
    })


     axios.get("/Service/callback.mi/TopList/TopListDetailsByRecommend.api?t=2018112416361283486&pageIndex=1&type=1&toplistId=2015&pageSubAreaID=2015").then(res=>{

      // console.log(res);

      this.summary =res.data.topList.summary; 



     axios.get("/Service/callback.mi/TopList/TopListDetailsByRecommend.api?t=2018112416361283486&pageIndex=1&type=1&toplistId=2015&pageSubAreaID=2015").then(res=>{

     
      this.rankNum =res.data.movies; 
      console.log(this.rankNum)
    })
     
    })

  },
  methods:{

  }
}
</script>


<style scoped lang="scss">
.nav{	
	flex-flow: row wrap;
		
		width: 100%;
		display: flex;	
		}

.nuv{width: 100%;background:#1c2635}
.nuv img{margin:0.1rem}
.filmpeople{width:100%;display:flex;flex-direction:column}

.filmpeople h2{width:100%;margin:0.1rem;font-size:0.21rem;text-align:center}
.filmpeople p{width:100%;margin:0.1rem;font-size:0.16rem;text-align:center}
article{width:100%;}
article ul{width:100%;}
article ul li{font-size:0.2rem;width:100%;border-top:1px solid #ccc;display:flex;padding:0.2rem;flex-wrap: wrap;}
article ul li>p{background:#ccc}
article ul li:nth-child(1)>p{background:#ff8600}
article ul li:nth-child(2)>p{background:#76c62f}
article ul li:nth-child(3)>p{background:#36b2ec}
article ul li>p{width:0.3rem;height:0.3rem;border:1px solid #ccc;border-radius:50%;margin-left:-0.2rem}
article ul li>p span{display:inline-block;text-align:center;width:100%}
.glotop_img{width:0.7rem;margin-left:0.1rem}

article dl{margin-left:0.2rem}
article dd{font-size:0.15rem;color:#ccc}
article .dd2{font-size:0.15rem;color:#000}
.dt_em{width:0.2rem;height:0.2rem;background:#659d0e;font-style: normal;}
aside .div1{width:100%;background:#ccc;padding:0.05rem;margin:0.1rem}
aside .div1 p{font-size:0.15rem;color:#777}
.ful{width:100%;display:flex;font-size:0.2rem;justify-content: space-between}
</style>


