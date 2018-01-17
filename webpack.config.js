var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: path.join(__dirname, 'view', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'view', 'bundle'),
        filename: 'index.js',
        publicPath: path.join(__dirname, 'res')
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            exclude: /node_modules/, 
            loader: ['style-loader','css-loader', 'sass-loader']
        },
        {
            test:/\.js|jsx$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }]
    }
}