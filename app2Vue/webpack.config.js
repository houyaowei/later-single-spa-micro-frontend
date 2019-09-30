const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "src/singleSpaEntry.js",
    store: "src/store.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "release"),
    libraryTarget: "amd",
    library: "vueApp"
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
      }, {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            js: "babel-loader"
          }
        }
      }, {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
          publicPath: "/vueApp/"
        }
      }, {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    // alias: {   vue$: "vue/dist/vue.esm.js" },
    extensions: [
      ".js", ".vue"
    ],
    modules: [__dirname, "node_modules"]
  },
  mode: "development",
  devtool: "none",
  // externals: [/^vue$/],
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: "src/singleSpaEntry.js"
      }
    ])
  ]
};
