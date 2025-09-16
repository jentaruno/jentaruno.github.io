/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'green': {
                100: '#f4f0ee',
                200: '#dbe0d7',
                600: '#5f754a',
                800: '#28502e',
                900: '#1c3b21'
            },
            'orange': {
                700: '#ff8c00',
                800: '#c76e00',
            },
            'purple': {
                700: '#663da0',
                800: '#4e2f7b',
            },
            'white': '#fcfcfc',
        },
        fontFamily: {
            'sans': ['var(--font-sans)'],
            'serif': ['var(--font-serif)'],
            'card': ['var(--font-card)'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
