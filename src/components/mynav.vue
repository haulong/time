<template>
	<nav>
		<img src="/static/img/logo.gif" alt="" class="left">
		<ul>
			<router-link tag="li" to="/home" activeClass="active">首页</router-link>
			<router-link tag="li" to="/purchas" activeClass="active">购票</router-link>
			<router-link tag="li" to="/mall" activeClass="active">商城</router-link>
			<router-link tag="li" to="/news" activeClass="active">发现</router-link>
		</ul>
		<img src="/static/img/self.gif" alt="" class="right">
	</nav>
</template>
<script>
	export default {

	}
</script>
<style scoped lang="scss">
	nav{
		height: 0.54rem;
		width: 100%;
		background: #1c2635;
		display: flex;	
		.left{
			width: 0.65rem;
			height: 0.2rem;
			margin-left: 0.14rem;
			margin-top: 0.16rem;
		}
		ul{
			flex: 1;
			display: flex;
			justify-content: space-around;
			height: 0.54rem;
			li{
				font-size: 0.14rem;
				line-height: 0.54rem;
				text-align: center;
				color: white;
				height: 100%;
				box-sizing: border-box;
			}
			
		}
		.right{
			width: 0.15rem;
			height: 0.2rem;
			margin-right: 0.12rem;
			margin-top: 0.16rem;
		}
	}
	.active{
		border-bottom: 0.03rem solid white;
	}
</style>