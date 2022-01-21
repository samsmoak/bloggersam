module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				small1: "600px",
				small2: "500px",
				small3: "400px",
				big: "800px",
				bigx: "1000px",
				bigxx: "1200px",
				bigxxx: "1200px",
			},
			width: {
				small1: "600px",
				small2: "500px",
				small3: "400px",
				big: "800px",
				bigx: "1000px",
				bigxx: "1200px",
				bigxxx: "1200px",
			},
			colors: {
				mamba: {
					100: "#343434",
				},
				orangy: {
					100: "#FFAD9C",
					200: "#EEEDE7",
				},
				paper: {
					100: "#FEFEFE",
					200: "#F9F4ED",
					300: "#F6EFE4",
					400: "#F3E9DB",
					500: "#F0E4D3",
					600: "#ECDFCA",
					700: "#E9D9C1",
					800: "#E6D4B8",
				},
				greener: {
					100: "#F5F9ED",
					200: "#ECF3DC",
					300: "#D9E6B9",
					400: "#C5DA95",
					500: "#BCD484",
					600: "#9FC14F",
					700: "#5F742F",
					800: "#404D20",
				},
				orange: {
					100: "#FFCCBC",
					200: "#FFAB91",
					300: "#FF8A64",
					400: "#FF7143",
					500: "#FF5721",
					600: "#F4511D",
					700: "#E64B18",
					800: "#D94314",
					900: "#FF9E80",
				},
				bluelight: {
					100: "#B3E6FB",
					200: "#80D4FA",
					300: "#51C2F7",
					400: "#2BB5F6",
					500: "#00A9F4",
					600: "#009CE5",
					700: "#0188D1",
					800: "#0377BD",
					900: "#00589B",
				},
			},
			screens: {
				xs: "300px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
