<template>
	<div class="top">
		<router-link class="" :to="{ name: 'login' }"
			><div class="top__logo"></div
		></router-link>

		<!-- <div class="top__logo"></div> -->
		<div class="top__menu">
			<Push
				class="top__menu"
				ref="push"
				width="300"
				:closeOnNavigation="true"
				noOverlay
				right
			>
				<router-link class="top__link" :to="{ name: 'login' }" v-show="!loggedIn"
					>Login</router-link
				>
				<router-link class="top__link" :to="{ name: 'home' }" v-show="loggedIn"
					>Home</router-link
				>
				<router-link class="top__link" :to="{ name: 'booking' }" v-show="loggedIn"
					>Booking</router-link
				>
				<router-link class="top__link" :to="{ name: 'gallery' }" v-show="loggedIn"
					>Galleri</router-link
				>
				<router-link class="top__link" :to="{ name: 'todos' }" v-show="loggedIn"
					>Todo's</router-link
				>
				<a class="top__link" v-show="loggedIn" @click="logout">
					Log ud
				</a>
			</Push>
		</div>
	</div>
</template>

<script>
	import { Push } from 'vue-burger-menu'
	import { logoutUser } from '../utils/auth'
	// import { mapGetters } from 'vuex'

	export default {
		name: 'Navigation',
		components: {
			Push
		},
		data() {
			return {}
		},
		methods: {
			logout() {
				logoutUser()
				this.$router.go('/login')
			}
		},
		computed: {
			loggedIn() {
				return this.$store.getters.getLoginStatus
			}
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
			background-image: url('../assets/bookmelogo.png');
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
