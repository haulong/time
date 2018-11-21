<template>
	<footer class="end">
	  	<ul>
	  		<li>PC版</li>
	  		<li>客户端下载</li>
	  		<li>意见反馈</li>
	  		<li>帮助中心</li>
	  	</ul>
	  	<div class="pro">
	  		<a href=""><img src="/static/img/logo2.gif" alt="" class="logo2"></a>
	  		<a href=""><img src="/static/img/licence.gif" alt=""></a>
	  	</div>
	  	<div class="ad">
	  		<span>Copyright </span>
	  		<span class="copytime">2006-2018</span>
	  		<span> Mtime.com Inc. All rights reserved.</span>
	  	</div>
	</footer>
</template>
<script>
	export default{

	}
</script>
<style scoped lang="scss">
	footer{
		height: 1.28rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 0.12rem;
		background: #f6f6f6; 
		ul{
			height: 0.54rem;
			display: flex;
			li{
				height: 0.54rem;
				margin: 0 0.19rem;
				line-height: 0.54rem;
				font-size: 0.14rem;
				position: relative;
			}
			li:after{
				content: "";
				display: inline-block;
				width: 1px;
				height: 0.15rem;
				background: #dadada;
				position: absolute;
				right: -0.18rem;
				top: 0.2rem;
			}
			li:last-of-type:after{
				opacity: 0;
			}
		}
		.pro{
			display: flex;
			justify-content: center;
			margin-bottom: 0.08rem;
			.logo2{
				margin-right: 0.1rem;
			}
		}
		.ad{
			color: #c2c2c2;
		}
	}
</style>