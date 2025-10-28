/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// PDFのロゴから色を抽出（charitywater風の配色）
				'scidi-blue': '#005a9c', // 仮の青色（ロゴを参考に）
				'scidi-green': '#00a99d', // 仮の緑色（ロゴを参考に）
				'scidi-yellow': '#f8b100', // 仮のアクセントイエロー (charitywater風)
			}
		},
	},
	plugins: [],
}