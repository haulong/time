<template>	
	<div id="newsMovie">
		<div class="divimg"  v-if="data">
			<img :src="data.news.imageUrl" alt=""  @click="handleimg(data.news.newsID)">
			<p>{{data.news.title}}</p>
		</div>
		
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autofill="false" :maxDistance="0" :bottomDistance="10" @bottom-status-change="handleChange()">
		  <div class="lili">
			<div class="divdata"  v-for="datas in dataList">
				<div v-if="datas.images.length" @click="handledetail(datas.id)">
					<h3>{{datas.title}}</h3>
					<ul>
						<li v-for="data in datas.images">
							<img :src="data.url1" alt="">
						</li>
					</ul>
					<p class="p1">{{new Date(datas.publishTime).getHours()}}小时前</p>
					
				</div>
				<div class="divelse clear" v-else @click="handleimg(datas.id)">
					<img :src="datas.image" alt="" class="l">
					<div class="l">
						<h3>{{datas.title}}</h3>
						<p class="p1"><span class="span1">{{new Date(datas.publishTime).getHours()}}小时前</span><span class="span2">评论{{datas.commentCount}}</span></p>
					</div>
				</div>
			</div>
		</div>
		</mt-loadmore>
		<div class="more" v-if="data">上拉查看更多</div>

	</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)



	export default{
		name:"newsMovie",
		data(){
			return {
				data:null,
				dataList:[],
				allLoaded:false,
				page:1,
				total:1,
				bottomStatus:""
			}
		},
		
		methods:{
			handleimg(id){
				this.$router.push('/detailList/'+id)
			},
			loadBottom() {
			  console.log('111111');
			  this.page++;
			  if(this.page>this.total){
			  this.allLoaded = true;// 若数据已全部获取完毕
			  return;	
			  }
			  axios.get(`/Service/callback.mi/News/NewsList.api?pageIndex=${this.page}`).then(res=>{
			  	this.dataList = [...this.dataList,...res.data.newsList]
			  	console.log(this.dataList);
			  }).catch(error=>{
			  	console.log(error);
			  })
			  this.$refs.loadmore.onBottomLoaded();
			},
			handleChange(status){
				this.bottomStatus = status;
			},
			handledetail(newsid){
				this.$router.push('/detailmain/'+newsid)
			}
		},
		mounted(){
			axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018112113322259932').then(res=>{
				// console.log(res.data);
				this.data = res.data;
			}),
			axios.get('/Service/callback.mi/News/NewsList.api?pageIndex=1').then(res=>{
				console.log(res.data);
				this.dataList = res.data.newsList;
				this.total=res.data.pageCount;
			})
		}
	}
</script>
<style scoped lang="scss">
	.l{float:left;}
	.r{float:right;}
	.clear:after{content:"";display: block;clear:both;}
	#newsMovie{
		overflow-y:scroll;
		font-size: 0.14rem;
		img{width:100%;display:block;}
		.divimg{position:relative;
			p{position:absolute;bottom:0;left:0;width:100%;height:0.47rem;line-height: 0.47rem;color:white;font-weight: bold;text-align: center;background: rgba(0,0,0,0.7);}
		}
		.lili{
			padding:0 0.2rem;
		}
		.divdata{
			border-bottom: 1px solid grey;
			h3{height:0.49rem;line-height: 0.49rem;}
			ul{
				display:flex;
				li{flex:1;
					img{height:0.76rem;}
				}
			}
			.p1{height:0.32rem;font-size: 0.12rem;line-height: 0.32rem;}
		}
		.divelse{
			padding:0.18rem 0;
			img{width:0.88rem;height:0.88rem;border:1px solid grey;margin-right: 0.19rem;}
			h3{line-height: 0.22rem;width:2.14rem;}
			.span1{margin-right: 0.45rem}

		}
		.more{text-align: center;height:0.42rem;line-height: 0.42rem;color:blue;}
	}
</style>