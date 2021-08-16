module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			css: "./src/css",
			js: "./src/js",
			img: "./src/img"
		},
		dist: {
			base: "./dist",
			css: "./dist/css",
			font: "./dist/css/fonts",
			js: "./dist/js",
			img: "./dist/img"
		},
		build: {
			base: "./build",
			css: "./build/css",
			font: "./build/css/fonts",
			js: "./build/js",
			img: "./build/img"
		}
	}
}