/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}', 
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        foreground: '#f8f9fa',
        primary: {
          50: '#e6f7f0',
          100: '#b3e6d4',
          200: '#80d6b8',
          300: '#4dc59c',
          400: '#1ab580',
          500: '#00a466',
          600: '#00804f',
          700: '#005c38',
          800: '#003821',
          900: '#00140a',
        },
        secondary: {
          50: '#e6fff9',
          100: '#b3ffee',
          200: '#80ffe3',
          300: '#4dffd8',
          400: '#1affcd',
          500: '#00e6b3',
          600: '#00b38a',
          700: '#008062',
          800: '#004d3b',
          900: '#001a13',
        },
        accent: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
        'neon-blue': '#4361ee',
        'neon-green': '#00b894',
        'neon-emerald': '#00d68f',
        'neon-teal': '#4cc9f0',
        'neon-purple': '#7209b7',
        'neon-pink': '#f72585', // Adding neon-pink color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #4361ee, 0 0 10px #4361ee',
        'neon-green': '0 0 5px #00b894, 0 0 10px #00b894',
        'neon-emerald': '0 0 5px #00d68f, 0 0 10px #00d68f',
        'neon-teal': '0 0 5px #4cc9f0, 0 0 10px #4cc9f0',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};