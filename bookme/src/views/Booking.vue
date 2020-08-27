<template>
	<div class="page booking">
		<event-form @update-events="updateEvents" />
		<calendar :events="dbevents" />
	</div>
</template>

<script>
	import Calendar from '@/components/Calendar.vue'
	import EventForm from '@/components/Forms/EventForm.vue'
	// import Pusher from 'pusher-js'
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'Booking',
		components: {
			Calendar,
			EventForm
		},
		data() {
			return {
				events: []
			}
		},
		methods: {
			...mapActions(['fetchEvents']),
			updateEvents() {
				console.log('updating events')
				this.fetchEvents()
				console.log(this.dbevents)
			}
		},
		computed: {
			...mapGetters(['getEvents']),
			dbevents() {
				return this.getEvents
			}
		},
		created() {
			this.fetchEvents()
			// const pusher = new Pusher('f41423f6db163af8700e', {
			// 	cluster: 'eu',
			// 	encrypted: true
			// })
			// const channel = pusher.subscribe('schedule')
			// channel.bind('new-event', data => {
			// 	this.events = [...this.events, data]
			// })
		}
	}
</script>

<style></style>
