<template>
	<section class="calendar">
		<FullCalendar
			:options="calendarOptions"
			:events="events[0]"
			@eventClick="getEvent"
		/>
	</section>
</template>

<script>
	import FullCalendar from '@fullcalendar/vue'
	import dayGridPlugin from '@fullcalendar/daygrid'
	import timeGridPlugin from '@fullcalendar/timegrid'
	import interactionPlugin from '@fullcalendar/interaction'

	export default {
		name: 'Calendar',
		components: {
			FullCalendar
		},
		props: {
			events: {
				type: Array,
				// FIXME fix console error relating to this
				default: () => []
			}
		},
		data() {
			return {
				calendarOptions: {
					plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
					headerToolbar: {
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay'
					},
					initialView: 'dayGridMonth',
					events: this.events[0]
				}
			}
		},

		methods: {
			getEvent(event) {
				this.$emit('event-clicked', event)
			}
		}
	}
</script>

<style>
	.red {
		background: rgba(235, 77, 77, 0.452) !important;
		color: whitesmoke !important;
	}
	.blue {
		background: rgb(59, 59, 163) !important;
		color: whitesmoke !important;
	}
	.orange {
		background: orange !important;
		color: white !important;
	}
	.green {
		background: rgb(49, 155, 49) !important;
		color: white !important;
	}
	.blue,
	.orange,
	.red,
	.green {
		font-size: 13px;
		font-weight: 500;
		text-transform: capitalize;
	}
	.event-item {
		padding: 2px 0 2px 4px !important;
	}
</style>
