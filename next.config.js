/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["raw.githubusercontent.com", "assets.pokemon.com"],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
