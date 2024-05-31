module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': 'em(640px)',
        'mantine-breakpoint-sm': 'em(768px)',
        'mantine-breakpoint-md': 'em(1024px)',
        'mantine-breakpoint-lg': 'em(1280px)',
        'mantine-breakpoint-xl': 'em(1536px)'
      }
    },
    tailwindcss: {},
    autoprefixer: {}
  }
};
