export default defineNuxtConfig({
	devtools: { enabled: false },
	ssr: true,
	experimental: {
		payloadExtraction: true,
		inlineSSRStyles: false
	},
	modules: ['@unocss/nuxt', '@vueuse/nuxt', '@pinia/nuxt', 'nuxt-lodash'],
	imports: {
		dirs: ['composables', 'stores']
	},
	css: ['@/styles/index.scss'],
	vue: {
		defineModel: true,
		propsDestructure: true
	},
	vite: {
		vue: {
			customElement: true
		},
		vueJsx: {
			mergeProps: true
		}
	},
	devServer: {
		port: 8000
	}
})
