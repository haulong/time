<template>
	<div>
	<ul class="navlist">
	<li>新闻</li>
	<li>预告片</li>
	<router-link tag="li" to="/toplist" activeClass="active"><a>排行榜</a></router-link>
	<router-link tag="li" to="/toplistMovie" activeClass="active"><a>影评</a>></router-link>
	
</ul>
	</div>
</template>
<script>
export default{

}
</script>
<style>
	.navlist {width:100%;	
			flex: 1;
			display: flex;
			justify-content: space-around;
			}
			.navlist li{
				font-size: 0.14rem;
				
				
				color: #000;
				height: 100%;
				box-sizing: border-box;

			}
			a:hover{color:#1e7dd7}
</style>