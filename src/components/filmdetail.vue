<template>
  <div id="filmdetail">
  	<section class="aboutfilm" v-if="date&&obj?true:false">
  		<div class="backimg">
	  		<img :src="obj.image" alt="">
	  	</div>	
	  	<div class="head">
	  		<span class="back"><a href="/#/home"></a></span>
	  		<span class="collect"></span>
	  		<span class="send"></span>
	  	</div>
	  	<div class="hg">
		  	<hgroup>
		  		<h3>{{obj.titleCn}}</h3>
		  		<h4>{{obj.titleEn}}</h4>
		  	</hgroup>
	  	</div>
	  	<div class="intro">
	  		<div class="time">{{obj.runTime}}</div>
	  		<div class="type">
	  			<span v-for="data,index in obj.type">{{data}}{{index===obj.type.length-1?'':'/'}}</span>
	  		</div>
	  		<div class="on">{{date[0]}}年{{date[1]}}月{{date[2]}}日{{region}}上映</div>
	  		<div class="press">
	  			<div class="btnl">我想看</div>
	  			<div class="btnr">我要评分</div>
	  		</div>
			<div class="gut">
	  			{{obj.commonSpecial}}
	  		</div>
	  		<a class="query">查影讯/购票</a>
	  	</div>
	  	<div class="post">
	    	<img :src="obj.image" alt="" class="upright">
	    	<img src="/static/img/viceoplay.png" alt="" class="ion">
	    	<img src="/static/img/iv_cine_14.png" alt="" v-if="obj.isIMAX3D" class="imax">
	    	<img src="/static/img/iv_cine_05.png" v-if="obj.is3D" alt="" class="trd">
	    	<img src="/static/img/iv_cine_15.png" v-if="obj.isDMAX" alt="" class="bchi">
	    </div>
    </section>
    <section class="abouttext" v-if="obj?true:false">
    	<div id="content" :class="{'contents':isshow}">{{obj.content}}</div>
    	<div class="pulle" @click="spread"><span  :class="{'change':!isshow}"></span></div>
    </section>
    <section class="aboutworker" v-if="obj?true:false">
    	<h3>
    		<p>{{obj.personCount}}位演职员</p>
    		<p class="go"></p>
    	</h3>
    	<div class="worker">
    		<div class="director">
    			<h4 class="role">导演</h4>
    			<div class="dirself">
	    			<img :src="obj.director.directorImg" alt="">
	    			<p class="dirnamec">{{obj.director.directorName}}</p>
	    			<p class="dirnamee">{{obj.director.directorNameEn}}</p>
    			</div>
    		</div>
    		<div class="performer">
    			<h4 class="mainrole">主要演员</h4>
    			<div class="aclist">
	    			<div class="actors" v-for="data in obj.actorList">
	    				<div  class="rimg">
	    					<img :src="data.actorImg" alt="">
	    				</div>			
		    			<p class="dirnamec">{{data.actor}}</p>
		    			<p class="dirnamee">{{data.actorEn}}</p>
		    			<img :src="data.roleImg" alt="" class="fimg">
		    			<p class="part">饰:{{data.roleName}}</p>
	    			</div>
    			</div>
    		</div>
    	</div>
    </section>
    <section class="aboutcredits" v-if="obj?true:false">
    	<h3>
    		<p>{{obj.imageCount}}张图片</p>
    		<p class="go"></p>
    	</h3>
    	<ul class="credits">
    		<li v-for="data in obj.images"><img :src="data" alt=""></li>
    	</ul>
    </section>
    <section class="aboutwondful" v-if="list?true:false">
    	<h3>
    		<p>精彩影评（{{list.totalCount}}）</p>
    		<p class="go"></p>
    	</h3>
    	<h4>{{list.comments[0].title}}</h4>
    	<p class="mycont">{{list.comments[0].content}}</p>
    	<div class="pushde">
    		<div class="headimg">
    			<img :src="list.comments[0].headurl" alt="">
    		</div>
    		<div class="td">
    			<p class="wonddetail">{{list.comments[0].nickname}}</p>
    			<p class="wonddetail">{{time}}</p>
    		</div>
    	</div>
    </section>
    <section class="aboutadv" v-if="ad?true:false">
   	 <iframe style="height:105px;width:100%" :src="this.ad[0].url" frameborder="0" scrolling="no"></iframe>
    </section>
    <section class="aboutpreview" v-if="ve?true:false">
    	<h3>网友短评（{{ve.totalCommentCount}}）</h3>
    	<div class="comment" v-for="data in ve.cts">
    		<img :src="data.caimg" alt="">
			<div class="other">
				<div class="otherh">
					<p class="ona">{{data.ca}}</p>	
					<p></p>	
				</div>
				<div class="otherc">{{data.ce.length>54?data.ce.substring(0,53)+'...':data.ce}}</div>
				<div class="otherb">
					<span class="hui">回复</span>
					<span class="bang">赞</span>
				</div>
			</div>
    	</div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			obj: null,
			date: null,
			region: '',
			isshow: true,
			list: null,
			ad: null,
			ve: null
		}  	
	},
	methods: {
		spread () {
			this.isshow = !this.isshow;
		}
	},
	mounted () {
		this.$store.commit('close');
		var id = this.$route.params.id;
		// console.log()
		axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${id}&locationId=290&t=2018112213133750436`).then((res)=>{
			this.obj = res.data;
			console.log(this.obj)
			this.date = res.data.release.date.split('-');
			this.region = res.data.release.location;
		})
		axios.get(`/Service/callback.mi/Movie/HotLongComments.api?movieId=${id}&pageIndex=1&t=2018112313423945597`).then((res)=>{
			this.list = res.data;
			this.time = this.list.comments[0].modifyTime
		})
		axios.get(`/movie/detail.api?t=2018112313423911047&movieId=${id}&locationId=290`).then((res)=>{
			this.ad = res.data.data.advertisement.advList;
		})
		axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${id}&pageIndex=1&t=201811231856494054`).then((res)=>{
			this.ve = res.data;
			console.log(this.ve);
		})
	},
	beforeDestroy () {
		this.$store.commit('close');
	}
}

