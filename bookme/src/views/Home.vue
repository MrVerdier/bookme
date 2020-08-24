<template>
	<div class="page home">
		<section class="navigation">
			<router-link class="navigation__link" :to="{ name: 'login' }"
				>Kalender</router-link
			>
			<router-link class="navigation__link" :to="{ name: 'home' }"
				>Galleri</router-link
			>
			<router-link class="navigation__link" :to="{ name: 'login' }"
				>Todo's</router-link
			>
			<router-link class="navigation__link" :to="{ name: 'home' }"
				>Log ud</router-link
			>
		</section>
		<section class="bottom"></section>
	</div>
</template>

<script>
	export default {}
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
