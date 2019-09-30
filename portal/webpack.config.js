const path = require("path");
const webpack = require("webpack");
const HTMLWebpachPlugin = require("html-webpack-plugin");
// const ContextReplacementPlugin =
// require("webpack/lib/ContextReplacementPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/portal.js"
  },
  output: {
    filename: "portal.js",
    library: "portal",
    // libraryTarget: "amd",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  module: {
    unknownContextCritical: false,
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
        test: /\.css/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },

  node: {
    fs: "empty"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HTMLWebpachPlugin({ title: "micro-frontend", template: "./src/index.html" }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/index.html"),
        from: path.resolve(__dirname, "src/style.css")
      },
      {
        from: "src/assets/libs",
        to: "libs/",
        force: true
      },
      {
        from: "src/portal.js"
      }
    ])
  ],
  externals: [],
  devServer: {
    contentBase: __dirname + "/dist",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {}
  }
};
