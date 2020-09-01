<template>
	<div class="page home">
		<section class="navigation">
			<router-link class="navigation__link" :to="{ name: 'booking' }"
				>Booking</router-link
			>
			<router-link class="navigation__link" :to="{ name: 'gallery' }"
				>Galleri</router-link
			>
			<router-link class="navigation__link" :to="{ name: 'todos' }"
				>Todo's</router-link
			>
			<a class="navigation__link" @click="logout">
				Log ud
			</a>
		</section>
		<section class="bottom"></section>
	</div>
</template>

<script>
	import { logoutUser } from '../utils/auth'
	export default {
		name: 'Home',
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

<style lang="scss" scoped>
	@import '@/scss/base/_variables.scss';
	.home {
		.navigation {
			width: 100%;
			text-align: center;
			margin: 35px 0;
			&__link {
				font-size: 30px;
				&:not(:first-child) {
					margin: 30px;
				}
			}
		}

		.bottom {
			background-image: url('../assets/bg1.png');
			background-size: cover;
			background-position: 20%;
			margin: 0 auto;
			height: 50%;
		}
	}
</style>
