const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = (templatePath = 'src/index.html') => {
  return {
    plugins: [
      // 把webpack壓出來的檔案自動夾到index.html樣板裡。
      // 避免改了webpack設定，增加或減少output檔案，卻忘了到index.html調整
      new HtmlWebpackPlugin({
        template: templatePath
      }),
      new webpack.ProvidePlugin({
        "React": "react",
      }),
      new CopyWebpackPlugin([
        { from: './src/libs/js', to: './libs/js' },
      ]),
      new CopyWebpackPlugin([
        { from: './src/fonts', to: './fonts' },
      ])
    ],
  };
}

module.exports = plugins;
