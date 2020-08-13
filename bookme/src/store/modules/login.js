import axios from 'axios'

const getDefaultState = () => {
	return {
		token: '',
		user: {
			'username:': 'Jim'
		}
	}
}

const state = getDefaultState()

const getters = {}

const actions = {
	async sendLoginInformation() {
		console.log('logging in')
		await axios
			.post('http://localhost:5000/users/login', state.user, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(function(resp) {
				console.log(resp)
			})
			.catch(function(resp) {
				console.log(resp)
			})
	}
}

const mutations = {
	// setTemplate: (state, data) => (state.template = data),
}

export default {
	state,
	getters,
	actions,
	mutations
}
