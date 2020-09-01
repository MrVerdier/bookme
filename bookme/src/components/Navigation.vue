<template>
	<div class="top">
		<div v-if="calendar">
			<router-link
				:to="{ name: 'add-booking' }"
				class="top__add"
				@click.native="addBack"
			>
				<div class="add"></div>
			</router-link>
		</div>
		<div v-else-if="eventForm">
			<router-link :to="{ name: 'booking' }" class="top__add">
				<div class="back">Back</div>
			</router-link>
		</div>
		<div v-else></div>
		<router-link class="top__logo" :to="{ name: 'login' }"></router-link>
		<div class="top__menu">
			<Push
				class="top__menu"
				ref="push"
				width="300"
				:closeOnNavigation="true"
				noOverlay
				right
				@click.native="checkLoginStatus"
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
	// import { eventBus } from '../main.js'
	import { mapActions } from 'vuex'

	export default {
		name: 'Navigation',
		components: {
			Push
		},
		data() {
			return {
				eventForm: false,
				calendar: false
			}
		},
		methods: {
			...mapActions(['updateLoginStatus']),
			logout() {
				logoutUser()
				this.$router.go('/login')
			},
			addBack() {
				console.log('addback')
				this.eventForm = !this.eventForm
				this.calendar = false
			},
			checkLoginStatus() {
				this.updateLoginStatus()
			}
		},
		computed: {
			loggedIn() {
				return this.$store.getters.getLoginStatus
			}
		},
		created() {
			this.eventHub.$on('toggleAdd', () => {
				this.calendar = !this.calendar
			})
			this.eventHub.$on('removeAdd', () => {
				this.calendar = false
			})
			this.eventHub.$on('removeBack', () => {
				this.eventForm = false
			})
		}
	}
</script>

<style lang="scss">
	@import '@/scss/base/_variables.scss';
	@import '@/scss/base/_icons.scss';
	.top {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		top: 0;
		left: 0;
		background: $color_primary;
		width: 100%;
		height: 66px;
		z-index: 99;
		&__add {
			height: 25px;
			width: 25px;
			& .add {
				height: 100%;
				width: 100%;
				background: get-icon('add', $color_black) no-repeat center center;
			}
		}
		&__logo {
			top: 5px;
			width: 100px;
			height: 50px;
			background-image: url('../assets/bookmelogo.png');
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
		}
		&__menu {
			position: relative;
			bottom: 25px;
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
