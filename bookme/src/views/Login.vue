<template>
	<div class="page login">
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
	@import '@/scss/base/_variables.scss';
	.login {
		background-image: url('../assets/bg1.png');
		background-size: cover;
		margin: 0 auto;
	}
</style>
