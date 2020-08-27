import axios from 'axios'

const getDefaultState = () => {
	return {
		events: [],
		new_event: {}
	}
}

const state = getDefaultState()

const getters = {
	getEvents: state => {
		return state.events
	}
}

const actions = {
	async fetchEvents({ commit }) {
		await axios
			.get('http://localhost:5000/schedule', {
				headers: {
					'Content-type': 'application/json'
				}
			})
			.then(function(events) {
				console.log(events.data)
				commit('setEvents', events.data)
			})
	},
	async createEvent() {
		await axios
			.post('http://localhost:5000/schedule/addevent', state.new_event, {
				headers: {
					'content-type': 'application/json'
				}
			})
			.then(function(res) {
				console.log(res)
			})
	},
	commitNewEvent({ commit }, event) {
		commit('setNewEventData', event)
	}
}

const mutations = {
	setEvents: (state, data) => (state.events = data),
	setNewEventData: (state, data) => (state.new_event = data)
}

export default {
	state,
	getters,
	actions,
	mutations
}
