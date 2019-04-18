import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddTeacher from '@/components/addTeacher'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/addTeacher'
    },
    {
      path: '/addTeacher',
      name: 'addteacher',
      component: AddTeacher
    }
  ]
})
