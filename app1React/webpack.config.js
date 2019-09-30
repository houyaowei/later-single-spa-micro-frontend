const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",

  entry: {
    entry: "./src/entry.js"
    // store: "./src/store.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "release"),
    libraryTarget: "amd",
    library: "reactApp"
  },
  devServer: {
    contentBase: __dirname + "/dist",
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  externals: [
    /^@portal\/*$/, /^react$/, /^react-dom$/
  ],
  module: {
    rules: [
      {
        parser: {
          System: false
        }
      }, {
        test: /\.js/,
        use: ["babel-loader?cacheDirectory"],
        exclude: /node_modules/
      }, {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/reactApp/"
            }
          }
        ]
      }
    ]
  },
  plugins: [new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/entry.js"),
        to: "/"
      }
    ])]
};
