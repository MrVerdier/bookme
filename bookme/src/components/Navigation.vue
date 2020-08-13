<template>
	<div class="top">
		<div class="top__logo"></div>
		<div class="top__menu">
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
		background: #fff;
		width: 100%;
		height: 66px;
		&__logo {
			position: relative;
			left: calc(50% - 50px);
			top: calc(50% - 25px);
			width: 100px;
			height: 50px;
			background-image: url('../assets/logo1.png');
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
		}
		&__menu {
			position: relative;
			bottom: 35px;
			left: 9px;
		}
	}
</style>
