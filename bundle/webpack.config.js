const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
}
