<template>
	<div class="index">
		<header>
			<div class="top1">
				<div  class="refresh_title"></div>
				<div class="serch">
					<i class="icon iconfont icon-search"></i>
					<input type="text" name="serch">
				</div>
			</div>
			<div class="top2">
				<div class="top_menu_more"></div>
				<div class="top_menu">
					<ul>
						 <router-link to="/TuiJian">
							<li><span>推荐</span></li>
						 </router-link>
						 <router-link to="/Video">
							<li><span>视频</span></li>
						 </router-link>						
						
						<li><span>热点</span></li>
						<li><span>成都</span></li>
						<li><span>社会</span></li>
					</ul>
				</div>
			</div>
		</header>
		<router-view></router-view>
		<Bottom></Bottom>
	</div>
</template>
<script>
import axios from 'axios';
import router from '../router';
import Bottom from '../components/Bottom';
export default{
  name : 'Index',
  data()  {
		return {

		}
	},
	created()	{
			axios.get('/TuiJian')
			.then(response => {
				let data = response.data.data;
				console.log(data);
			})
			.catch(error => {
				console.log(error);
			});		
	},
	components:{
		'Bottom' : Bottom
	},
	methods:{

	}
}
</script>
<style lang="sass" scoped>
.index
	height : 100%
	width : 100%
	header
		height : 100px
		width : 100%
		.top1
			background-color : #D43D3D
			display : flex
			height : 55px
			width : 100%
			.refresh_title
				background : url('../assets/images/title.png') no-repeat left center
				background-size : 45%
			div
				width : 49%
				height : 100%
			.serch
				text-align : left
				line-height : 60px
				i
					left : 24px
					position : relative
				input
					color : #F4F5F6
					width : 150px
					height : 30px
		.top2
			height : 35px
			.top_menu_more
				float : right
				height : 100%
				width : 30px
				background : url('../assets/images/addred.png') no-repeat left center
				background-size : 100%
			.top_menu
				ul
					text-align : left
					margin-top : 10px
					line-height : 25px
					li
						display : inline-block
						width : 35px
						height : 30px
						text-align : left
						font-size : 16px



</style>
