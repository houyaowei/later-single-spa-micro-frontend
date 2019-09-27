const path = require("path");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const AngularCompilerPlugin = require("@ngtools/webpack").AngularCompilerPlugin;

const devTypescriptLoader = [
  {
    test: /\.ts/,
    loader: "@ngtools/webpack"
  }
];

const plugins = [
  new ContextReplacementPlugin(/(.+)?angular(\\|\/)core(.+)?/, path.resolve(__dirname, "../src")),
  new AngularCompilerPlugin({
    mainPath: path.resolve(__dirname, "src/singleSpaEntry.ts"),
    tsConfigPath: path.resolve(__dirname, "tsconfig.json"),
    sourceMap: true,
    skipCodeGeneration: true,
    platform: 0,
    hostReplacementPaths: {
      "environments/environment.dev.ts": "environments/environment.dev.ts"
    }
  })
];
module.exports = {
  entry: {
    entry: "src/singleSpaEntry.ts",
    store: "src/store.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "release"),
    libraryTarget: "umd",
    library: "a7App"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.css?$/,
        loader: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(jpe?g|png|webp|gif|otf|ttf|woff2?|ani)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/a7App/"
        }
      },
      {
        test: /\.(eot|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/a7App/"
        }
      },
      {
        test: /\.scss$|\.sass$/,
        exclude: [path.join(process.cwd(), "src/styles.scss")],
        use: [
          "exports-loader?module.exports.toString()",
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$|\.sass$/,
        include: [path.join(process.cwd(), "src/styles.scss")],
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      }
    ].concat(devTypescriptLoader)
  },
  resolve: {
    extensions: [".js", ".ts"],
    modules: [__dirname, "node_modules"]
  },
  mode: "development",
  devtool: "eval-source-map",
  externals: [],
  plugins: plugins
};
