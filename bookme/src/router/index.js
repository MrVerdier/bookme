import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'
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
		path: '/test',
		name: 'test',
		component: Test
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	console.log(isLoggedIn())
	if (to.name == 'login' && isLoggedIn()) {
		next({ path: '/test' })
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
