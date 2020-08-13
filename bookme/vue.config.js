module.exports = {
	devServer: {
		proxy: 'https://localhost:5000'
	},
	runtimeCompiler: true,
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import '@/scss/base/_reset.scss
				`
			}
		}
	}
}
