/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			MontserratRegular: ["Montserrat_Regular", "normal"],
		},
		fontWeight: {
			medium: "500",
			semibold: "600",
		},
		fontSize: {
			20: "20px",
			25: "25px",
			14: "14px",
			15: "15px",
		},
		colors: {
			darkblue: "#27374D",
			boldBLue: "#526D82",
			regularBlue: "#9DB2BF",
			lightBlue: "#DDE6ED",
			whiteTextColor: "#FFFFFF",
		},

		screens: {
			sm: "428px",
			lg: "1024px",
		},
	},
};
