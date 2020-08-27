import { isLoggedIn } from '@/utils/auth'

const getDefaultState = () => {
	return {
		logged_status: ''
	}
}

const state = getDefaultState()

const getters = {
	getLoginStatus: state => {
		return state.logged_status
	}
}

const actions = {
	updateLoginStatus({ commit }) {
		console.log('checking status')
		const status = isLoggedIn()
		commit('setStatus', status)
	}
}

const mutations = {
	setStatus: (state, data) => (state.logged_status = data)
}

export default {
	state,
	getters,
	actions,
	mutations
}
