//这个文件是写整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

//创建并暴露路由 器
export default new VueRouter({
  //创建路由数组 routes
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'News',
          component: News,
        },
        {
          path: 'Message',
          component: Message,
        },
      ],
    },
  ],
})
