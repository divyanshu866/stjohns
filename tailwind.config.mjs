/** @type {import('tailwindcss').Config} */
export default {

    darkMode: 'class', // Add this line
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                zoom: {
                    "0%, 100%": {transform: "scale(1)"},
                    "50%": {transform: "scale(1.1)"},
                },
            },
            animation: {
                zoom: "zoom 15s infinite ease-in-out",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brown: {
                    50: '#efebe9',
                    100: '#d7ccc8',
                    200: '#bcaaa4',
                    300: '#a1887f',
                    400: '#8d6e63',
                    500: '#795548',
                    600: '#6d4c41',
                    700: '#5d4037',
                    800: '#4e342e',
                    900: '#3e2723',
                },

            },
        },
    },
    plugins: [],
};
