var path = require('app-root-path')
module.exports = {
  entry: `${__dirname}/../dist/ts-dist/public/js/index.js`,
  output: {
    path: './src/public/dist/js',
    filename: 'bundle.js',
    publicPath: `${path}/src/public`
  }
}
