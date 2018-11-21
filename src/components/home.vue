<template>
	<div id="home">
	  <div class="select">
	  	<div class="regition"><a href="">北京</a></div>
	  	<div class="film"><a href="">影片/影院/影人，任你搜</a></div>
	  </div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped lang="scss">  
  #home{
  	width: 100%;
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
	  	  font-size: 0.18rem;
	  	  color: black;
		  line-height: 0.62rem;
		  display: block
	  	}
	  }
	  .film{
	  	flex: 1;
	  	height: 0.62rem;
	  	font-size: 0.14rem;
	  	a{
	  	  color: black;
	  	  line-height: 0.62rem;
	  	}
	  }
	}
  }
</style>