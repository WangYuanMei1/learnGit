import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import dataContrast from "../components/dataContrast"
import activityOa from "../components/activityOa"
import text from "../components/text";

Vue.use(Router)

// export default new Router({
//   mode: 'history', // require service support
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dataContrast',
      name: 'dataContrast',
      component: dataContrast
    },
    {
      path: '/activityOa',
      name: 'activityOa',
      component: activityOa
    },
    {
      path: '/text',
      name: 'text',
      component: text
    }
  ]
})
