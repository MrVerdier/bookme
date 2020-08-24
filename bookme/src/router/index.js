import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import { isLoggedIn } from '../utils/auth'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			allowAnonymous: true
		}
	},
	{
		path: '/',
		name: 'home',
		component: Home
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	console.log('logged status is: ', isLoggedIn())

	if (to.name == 'login' && isLoggedIn()) {
		next({ path: '/' })
	} else if (!to.meta.allowAnonymous && !isLoggedIn()) {
		next({
			path: '/login',
			query: { redirect: to.fullPath }
		})
	} else {
		next()
	}
})

export default router
