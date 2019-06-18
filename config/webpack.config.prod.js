const path = require('path')

// https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'react-interaction-hooks.js',
    library: 'ReactInteractionHooks',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
}
