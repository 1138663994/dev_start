
module.exports = {
  // publicPath: '/free/',
  // outputDir: 'dist',
  devServer: {
    port: 8099,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
  }
}