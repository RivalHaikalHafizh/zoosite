const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  plugins: [new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin(
      {
        generatetatsFile: true
      }
    )],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    compress: true,
    liveReload: true
  }
})
