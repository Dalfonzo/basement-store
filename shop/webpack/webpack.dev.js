require('dotenv').config()
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')

module.exports = merge(common, {})
