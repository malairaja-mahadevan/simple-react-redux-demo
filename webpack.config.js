var path = require("path");
var webpack = require("webpack");

module.exports = {
  devServer: {
    inline: true,
    contentBase: "./src",
    port: 3000,
    historyApiFallback: true,
    proxy: {
      "/api/*": {
        target: "http://[::|]:8080",
        secure: false,
      },
    },
  },
  devtool: "cheap-module-eval-source-map",
  entry: "./dev/js/index.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader",
      },
    ],
  },
  output: {
    path: "src",
    filename: "js/bundle.min.js",
    publicPath: "/",
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()],
};
