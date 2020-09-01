<template>
	<div class="page booking">
		<!-- <event-form @update-events="updateEvents" /> -->
		<calendar :events="dbevents" @event-clicked="openEventModal" />
		<router-view></router-view>
		<event-modal
			v-show="singleEvent"
			@close-modal="closeEventModal"
			:modalEvent="modalEvent"
		/>
	</div>
</template>

<script>
	import Calendar from '@/components/Calendar.vue'
	// import EventForm from '@/components/Forms/EventForm.vue'
	import EventModal from '@/components/Modals/EventModal.vue'
	import Pusher from 'pusher-js'
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'Booking',
		components: {
			Calendar,
			// EventForm,
			EventModal
		},
		data() {
			return {
				showForm: true,
				events: [],
				singleEvent: false,
				modalEvent: {}
			}
		},
		props: ['bookingAdd'],
		methods: {
			...mapActions(['fetchEvents']),
			updateEvents() {
				console.log('updating events')
				this.fetchEvents()
				console.log(this.dbevents)
			},
			openEventModal(event) {
				this.singleEvent = !this.singleEvent
				this.modalEvent = event
			},
			closeEventModal() {
				this.singleEvent = !this.singleEvent
			}
		},
		computed: {
			...mapGetters(['getEvents']),
			dbevents() {
				return this.getEvents
			}
		},
		created() {
			this.eventHub.$emit('toggleAdd')
			this.fetchEvents()
			const pusher = new Pusher('f41423f6db163af8700e', {
				cluster: 'eu',
				encrypted: true
			})
			const channel = pusher.subscribe('schedule')
			channel.bind('new-event', data => {
				this.events = [...this.events, data]
			})
		},
		beforeDestroy() {
			this.eventHub.$emit('removeAdd')
		}
	}
</script>

<style></style>
