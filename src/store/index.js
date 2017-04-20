import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    width: 0, // 浏览器宽度
    height: 0, // 浏览器高度 
    stories: [], // 新闻内容数组
    ids: [], // 新闻id数组
    id: '' // 当前新闻详情的id

  },
  getters: {
    collectText: state => {
      return state.isCollect ? '取消收藏' : '收藏';
    } 
  },
  mutations: {
    // 初始化浏览器尺寸
  
  }
});
