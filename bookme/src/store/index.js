import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login.js'
import events from './modules/events.js'

Vue.use(Vuex)

// Create store
export default new Vuex.Store({
	modules: {
		login,
		events
	}
})
