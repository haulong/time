<template>
<div class="nav">
	<div class="nuv">
		<router-link  to="/toplistMovie" activeClass="active"><img src="/static/img/left.gif" alt=""></router-link>
	</div>
	<section>
		<h2><b>{{title.title}}</b></h2>
		<div class="sectiom_div1">
			<img :src="title.userImage" alt="">
			<ul>
				<li><p>{{title.nickname}}</p><p class="p2">评《{{title.relatedObj.name}}》<i>{{title.rating}}</i></p></li>
			
			</ul>
			<a href=""><img :src="title.relatedObj.image" alt="" class="img2"></a>
		</div>
		
		



	</section>
<div class="time"><span>{{title.time}}</span></div>
		<div class="wz">
			<p v-html="title.content">{{title.content}}</p>
		</div>
			
</div>



</template>

<script>

import axios from "axios"
export default {
  name: 'toplistMovie_review',
  data () {
    return {
     title:[],
     
    }
  },
  mounted(){

 console.log(this.$route.params.id);
var b=this.$route.params.id

  axios.get(`/Service/callback.mi/Review/Detail.api?reviewId=${b}&t=201811252328275153`).then(res=>{
      console.log(res);

      this.title =res.data;
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
section {width:100%;display:flex;flex-direction:column}
section h2{font-size:0.3rem;text-align:center}
.sectiom_div1{width:100%;display:flex;border-bottom:1px solid #000;display:relative;}
.sectiom_div1>a{width:40%;display:absolute;right:0.4rem}
.sectiom_div1>img{width:10%;height:20%;border-radius:50%;margin:0.2rem;}
.sectiom_div1 ul{width:50%;display: flex;flex-direction:column;}

.sectiom_div1 li>p{font-size:0.2rem}
.sectiom_div1 i{font-size:0.1rem;width:0.1rem;height:0.1rem;background:#659d0e;font-style:normal;color:#fff}

.sectiom_div1 .img2{width:70%;height:70%;}
.sectiom_div1 .p2{color:#777}


.time{font-size:0.1rem;color:#777;margin:0.1rem}
.wz p{font-size:0.2rem;padding:0.2rem}
</style>


