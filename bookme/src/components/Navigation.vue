<template>
	<div class="top">
		<div class="top__logo"></div>
		<div class="top__menu">
			<Push
				class="top__menu"
				ref="push"
				width="300"
				:closeOnNavigation="true"
				noOverlay
				right
			>
				<router-link :to="{ name: 'login' }">Login</router-link>
				<router-link :to="{ name: 'home' }">Home</router-link>
			</Push>
		</div>
	</div>
</template>

<script>
	import { Push } from 'vue-burger-menu'
	export default {
		name: 'Navigation',
		components: {
			Push
		}
	}
</script>

<style lang="scss">
	@import '@/scss/base/_variables.scss';
	.top {
		position: absolute;
		top: 0;
		left: 0;
		background: $color_white;
		width: 100%;
		height: 66px;
		&__logo {
			position: relative;
			left: calc(50% - 50px);
			top: calc(50% - 25px);
			width: 100px;
			height: 50px;
			// background-image: url('../assets/logo1.png');
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
	.bm-menu {
		background: #fff;
		box-shadow: 0px 0px 6px 1px #515164;
	}
	.bm-item-list a {
		color: #515164;
	}
</style>
