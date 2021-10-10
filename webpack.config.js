const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "development",
    module: {
        rules: [
         { test: /\.css$/,
           exclude: /node_modules/,
           use: [
             { loader: 'style-loader' },
             { loader: 'css-loader' }
           ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          }
        ]
      }
};