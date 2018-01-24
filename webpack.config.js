
const path = require('path');

const config = {
    entry: path.join(__dirname, 'view', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'view', 'bundle'),
        filename: '[name].bundle.js',
        publicPath: 'bundle'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/, 
                loader: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test:/\.js|jsx$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    devServer: {
        historyApiFallback: {
            index: 'view/index.html'
        }
    }
};

module.exports = config;