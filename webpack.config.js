const path = require('path');

module.exports = {
  entry: {
    'lib.bundle': './src/js/lib/index.js',
    'lib.jquery': './src/js/lib/jquery.js',
    'lib.shared\\shared1': './src/js/shared/shared1.js',
    'lib.shared\\shared2': './src/js/shared/shared2.js',
    'lib.shared\\shared3': './src/js/shared/shared3.js',
    'lib.shared\\shared4': './src/js/shared/shared4.js',
    bundle: './src/js/index.js',
  },

  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};
