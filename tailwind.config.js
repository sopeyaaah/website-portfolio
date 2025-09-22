/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        border: 'var(--color-border)', /* gray-200 */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* blue-600 */
        background: 'var(--color-background)', /* white */
        foreground: 'var(--color-foreground)', /* gray-900 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* gray-900 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* gray-600 */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-600 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-50 */
          foreground: 'var(--color-muted-foreground)', /* gray-500 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* blue-600 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* gray-900 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)', /* gray-900 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-600 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-600 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-600 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        surface: {
          DEFAULT: 'var(--color-surface)', /* slate-50 */
          foreground: 'var(--color-surface-foreground)', /* gray-900 */
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }], /* 12px */
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }], /* 14px */
        'base': ['1rem', { lineHeight: '1.618', letterSpacing: '0' }], /* 16px */
        'lg': ['1.125rem', { lineHeight: '1.618', letterSpacing: '-0.025em' }], /* 18px */
        'xl': ['1.25rem', { lineHeight: '1.618', letterSpacing: '-0.025em' }], /* 20px */
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.025em' }], /* 24px */
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }], /* 30px */
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }], /* 36px */
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }], /* 48px */
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }], /* 60px */
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }], /* 72px */
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }], /* 96px */
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }], /* 128px */
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '88': '22rem', /* 352px */
        '128': '32rem', /* 512px */
        '144': '36rem', /* 576px */
      },
      borderRadius: {
        'lg': '0.5rem', /* 8px */
        'xl': '0.75rem', /* 12px */
        '2xl': '1rem', /* 16px */
        '3xl': '1.5rem', /* 24px */
      },
      boxShadow: {
        'brand-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'brand-md': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'brand-lg': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'brand-xl': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'typewriter': 'typewriter 2.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--color-accent)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '5/4': '5 / 4',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}