const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('../package.json').dependencies
require('dotenv').config()

module.exports = {
  output: {
    publicPath: process.env.COMMON_PUBLIC_PATH || '/',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        oneOf: [
          {
            test: /\.svg$/,
            type: 'asset/inline',
          },
          {
            test: /\.(jpg|png|svg)$/,
            type: 'asset/resource',
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'common',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Store': './src/store',
        './Theme': './src/theme',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
}
