<template>
	<div class="page booking">
		<event-form />
		<calendar :events="events" />
	</div>
</template>

<script>
	import Calendar from '@/components/Calendar.vue'
	import EventForm from '@/components/Forms/EventForm.vue'
	import Pusher from 'pusher-js'
	export default {
		name: 'Booking',
		components: {
			Calendar,
			EventForm
		},
		data() {
			return {
				events: [
					{
						title: 'event1',
						start: '2018-07-09',
						cssClass: 'blue',
						YOUR_DATA: {}
					},
					{
						title: 'event2',
						start: '2018-07-10',
						end: '2018-07-13',
						cssClass: ['orange']
					}
				]
			}
		},
		created() {
			const pusher = new Pusher('f41423f6db163af8700e', {
				cluster: 'eu',
				encrypted: true
			})
			const channel = pusher.subscribe('schedule')
			channel.bind('new-event', data => {
				this.events = [...this.events, data]
			})
		}
	}
</script>

<style></style>
