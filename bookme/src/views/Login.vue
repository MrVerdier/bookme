<template>
	<div class="login">
		<LoginForm />
	</div>
</template>

<script>
	import LoginForm from '@/components/Forms/LoginForm.vue'

	export default {
		name: 'Login',
		components: {
			LoginForm
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		padding: 66px 20px 20px 20px;
		height: 100vh;
		background-image: url('../assets/bg1.png');
		background-size: cover;
		margin: 0 auto;
	}
</style>
