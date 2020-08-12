<template>
	<div id="app">
		<Navigation />
		<router-view />
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation.vue'

	export default {
		name: 'Bookme',
		components: {
			Navigation
		}
	}
</script>

<style lang="scss">
	@import '@/scss/base/_reset.scss';
</style>
