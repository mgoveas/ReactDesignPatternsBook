const nodeExternals = require('webpack-node-externals');
const path = require('path');

const loaderConfig = {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
            },
          }
        ]
    };

const client = {
    entry: './src/client.js',
    module: loaderConfig,
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle.js'
    }
};

const server = {
    entry: './src/server.js',
    module: loaderConfig,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    target: 'node',
    externals: [nodeExternals()]
};

module.exports = [client, server]