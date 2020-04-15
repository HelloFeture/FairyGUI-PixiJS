const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin}  = require("clean-webpack-plugin");

module.exports = {
    mode : "production",
    entry: {
        "main" : path.resolve(__dirname, "src/main.ts"),
    },
    output: {
        path: path.resolve(__dirname, 'dist', "js"),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [
        
        //new CleanWebpackPlugin({}),

        // new HtmlWebpackPlugin({
        //     // file name
        //     filename : path.resolve(__dirname, 'dist', "index.html"),
        //     // template html path
        //     template : path.resolve(__dirname, 'public', "index.html"),
        //     // in body section
        //     inject : "body",
        //     // generate hash
        //     hash : false,
        // }),

    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        inline:true,
        hot:true,
        contentBase: path.join(__dirname, "dist")
    },
    externals : [
        "pixi.js",
        "fairygui",
        "fgui"
    ]
}