module.exports = {
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
