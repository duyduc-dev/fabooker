const path = require('path');

module.exports = {
  entry: {
    'lib.bundle': './src/js/lib/index.js',
    bundle: './src/js/index.js',
  },

  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};
