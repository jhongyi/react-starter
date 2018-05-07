const path = require('path');

const node_modules_dir = path.resolve(__dirname, 'node_modules');

const jsRules = (useEslint = false) => {
  let use = ['babel-loader'];
  if (useEslint) {
    use = [...use, 'eslint-loader'];
  }
  return {
    use,
    test: /\.js$/,
    exclude: /node_modules/,
  };
};

const cssRules = {
  // postcss-loader幫CSS加前綴 css-loader讓webpack 可以讀css內容，style-loader把css加樣式
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        importLoaders: true,
      },
    },
    // { loader: 'postcss-loader' },
  ],
};

const scssRules = {
  test: /\.scss$/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: true,
    },
  }, {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: true,
      localIdentName: '[path]__[name]__[local]___[hash:base64:5]',
      sourceMap: true,
    },
  },
  {
    loader: 'resolve-url-loader',
  }, {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  }],
};

const imageRules = {
  test: /\.(jpe?g|png|gif|svg)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 40000, // 單位：byte  40k以下都會被編成base64，以上就變成檔案
        name: 'img/[hash].[ext]',
      },
    },
    // {
    //   loader: 'image-webpack-loader',
    //   options: {
    //     bypassOnDebug: true,
    //   }
    // }
  ],
};

const fontRules = {
  test: /\.(woff|woff2|ttf|eot)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        limit: 40000, // 單位：byte  40k以下都會被編成base64，以上就變成檔案
        name: 'fonts/[hash].[ext]',
      },
    },
  ],
};

const modules = (withEslint = true) => {
  return {
    module: {
      rules: [
        jsRules(withEslint),
        cssRules,
        scssRules,
        imageRules,
        fontRules
      ]
    },
  };
};

module.exports = modules;
