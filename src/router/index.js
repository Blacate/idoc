import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Public from '@/components/public/public'
import Professional from '@/components/professional/professional'
import Course from '@/components/course/course'
import College from '@/components/college/college'

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
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: Course
    },
    {
      path: '/professional/college/:collegeId',
      name: 'college',
      component: College
    }
  ]
})
