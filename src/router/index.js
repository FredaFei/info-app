import Vue from 'vue'
import Router from 'vue-router'
const Personal = resolve => require(['@/components/Personal'], resolve)
const Message = resolve => require(['@/components/Message'], resolve)
const Search = resolve => require(['@/components/Search'], resolve)

Vue.use(Router)
const routes = [
  {
    path: '',
    name: 'personal',
    redirect: '/personal'
  }, {
    path: '/',
    name: 'personal',
    component: Personal
  }, {
    path: '/personal',
    name: 'personal',
    component: Personal
  }, {
    path: '/message',
    name: 'message',
    component: Message
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }
]


export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
