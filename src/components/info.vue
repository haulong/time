<template>
	<div id="info">
		<div class="div1">
			<p>{{}}</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:"info",
		data(){
			return{

			}
		},
		computed:{
			cinemainfo(){
				return this.$store.state.cinemainfo;
			}
		},
		methods:{

		}
	}
</script>
<style scoped lang="scss">
	#info{

	}
</style>