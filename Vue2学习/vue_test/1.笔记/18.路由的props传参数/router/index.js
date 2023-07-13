//这个文件是写整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露路由 器
export default new VueRouter({
  //创建路由数组 routes
  routes: [
    {
      name: 'about',
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
          children: [
            {
              name: 'detail',
              path: 'detail/:id/:title',
              component: Detail,
              /* props第一种写法：对象 只能传固定参数 */
              // props:{
              //   a:100,
              //   b:100
              // }

              /* props第二种写法：布尔值 只能传所有的params参数 */
              // props:true
              /* props第三种写法：函数 可以传输所有的参数，形象就写$route */
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              },
            },
          ],
        },
      ],
    },
  ],
})
