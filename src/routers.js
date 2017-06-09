//import Vue from 'vue'
//import VueRouter from 'vue-router'
//import Root from './Root'
//import App from './pages/App'
//import Description from './components/Description'
//import NewsDetail from './pages/NewsDetail'
//import Themes from './pages/Themes'
//import ThemeList from './pages/ThemeList'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from './components/Default'



Vue.use(VueRouter)


const routers = [{
	path: '/',
	name: 'Default',
	component: Default
}]

export const router = new VueRouter({
  routes: routers,
  hashbang: true
})
