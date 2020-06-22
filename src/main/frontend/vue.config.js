const path = require("path");
const loader = {
  loader: 'sass-resources-loader',
  // options: {
  //   resources: path.resolve(__dirname, './src/assets/scss/global.scss')
  // }
};

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '/',
  publicPath: '/',

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            loader,
            'sass-loader'
          ]
        }
      ]
    }
  },

  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:8420/',
        changeOrigin: true,
      },
    },
    watchOptions: {
      poll: true
    }
  }
};
