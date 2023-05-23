/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			darkblue: "#27374D",
			boldBLue: "#526D82",
			regularBlue: "#9DB2BF",
			lightBlue: "#DDE6ED",
			whiteTextColor: "#FFFFFF",
		},
		screens: {
			sm: "360px",
			lg: "1440px",
		},
	},
};
