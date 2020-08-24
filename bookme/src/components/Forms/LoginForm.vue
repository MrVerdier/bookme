<template>
	<div class="login-form">
		<h1 class="login-form__hdl">Log ind</h1>
		<form class="login-form__form" @click="login">
			<div class="login-form__input">
				<label>Username</label>
				<input type="text" v-model="username" />
			</div>

			<div class="login-form__input">
				<label>Password</label>
				<input type="password" v-model="password" autocomplete="on" />
			</div>
			<button class="btn__submit" type="submit">Log ind</button>
		</form>
	</div>
</template>

<script>
	import { loginUser } from '@/utils/auth'

	export default {
		name: 'LoginForm',
		data: function() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			async login(e) {
				e.preventDefault()
				try {
					await loginUser(this.username, this.password)
					this.$router.push('/')
				} catch (err) {
					// TODO set frontend validation feedback NOT ALERT
					alert(`Error: ${err}`)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/scss/base/_variables.scss';
	.login-form {
		background: #fff;
		border: 1px solid #262626;
		width: 85%;
		height: 60%;
		margin: 10vh auto;
		&__hdl {
			text-align: center;
		}
		&__form {
			height: 75%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			flex-direction: column;
		}
		&__input {
			display: flex;
			flex-direction: column;
			text-align: center;
		}
		// TODO move this to base scss file for forms
		input[type='text'],
		input[type='password'] {
			border: none;
			border-bottom: 1px solid #262626;
			background: #f0f1f6;
			height: 30px;
		}
		// TODO move this to base scss file for buttons
		.btn__submit {
			border: none;
			background: #f0f1f6;
			background: #647097;
			color: #fff;
			padding: 10px 20px;

			&:hover {
				transition: 0.2s;
				background: #fff;
				color: #262626;
				border: 1px solid #647097;
			}
		}
	}
</style>
