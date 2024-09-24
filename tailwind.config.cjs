/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
			  mytheme: {
				"primary": "#94e2d5",
				"secondary": "#89dceb",
				"accent": "#f38ba8",
				"base-100": "#11111b",
				"base-200": "#181825",
				"base-300": "#1e1e2e",
				"--rounded-box":   "0.1rem", // border radius rounded-box utility class, used in card and other large boxes
				"--rounded-btn":   "0.1rem", // border radius rounded-btn utility class, used in buttons and similar element
				"--rounded-badge": "0.1rem", // border radius rounded-badge utility class, used in badges and similar
			  },
			},
			"black",
			"cupcake",
			"lofi",
		  ],
		darkTheme: "black", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
