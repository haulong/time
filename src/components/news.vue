
<template>
	
	<div id="news">
		<ul>
			<router-link to="/news/newsMovie" tag="li" active-class="active">新闻</router-link>
			<router-link to="/news/trailer" tag="li" active-class="active">预告片</router-link>
			<router-link to="/news/toplist" tag="li" active-class="active">排行榜</router-link>
			<router-link to="/news/toplistMovie" tag="li" active-class="active">影评</router-link>
		</ul>
		<section>
			<router-view></router-view>
		</section>
	</div>
</template>
<script>
import axios from 'axios'


	export default{
		name:"news",
		data(){
			return{

			}
		}
	}
</script>
<style scoped lang="scss">
	#news{
		.active{color:blue;}
		ul{
			display:flex;
			height:0.48rem;
			line-height: 0.48rem;
			li{
				flex:1;text-align:center;
			}
		}
	}
</style>