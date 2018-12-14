const path = require( "path" );
const fs = require( "fs" );
const webpack = require( "webpack" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

module.exports = {
  entry: __dirname + "/src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.*(ttf|eot|woff|woff2)$/,
        use: [ "url-loader" ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [ "@babel/env" ]
        }
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [ "*", ".js", ".jsx" ],
    alias: {
      styles: __dirname + "/src/styles/",
      components: __dirname + "/src/components/",
      services: __dirname + "/src/services/",
      views: __dirname + "/src/views/"
    }
  },
  output: {
    path: __dirname + "/public/",
    publicPath: "/",
    filename: "m9.js"
  },
  devServer: {
    contentBase: __dirname + "/public/",
    compress: true,
    port: 4000,
    https: {
      key: fs.readFileSync( __dirname + "/crt/localhost.key" ),
      cert: fs.readFileSync( __dirname + "/crt/localhost.crt" ),
      ca: fs.readFileSync( __dirname + "/crt/localhost.pem" ),
    },
    publicPath: "https://localhost:4000/",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin( {
      title: "m9",
      template: __dirname + "/public/index.html",
      filename: "index.html"
    } ),
    new webpack.HotModuleReplacementPlugin()
  ]
};
