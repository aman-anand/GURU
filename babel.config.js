module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'entry',
        targets: '> 1%',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['styled-components', '@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
  env: {
    production: {
      only: ['app'],
      plugins: [
        'lodash',
        'styled-components',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', 'dynamic-import-node'],
    },
  },
};
