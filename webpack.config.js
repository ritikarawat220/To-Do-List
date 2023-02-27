const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/toDo.js", "./src/todoStatus.js"],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    compress: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "TO-DO-LIST",
      template: "./src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
    ],
  },

  
  optimization: {
    runtimeChunk: "single",
  },
};