import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#1E40AF',
                'secondary': '#FBBF24',
                'accent': '#10B981',
                'background': '#F3F4F6',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
            
        },
    },
    plugins: [],
};

export default config;