</script>
<style scoped lang="scss">
#filmdetail{
	width: 100%;
	position: relative;
	background: #f6f6f6;
	.aboutfilm{
		width: 100%;
		height: 3.75rem;
		margin-bottom: 0.14rem;
		.backimg{
			width: 100%;
			height: 1.3rem;
			position: absolute;
			overflow: hidden;
			img{
				width: 100%;
				filter: blur(0.1rem);
				position: absolute;
				z-index: 1;
			}
		}
		.head{
		  	height: 0.4rem;
		  	overflow: hidden;
		  	position: relative;
		  	z-index: 2;
		  	span{
		  		display: block;
		  	}
		  	.back{
		  		width: 0.1rem;
		  		height: 0.17rem;
		  		margin-left: 0.16rem;
		  		margin-top: 0.16rem;
		  		background: url(/static/img/h_btn_back.png);
		  		background-size: 0.1rem 0.17rem;
		  		float: left;
		  		a{
		  			display: block;
		  			width: 100%;
		  			height: 100%;
		  		}
		  	}
		  	.collect{
				width: 0.25rem;
				height: 0.25rem;
				background: url(/static/img/i_h_collection.png);
		  		background-size: 0.25rem 0.25rem;
		  		float: right;
		  		margin-top: 0.11rem;
		  		margin-right: 0.16rem;
		  	}
		  	.send{
		  		width: 0.25rem;
				height: 0.25rem;
				background: url(/static/img/i_h_share.png);
		  		background-size: 0.25rem 0.25rem;
		  		float: right;
		  		margin-top: 0.11rem;
		  		margin-right: 0.16rem;
		  	}	  
		}
		.hg{
			width: 100%;
			height: 0.8rem;
			overflow: hidden;
			hgroup{
				color: white;
				margin: 0.25rem 0.17rem 0.1rem 1.6rem;
				h3{
					font-size: 0.2rem;
					width: 1.7rem;
					height: 0.26rem;
					line-height: 0.26rem;
					margin-bottom: 0.07rem;
					overflow:hidden;
				    text-overflow:ellipsis;
				    white-space:nowrap;
				}
				h4{
					font-size: 0.14rem;
					width: 1.82rem;
					height: 0.12rem;
					line-height: 0.12rem;	
					overflow:hidden;
				    text-overflow:ellipsis;
				    white-space:nowrap;
				}
			}	
		}
		.intro{
			height: 2.55rem;
			position: relative;
			z-index: 4;
			width: 100%;
			background: white url(/static/img/cinemainfo_bg.png) no-repeat;
			background-size: 100% 0.12rem;
			overflow: hidden;
			.time,.type,.on{
				height: 0.15rem;
				font-size: 0.13rem;
				margin-left: 1.6rem;
				margin-bottom: 0.1rem;
				font-weight: bold;
			}
			.time{
				margin-top: 0.14rem;
			}
			.on{
				margin-bottom: 0.13rem;
			}
			.press{
				height: 0.42rem;
				margin-left: 1.6rem;
				.btnl,.btnr{
					float: left;
					width: 0.94rem;
					height: 0.39rem;
					border: 0.01rem solid #a3a3a3;
					border-radius: 0.19rem;
					margin-right: 0.06rem;
					font-size: 0.16rem;
					text-align: center;
					line-height: 0.39rem;
					color: #a3a3a3;	
				}
				.btnr{
					color: #639b0b;
					border: 0.01rem solid #639b0b;
				}
			}	
			.gut{
				height: 0.43rem;
				width: 100%;
				font-size: 0.16rem;
				text-indent: 0.83rem;
				line-height: 0.34rem;
				color: #ff8600;
				background: white url(/static/img/i_dot.png) no-repeat 0.62rem 0.11rem;
				background-size: 0.15rem 0.14rem; 
			}
			.query{
				display: block;
				width: 3.39rem;
				height: 0.46rem;
				background: #ff8600;
				font-size: 0.16rem;
				color: white;
				border-radius: 0.23rem;
				line-height: 0.46rem;
				text-align: center;
				font-weight: bold;
				margin-left: 0.18rem; 
			}
		}
		.post{
			width: 1.31rem;
			height: 1.91rem;
			position: absolute;
			left: 0.18rem;
			top: 0.59rem;
			z-index: 5;
			.upright{
				width: 100%;
				height: 100%;
			}
			.ion{
				width: 0.56rem;
				height: 0.56rem;
				position: absolute;
				left: 0.37rem;
				top: 0.67rem;
			}
			.imax{
				width: 0.38rem;
				height: 0.33rem;
				position: absolute;
				right: 0.13rem;
				top: 0.44rem;
			}
			.trd{
				width: 0.38rem;
				height: 0.26rem;
				position: absolute;
				right: 0.13rem;
				top: 0.12rem;
			}
			.bchi{
				width: 0.38rem;
				height: 0.37rem;
				position: absolute;
				right: 0.13rem;
				top: 0.84rem;
			}
		}	
	}
	.abouttext{
		width: 100%;
		background: white;	
		overflow: hidden;
		margin-bottom: 0.34rem;
		#content{
			width: 3.33rem;
			font-size: 0.16rem;
			line-height: 0.24rem;
			margin: 0.14rem 0.25rem 0.14rem 0.18rem;
			overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: wrap
		}
		.contents{
			height: 0.48rem;
		
		}
		.pulle{
			height: 0.28rem;
			display: flex;
			justify-content: center;
			span{
				display: block;
				width: 0.2rem;
				height: 0.1rem;
				background: url(/static/img/i-tmore.png);
				background-size: 0.2rem 0.1rem;
			}
		}
		.change{
			transform: rotate(180deg);
		}
	}
	.aboutworker{
		width: 100%;
		height: 3.52rem;
		background: white;
		margin-bottom: 0.14rem;
		box-sizing: border-box;
		h3{
			height: 0.63rem;
			font-size: 0.2rem;
			line-height: 0.57rem;
			text-indent: 0.2rem;
			display: flex;
			justify-content: space-between;
			.go{
				width: 0.11rem;
				height: 0.19rem;
				background: url(/static/img/arrow.gif);
				margin-right: 0.22rem;
				margin-top: 0.2rem;
			}
		}
		.worker{
			width: 100%;
			height: 2.8rem;
			display: flex;
			font-size: 0.14rem;
			.director{
				width: 1.13rem;
				height: 2.8rem;
				border-right: 0.01rem solid #dcdcdc;
				margin-left: 0.18rem;
				overflow-x: hidden;
				.role{
					height: 0.2rem;
					line-height: 0.14rem;
					
				}
				.dirself{
					
					img{
						height: 1.35rem;
						width: 1.03rem;
						margin-bottom: 0.09rem;
					}
					.dirnamec{
						height: 0.18rem;
						width: 0.78rem;
						overflow: hidden;
						margin-bottom: 0.04rem;
						text-align: center;
					}
					.dirnamee{
						height: 0.11rem;
						width: 0.78rem;			
						line-height: 0.11rem;
						text-align: center;
					}
				}
			}
			.performer{
				margin-left: 0.12rem;
				width: 2.31rem;
				height: 2.8rem;
				.mainrole{
					height: 0.2rem;
					line-height: 0.14rem;
				}
				.aclist{
					display: flex;
					justify-content: space-between;
					.actors{
						width: 1.02rem;
						margin-right: 0.18rem;
						float: left;
						.rimg{
							width: 1.03rem;
							height: 1.03rem;
							overflow: hidden;
							img{
								width: 1.03rem;
							}
						}
						.dirnamec{
							text-align: center;
							height: 0.18rem;
							padding-top: 0.09rem;
							line-height: 0.14rem;
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap; 
						}
						.dirnamee{
							height: 0.27rem;
							width: 100%;
							line-height: 0.12rem;
							text-align: center;
							margin-bottom: 0.14rem;
						}
						.fimg{
							width: 0.48rem;
							height: 0.48rem;
							margin-bottom: 0.1rem;
						}
						.part{
							height: 0.15rem;
							line-height: 0.15rem;
							text-indent: 0.03rem;
							overflow: hidden;
						    text-overflow: ellipsis;
						    white-space: nowrap
					}
					}
				}
			}
		}
	}
	.aboutcredits{
		height: 1.75rem;
		background: white;
		margin-bottom: 0.14rem;
		h3{
			height: 0.6rem;
			font-size: 0.2rem;
			line-height: 0.6rem;
			text-indent: 0.2rem;
			display: flex;
			justify-content: space-between;
			.go{
				width: 0.11rem;
				height: 0.19rem;
				background: url(/static/img/arrow.gif);
				margin-right: 0.22rem;
				margin-top: 0.2rem;
			}
		}
		.credits{
			margin-left: 0.21rem;
			height: 0.8rem;
			display: flex;
			li{
				width: 0.78rem;
				height: 0.77rem;
				border: 0.01rem solid #d7d6d6;
				margin-right: 0.06rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.aboutwondful{
		// height: 2.27rem;
		background: white;
		margin-bottom: 0.18rem;
		h3{
			height: 0.6rem;
			font-size: 0.2rem;
			line-height: 0.6rem;
			text-indent: 0.2rem;
			display: flex;
			justify-content: space-between;
			.go{
				width: 0.11rem;
				height: 0.19rem;
				background: url(/static/img/arrow.gif);
				margin-right: 0.22rem;
				margin-top: 0.2rem;
			}
		}
		h4{
			// height: 0.2rem;
			margin-left: 0.18rem;
			font-size: 0.18rem;
			line-height: 0.2rem;
		}
		.mycont{
			height: 0.7rem;
			margin: 0.09rem 0.25rem 0.15rem 0.18rem;
			font-size: 0.16rem;
			line-height: 0.25rem;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			overflow: hidden;
		}
		.pushde{
			height: 0.54rem;
			margin-left: 0.19rem;
			display: flex;
			.headimg{
				width: 0.48rem;
				height: 0.48rem;
				border-radius: 0.24rem;
				overflow: hidden;
				margin-right: 0.17rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.td{
				flex: 1;	
				.wonddetail{
					height: 0.25rem;
					font-size: 0.16rem;
					line-height: 0.25rem;
					color: #7b7b7b;
				}	
			}
		}
	}
	.aboutadv{
		height: 1.05rem;
		background: white;
		margin-bottom: 0.34rem;
	}
	.aboutpreview{
		background: white;
		h3{
			height: 0.6rem;
			font-size: 0.2rem;
			line-height: 0.6rem;
			text-indent: 0.2rem;
		}
		.comment{
			display: flex;
			border-bottom: 0.01rem solid #dcdcdc;
			padding-top: 0.18rem;
			img{
				width: 0.48rem;
				height: 0.48rem;
				border-radius: 50%;
				margin-left: 0.18rem;
			}
			.other{
				width: 3.09rem;
				margin-left: 0.15rem;
				.otherh{
					height: 0.29rem;
					line-height: 0.29rem;
					font-size: 0.14rem;
					margin-bottom: 0.02rem;
					display: flex;
					.ona{
						width: 50%;
					}
				}
				.otherc{
					width: 2.62rem;
					font-size: 0.16rem;
					line-height: 0.24rem;
					display: box;    
					box-orient: vertical;    
				    line-clamp: 3;    
					overflow: hidden;
					margin-bottom: 0.1rem;
				}
				.otherb{
					height: 0.43rem;
					display: flex;
					justify-content: flex-end;
					font-size: 0.14rem;
					span{
						display: block;
						height: 0.43rem;
					}
					.hui{
						width: 0.74rem;
						background: url(/static/img/ico_reply.png)no-repeat;
						background-size: 0.24rem 0.24rem;
						text-indent: 0.28rem;
					}
					.bang{
						width: 0.56rem;
						background: url(/static/img/ico_praise.png) no-repeat;
						background-size: 0.2rem 0.2rem;
						text-indent: 0.24rem;
					}
				}
			}
			
		}
	}
}
</style>