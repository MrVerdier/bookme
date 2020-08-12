<template>
	<div class="top">
		<div class="top__logo"></div>
		<Slide
			class="top__menu"
			ref="slide"
			width="200"
			:closeOnNavigation="true"
			noOverlay
			right
		>
			<router-link :to="{ name: 'login' }">Login</router-link>
			<router-link :to="{ name: 'test' }">Test</router-link>
		</Slide>
	</div>
</template>

<script>
	import { Slide } from 'vue-burger-menu'
	export default {
		name: 'Navigation',
		components: {
			Slide
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		position: absolute;
		top: 0;
		left: 0;
		background: #ebebeb;
		width: 100%;
		height: 66px;
		&__logo {
			position: relative;
			left: calc(50% - 50px);
			top: calc(50% - 10px);
			width: 100px;
			height: 20px;
			background: #343433;
		}
		&__menu {
			.bm-burger-button {
				top: 19px;
			}
		}
	}
</style>
