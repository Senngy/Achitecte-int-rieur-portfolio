import adapter from '@sveltejs/adapter-node';

const config = {
	kit: {
		adapter: adapter({
			envPrefix: ''
		})
	}
};

export default config;
