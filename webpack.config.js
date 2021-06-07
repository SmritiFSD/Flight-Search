const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true,
    },
    entry: "./src/index.js",
    output: {
        path       : path.join(__dirname, '/dist'),
        filename   : "bundle.js",
        pathinfo   : true,
        // publicPath : '/public/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ],
    module: {
        rules: [
            {
                test    : /\.js$/,
                loader  : "babel-loader",
                exclude : /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test    : /\.(png|jpg)$/,
                loader  : 'file-loader'
            },
            {
                test    : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader  : 'file-loader'
            }
        ]
    },



};