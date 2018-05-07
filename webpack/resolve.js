const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~~components': path.resolve(__dirname, '../src/components'),
      '~~containers': path.resolve(__dirname, '../src/containers'),
      '~~store': path.resolve(__dirname, '../src/store'),
    },
    extensions: [".js", ".jsx"]
  }
}
