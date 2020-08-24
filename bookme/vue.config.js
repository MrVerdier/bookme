module.exports = {
	devServer: {
		proxy: 'https://localhost:5000'
	},
	runtimeCompiler: true,
	css: {
		loaderOptions: {
			sass: {
				//FIXME why is it not importing
				prependData: `
					@import '@/scss/base/_global.scss';
					@import '@/scss/base/_reset.scss';
					@import '@/scss/base/_variables.scss';
					@import '@/scss/base/_reset.scss';
				`
			}
		}
	}
}
