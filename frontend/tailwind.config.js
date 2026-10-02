/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        humind: {
          primary: {
            50: '#F0F8FF',
            100: '#E0F2FE',
            200: '#BAE6FD',
            300: '#7DD3FC',
            400: '#5DADE2', // Sky Blue cerah
            500: '#4EA8DE', // PRIMARY BASE (Calming Sky Blue)
            600: '#3A90C4', // Hover state
            700: '#2A76A3', // Active & deep accent
            800: '#1D5A7F',
            900: '#15415C',
          },
          neutral: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          },
          crisis: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
          },
          wellness: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            300: '#6EE7B7',
            500: '#10B981',
            700: '#047857',
          }
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(78, 168, 222, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-hover': '0 10px 25px -3px rgba(78, 168, 222, 0.15), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
