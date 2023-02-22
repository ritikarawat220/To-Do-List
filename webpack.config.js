const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TO-DO-LIST",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: "asset/resource",
     },
    ],
  },
  

  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    compress: true,
    port: 8080,
  },
  optimization: {
    runtimeChunk: "single",
  },
};