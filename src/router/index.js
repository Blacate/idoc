import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Public from '@/components/public/public'
import Professional from '@/components/professional/professional'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/public',
      name: 'public',
      component: Public
    },
    {
      path: '/professional',
      name: 'professional',
      component: Professional
    }
  ]
})
