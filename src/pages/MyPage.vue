<template>
<div>
	<div>个人信息页面</div>
	<Bottom></Bottom>
</div>
	
</template>
<script>
import router from '../router';
import Bottom from '../components/Bottom';
export default{
  name : 'Index',
  data()  {
		return {

		}
	},
	created()	{
		
	},
	components:{
		'Bottom' : Bottom
	},
	methods:{

	}
}	
</script>
<style lang="sass" scoped>
	
</style>