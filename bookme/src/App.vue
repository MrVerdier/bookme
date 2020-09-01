<template>
	<div id="app">
		<Navigation />
		<router-view />
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation.vue'
	import { isLoggedIn } from '@/utils/auth'

	export default {
		name: 'Bookme',
		components: {
			Navigation
		},
		data() {
			return {
				test: 'hi'
			}
		},
		beforeCreate() {
			isLoggedIn()
		}
	}
</script>

// TODO remove this when the global is working
<style lang="scss">
	@import '@/scss/base/_reset.scss';
	@import '@/scss/base/_global.scss';
	@import '@/scss/base/_reset.scss';
</style>
