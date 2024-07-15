module.exports = {
    devServer: {
		proxy: {
			'/api': {
				target: process.env.PROXY_TARGET,
				ws: true,
				changeOrigin: true,
			},
		},
	},

    /* ... other config ... */
    transpileDependencies: ['vuex-persist'],

    pluginOptions: {
      i18n: {
        locale: 'ko',
        fallbackLocale: 'ko',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
};
