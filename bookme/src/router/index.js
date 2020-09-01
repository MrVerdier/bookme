import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Booking from '../views/Booking.vue'
import EventForm from '../components/Forms/EventForm.vue'
import Gallery from '../views/Gallery.vue'
import Todos from '../views/Todos.vue'
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
	},
	{
		path: '/booking',
		name: 'booking',
		component: Booking
	},
	{
		path: '/add-booking',
		name: 'add-booking',
		component: EventForm
	},
	{
		path: '/gallery',
		name: 'gallery',
		component: Gallery
	},
	{
		path: '/todos',
		name: 'todos',
		component: Todos
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	// console.log('logged status is: ', isLoggedIn())

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
