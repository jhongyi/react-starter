const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~~components': path.resolve(__dirname, '../src/components'),
      '~~containers': path.resolve(__dirname, '../src/containers'),
      '~~reducers': path.resolve(__dirname, '../src/reducers'),
      '~~store': path.resolve(__dirname, '../src/store'),
      '~~middlewares': path.resolve(__dirname, '../src/middlewares'),
      '~~sagas': path.resolve(__dirname, '../src/sagas'),
      '~~static': path.resolve(__dirname, '../src/static'),
    },
    extensions: [".js", ".jsx"]
  }
}
