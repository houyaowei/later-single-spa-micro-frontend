const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./base.js",
  output: {
    filename: "base.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].js"
  },
  mode: "development",
  devServer: {
    contentBase: __dirname + "/dist",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  devtool: "sourcemap",
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, "base.js") }])
  ],
  module: {
    rules: [
      { parser: { System: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
