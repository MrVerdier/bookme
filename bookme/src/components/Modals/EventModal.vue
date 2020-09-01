<template>
	<div class="modal-container" @click="closeModal">
		<div class="event-modal">
			<h1>{{ modalEvent.title }}</h1>
			<p>{{ modalEvent.user_fk }}</p>
			<p>{{ modalEvent.start }}</p>
			<p>{{ modalEvent.end }}</p>
			<p>{{ modalEvent.timeStart }} - {{ modalEvent.timeEnd }}</p>
			<p>{{ modalEvent.description }}</p>
			<p>{{ modalEvent.owner }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'EventModal',
		props: ['modalEvent'],
		methods: {
			closeModal() {
				this.$emit('close-modal')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.modal-container {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(33, 33, 33, 0.5);
		z-index: 98;
	}
	.event-modal {
		background: rgb(133, 65, 65);
		min-height: 600px;
		width: 90%;
		max-width: 400px;
		margin: 0 auto;
		z-index: 99;
	}
</style>
