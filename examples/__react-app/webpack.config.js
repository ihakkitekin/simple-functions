const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientConfig = {
  mode: "production",
  entry: {
    client: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  target: "web",
  stats: "errors-only",
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
  })]
};

const serverConfig = {
  mode: "production",
  entry: {
    server: './src/server.tsx'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  target: "node",
  stats: "errors-only",
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
  })]
};


module.exports = [
  serverConfig,
  clientConfig
]