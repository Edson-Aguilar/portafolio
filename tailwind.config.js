/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.25rem',
            },
            boxShadow: {
                soft: '0 10px 30px rgba(0,0,0,0.08)',
                xl: '0 25px 70px rgba(15,23,42,0.25)',
            },
            animation: {
                'fade-up': 'fadeUp 0.7s ease-out',
                'fade-down': 'fadeDown 0.7s ease-out',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
};
