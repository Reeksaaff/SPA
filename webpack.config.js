let HTMLWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
entry: './src/main.js',
output: {
    path: __dirname + '/dist',
    filename: "[name].js"
},
plugins: [
    new HTMLWebpackPlugin ({
        template: './src/index.html',
    }),
    new CopyWebpackPlugin ([{
        from: './src/styles.css'
    }]),
    // new CopyWebpackPlugin([{ 
    //     from: './src/assets', 
    //     to: 'assets' 
    // }]),
],
}