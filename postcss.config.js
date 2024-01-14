export default {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  },

  targets: {
    build: {
      executor: 'vite:build',
      outputs: ['{options.outputPath}'],
      defaultConfiguration: 'production',
      options: {
        postcssConfig: 'apps/me/postcss.config.js', // <--- This is the fix
        webpackConfig: '@nrwl/react/plugins/webpack',
      },
      configurations: {
        production: {
          optimization: true,
          extractCss: true,
          // ...
        },
        development: {
          optimization: false,
          extractCss: false,
        },
      },
    },
  },
};
