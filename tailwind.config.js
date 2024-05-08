const getColor = (cssVar) => `hsl(var(${cssVar}))`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.jsx',
    './src/components/**/*.jsx',
    './src/components/**/variants.js',
    './src/components/*Variants.js',
    './src/styles/*.css'
  ],
  theme: {
    extend: {
      spacing: {
        px: '0.8px',
        '9/10': '90%',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)'
      },
      colors: {
        main: getColor('--root-main'),
        active: getColor('--root-active'),
        content: getColor('--root-content'),
        muted: getColor('--root-muted'),
        inverted: {
          DEFAULT: getColor('--root-inverted'),
          active: getColor('--root-inverted-a'),
          content: getColor('--root-inverted-c'),
          muted: getColor('--root-inverted-m')
        },
        primary: {
          DEFAULT: getColor('--root-primary'),
          active: getColor('--root-primary-a'),
          content: getColor('--root-primary-c'),
          muted: getColor('--root-primary-m')
        },
        secondary: {
          DEFAULT: getColor('--root-secondary'),
          active: getColor('--root-secondary-a'),
          content: getColor('--root-secondary-c'),
          muted: getColor('--root-secondary-m')
        },
        accent: {
          DEFAULT: getColor('--root-accent'),
          active: getColor('--root-accent-a'),
          content: getColor('--root-accent-c'),
          muted: getColor('--root-accent-m')
        },
        info: {
          DEFAULT: getColor('--root-info'),
          active: getColor('--root-info-a'),
          content: getColor('--root-info-c'),
          muted: getColor('--root-info-m')
        },
        success: {
          DEFAULT: getColor('--root-success'),
          active: getColor('--root-success-a'),
          content: getColor('--root-success-c'),
          muted: getColor('--root-success-m')
        },
        warning: {
          DEFAULT: getColor('--root-warning'),
          active: getColor('--root-warning-a'),
          content: getColor('--root-warning-c'),
          muted: getColor('--root-warning-m')
        },
        danger: {
          DEFAULT: getColor('--root-danger'),
          active: getColor('--root-danger-a'),
          content: getColor('--root-danger-c'),
          muted: getColor('--root-danger-m')
        },
        border: getColor('--root-border'),
        current: 'currentColor'
      },
      borderColor: {
        DEFAULT: getColor('--root-border')
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        inherit: 'inherit'
      },
      outlineColor: {
        DEFAULT: 'currentColor'
      },
      outlineOffset: {
        DEFAULT: '2'
      },
      outlineWidth: {
        DEFAULT: 2
      },
      minHeight: {
        bounds: 'var(--max-h)'
      },
      minWidth: {
        bounds: 'var(--max-w)'
      },
      maxHeight: {
        bounds: 'var(--max-h)'
      },
      maxWidth: {
        bounds: 'var(--max-w)'
      },
      keyframes: {
        'slide-down': {
          from: { height: 0 },
          to: { height: 'var(--height, 0)' }
        },
        'slide-up': {
          from: { height: 'var(--height, 0)' },
          to: { height: 0 }
        }
      },
      animation: {
        'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)'
      },
      fontFamily: {
        app: 'var(--font-app)'
      },
      data: {
        active: 'state=active',
        checked: 'state=checked',
        closed: 'state=closed',
        disabled: 'disabled',
        open: 'state=open'
      },
      transitionTimingFunction: {
        backOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
