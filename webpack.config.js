const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './resources/script.js'],
    output: {
        path: path.resolve(__dirname),
        filename: 'finalJS/bundle.js'
    },
    devServer: {
        contentBase: './'
    },
    module: { 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
