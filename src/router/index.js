import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import TuiJian from '@/pages/TuiJianPage'
import Video from '@/components/Video'
import VideoPage from '@/pages/VideoPage'
import HeadlinePage from '@/pages/HeadlinePage'
import MyPage from '@/pages/MyPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
      	{path:'TuiJian',name:'TuiJian',component:TuiJian},
      	{path:'Video',name:'Video',component:Video}
      ]
    },
    {
   	  path: '/VideoPage',
      component: VideoPage,	
    },
    {
   	  path: '/HeadlinePage',
      component: HeadlinePage,	
    },
    {
   	  path: '/MyPage',
      component: MyPage,	
    }    
  ]
})
