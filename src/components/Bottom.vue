<template>
	<div class="bottom">
		 <router-link to="/TuiJian">
			<li><i class="icon iconfont icon-shouyeshouye"></i></li>
		 </router-link>
		 <router-link to="/VideoPage">
			<li><span>视频</span></li>
		 </router-link>		
		 <router-link to="/HeadlinePage">
			<li><span>微头条</span></li>
		 </router-link>
		 <router-link to="/MyPage">
			<li><span>我的</span></li>
		 </router-link>					 
	</div>
</template>
<script>
export default{
	name : 'Bottom'
	}
</script>
<style lang="sass" scoped>
.bottom
  position : absolute
  bottom : 10px
  display : flex
  justify-content : space-around
  align-items : center
  text-align : center
  width : 100%
  li
  	display : inline-block
  	width : 60px
  	height : 30px
  	line-height : 30px

</style>