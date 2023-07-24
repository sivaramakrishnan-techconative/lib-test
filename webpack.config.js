const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "/src/lib/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "url-loader",
      },
    ],
  },
  externals: [nodeExternals()],
};
