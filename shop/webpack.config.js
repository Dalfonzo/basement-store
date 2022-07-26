const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies
require('dotenv').config()

module.exports = {
  output: {
    publicPath: process.env.SHOP_PUBLIC_PATH || '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3001,
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
      name: 'shop',
      filename: 'remoteEntry.js',
      remotes: {
        common: `common@${process.env.COMMON_PUBLIC_PATH}remoteEntry.js`,
        cart: `cart@${process.env.CART_PUBLIC_PATH}remoteEntry.js`,
      },
      exposes: {
        './Shop': './src/bootstrap.tsx',
        './Routes': './src/routes.tsx',
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
      favicon: './src/assets/img/favicon.png',
      minify: true,
      title: 'Basement Studio Shop - A beautiful and awesome store',
      hash: true,
      meta: {
        'og:image': { property: 'og:image', content: './src/assets/img/OG.png' },
        description: {
          name: 'description',
          content: 'A beautiful and awesome store where you can buy everything you need to look incredible.',
        },
      },
    }),
  ],
}
