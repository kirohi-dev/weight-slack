const path = require('path');
const nodeExternals = require('webpack-node-externals');

// -p commandを渡されることでminify化される

module.exports = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: './src/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/,
        exclude: [/node_modules/],
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/'),
      models: path.resolve(__dirname, '/src/domains/models/'),
      domains: path.resolve(__dirname, '/src/domains/'),
      translator: path.resolve(__dirname, '/src/translator/'),
    },
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

if (process.env.NODE_ENV !== 'production') {
  module.exports.devtool = 'inline-source-map';
  module.exports.watch = true;
}
