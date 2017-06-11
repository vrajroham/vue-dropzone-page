import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import GetStarted from '@/pages/GetStarted'
import PropsPage from '@/pages/PropsPage'
import EventsPage from '@/pages/EventsPage'
import ExamplesPage from '@/pages/ExamplesPage'
import MethodsPage from '@/pages/MethodsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: GetStarted
    },
    {
      path: '/props',
      name: 'props',
      component: PropsPage
    },
    {
      path: '/events',
      name: 'events',
      component: EventsPage
    },
    {
      path: '/examples',
      name: 'examples',
      component: ExamplesPage
    },
    {
      path: '/methods',
      name: 'methods',
      component: MethodsPage
    }
  ]
})
