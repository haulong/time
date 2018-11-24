<template>
	<div id="comment">
		<div class="main" v-if="dataList">
			<ul>
				<li v-for="data in dataList">
					<div  class="clear">
						<img :src="data.userImage" alt="" class="l">
						<div class="info r">
							<div class="div1 clear">
								<span class="l">{{data.nickname}}</span>
								<span class="r">{{data.date.split(' ')[0]}}</span>
							</div>
							<p class="p1">{{data.content}}</p>
							<div class="div2">
								<i class="iconfont icon-comments"></i>
								<span v-if="data.replies">{{data.replies.length}}</span>
								<span v-else>回复</span>
							</div>
							
						</div>
						
					</div>
					<div class="div3" v-if="data.replies">
							<ul>
								<li v-for="item in data.replies">
									<div class="repli clear">
										<span class="l">{{item.nickname}}</span>
										<span class="r">{{item.date.split(' ')[0]}}</span>
									</div>
									<div class="inner">
										{{item.content}}
									</div>
								</li>
							</ul>
					</div>
				</li>
			</ul>
		</div>
		<div @click="jiazaimore()" class="more" v-if="isShow">查看更多</div>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:"comment",
		data(){
			return{
				dataList: null,
				page:1,
				isShow:true
			}
		},
		// computed:{
		// 	dataList(){
		// 		return this.$store.state.dataList
		// 	}
		// },
		mounted(){
			axios.get(`/Service/callback.mi/News/Comment.api?t=201811221355361963&newsId=${this.$route.params.newsid}&pageIndex=1&reviewId=${this.$route.params.newsid}`).then((res)=>{
				this.dataList = res.data;
				// this.$store.commit('changeData',res.data);
			})
		},
		methods:{
			jiazaimore(){
				if(this.dataList.length===this.$store.state.commentCount){
					this.isShow = false;
					return;
				}
				this.page++;

				axios.get(`/Service/callback.mi/News/Comment.api?t=201811221355361963&newsId=${this.$route.params.newsid}&pageIndex=${this.page}&reviewId=${this.$route.params.newsid}`).then(res=>{
					// console.log(res.data);
					// this.$store.commit('changeData1',res.data);
					this.dataList = this.dataList.concat(res.data);

				})
			}
		}

	}
</script>
<style scoped lang="scss">
.l{float:left;}
.r{float:right;}
.clear:after{content:"";display:block;clear:both;}
	#comment{
		.main{
			padding:0 0.18rem;
			li{
				padding: 0.18rem 0;border-bottom: 1px solid #8f8f8f;width:100%;overflow: hidden;
				img{width:0.48rem;height:0.48rem;border:1px solid #f1f1f1;border-radius: 50%;}
				.info{
					margin-left: 0.17rem;width:2.70rem;position:relative;
					.div1{
						font-size: 0.13rem;color:#8f8f8f;line-height: 0.26rem;
					}
					.p1{line-height: 0.25rem;}
					.div2{position:relative;left:2.14rem;font-size: 0.13rem;margin-top: 0.14rem;}
				}
				.div3{
					width:3.02rem;background: #f5f5f5;border:1px solid #dbdbdb;padding:0 0.18rem;margin-top:0.21rem;
					li{
						padding:0.13rem 0 0.18rem 0;
						.repli{
							font-size: 0.12rem;line-height: 0.36rem;width:100%;color:#8f8f8f;
						}
						.inner{line-height: 0.24rem;font-size: 0.16rem;color:black;}
					}
				}
			}
		}
		.more{color:blue;text-align: center;line-height: 0.48rem;}
	}
</style>