/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			aspectRatio: {
				'3/2': '3 / 2',
				'5/2': '5 / 2',
			},
			blur: {
				xs: '1px',
			},
			scale: {
				'101': '1.01',
			}
		},
	},
	plugins: [
		require('daisyui')
	],
}
