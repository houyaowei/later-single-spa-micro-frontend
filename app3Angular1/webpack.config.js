const path = require("path");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "src/singleSpaEntry.js",
    store: "src/reducers/store.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "release"),
    libraryTarget: "amd",
    library: "a1App"
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  module: {
    rules: [
      {
        parser: {
          System: false
        }
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        exclude: /node_modules|svelte/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    modules: [__dirname, "node_modules"]
  },
  devtool: "eval-source-map",
  externals: [],
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/singleSpaEntry.js"
      }
    ])
  ]
};
