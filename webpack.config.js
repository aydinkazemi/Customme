
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/assets/js/main.js', // نام‌گذاری دستی برای entry
  },
  output: {
    filename: '[name].js', // خروجی می‌شود main.js
    path: path.resolve(__dirname, 'dist'),
    clean: true, // پاک‌سازی پوشه dist قبل از هر بیلد
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // استفاده از این پلاگین برای استخراج CSS
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // استفاده از این پلاگین برای استخراج CSS
          'css-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]', // تصاویر و فونت‌ها بروند توی پوشه assets
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/cards.html',
      filename: 'cards.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/button.html',
      filename: 'button.html',
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // اینجا تنظیم می‌کنیم که نام فایل CSS چطور باشه
    }),
  ],
  devtool: 'source-map',
  mode: 'development',
};
