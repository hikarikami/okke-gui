/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
    boxShadow: {
      sm: '0px 2px 4px 0px rgba(60,70,77,0.05)',
      DEFAULT: '0px 3px 8px 0px rgba(60,70,77,0.07), 0px 2px 4px 0px rgba(60,70,77,0.05)',
      md: '0px 6px 16px 0px rgba(60,70,77,0.09), 0px 3px 5px 0px rgba(60,70,77,0.07)',
      lg: '0px 11px 26px 0px rgba(60,70,77,0.15), 0px 4px 9px 0px rgba(60,70,77,0.05)',
      xl: '0px 24px 30px 0px rgba(60,70,77,0.15), 0px 4px 10px 0px rgba(60,70,77,0.06)',
      '2xl': '0px 40px 64px 0px rgba(60,70,77,0.19), 0px 4px 12px 0px rgba(60,70,77,0.11)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        '2xl': "1rem",
      },
      screens: {
        sm: '100%',         // mobile
        md: '1200px',         // tablet 
        lg: '1200px',       // laptop
        xl: '1200px',       // desktop
        '2xl': '1200px',    // ultrawide
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.2rem' }],
      sm: ['0.88rem', { lineHeight: '1.2rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.13rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.755rem', { lineHeight: '2.5rem' }],
      '4xl': ['25rem', { lineHeight: '2.75rem' }],
      '5xl': ['2.55rem', { lineHeight: '3.25rem' }],
      '6xl': ['3rem', { lineHeight: '4' }],
      'grid-edit': ['0.8125rem', '1.125rem'],
      'grid-view': ['0.9375rem', '1.375rem'],
    },

    fontFamily: {
      sans: [
        '"Inter"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    screens: {
      sm: '640px',    // mobile
      md: '1200px',   // tablet 
      lg: '1440px',   // laptop
      xl: '1920px',   // desktop
      '2xl': '1800',  // ultrawide
    },
    //extend theme to avoid overriding defaults
    extend: {
      animation: {
        'spin-150': 'spin 1.5s linear infinite',
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-300': '300% 300%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '99% 99%',
        'right-2-bottom': 'right 0.5rem bottom',
        'right-4-bottom': 'right 1rem bottom',
        'right-8-bottom': 'right 2rem bottom',
        'right-16-bottom': 'right 4rem bottom',
        'right-5pc-bottom': 'right 5% bottom',
      },
      boxShadow: {
        'button-subtle': '0px 1px 4px 0px rgba(60,70,77,0.03), 0px 1px 2px 0px rgba(60,70,77,0.04',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
        'n-resize': 'n-resize'
      },
      colors: {
        tangerine: {
          50: '#fff4f1',
          100: '#ffe7e1',
          200: '#ffd3c7',
          300: '#ffb4a0',
          400: '#ff8c6e',
          500: '#f8623b',
          600: '#e5441f',
          700: '#c23414',
          800: '#9b2912',
          900: '#621302',
        },
        lavender: {
          50: '#f9f5ff',
          100: '#f2e8ff',
          200: '#e7d6fe',
          300: '#d4b5fd',
          400: '#b47dfa',
          500: '#9f57f5',
          600: '#8836e7',
          700: '#7424cc',
          800: '#6323a6',
          900: '#521d86',
        },
        midnight: {
          50: '#9283a5',
          100: '#857a93',
          200: '#746885',
          300: '#645875',
          400: '#554867',
          500: '#453659',
          600: '#33214d',
          700: '#261340',
          800: '#1b0a32',
          900: '#120228',
        },
        colbert: {
          50: '#fcfcfd',
          100: '#f6f5f9',
          200: '#ececf3',
          300: '#e1e2ea',
          400: '#bebfcb',
          500: '#717284',
          600: '#575766',
          700: '#32333e',
          800: '#25252d',
          900: '#1c1c22',
        },
        brand: {
          primary: '#b47dfa',
          secondary: '#120228',
          tertiary: '#ff8c6e',
        },
        default: {
          black: '#000000',
          white: '#ffffff',
          bg: '#FDFDFF'
        },
      },
      fontSize: {
        xxs: ['0.63rem', { lineHeight: '1rem' }],
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        15: '3.75rem',
        18: '4.5rem',
        21: '5.25rem',
        50: '12.5rem',
        62: '15.5rem',
        66: '16.5rem',
        74: '18.5rem',
        112: '28rem',
        128: '32rem'
      },
      transformOrigin: {
        0: '0%',
      },
      transitionDuration: {
        0: '0ms',
      },
      transitionProperty: {
        border: 'border',
        size: 'width, height'
      },
      width: {
        '99pc': '99%',
      },
      height: {
        '75vh': '75vh'
      },
      zIndex: {
        '-1': '-1',
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
        borderWidth: ['first', 'last']
      }
    },



  },
  plugins: [],
}
