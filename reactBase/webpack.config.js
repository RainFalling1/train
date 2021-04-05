/**
 * 打包器
 **/

const path = require('path');
const HtmlWebpackPlugin =require("html-webpack-plugin");

module.exports = function (env,args){

    return{
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules:
                [
                    //babel自动编辑
                    {test: /\.js$/, use: 'babel-loader'},

                    //样式打包
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    },

                    // 使用file-loader打包文件的结果：使用file-loader打包的文件会给每张文件都生成一个随机的hash值作为名字
                    { test: /\.(woff|woff2|eot|ttf|otf|png|jpg|svg)$/, use: ["file-loader"]},

                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        enforce: "pre",
                        use: "eslint-loader"
                    },
                ]
        },

        devServer:{
            contentBase:'./dist'
        },

        plugins:[
            new HtmlWebpackPlugin(
                {
                    filename: 'index.html',
                    template:"./public/index.html"
                }
            )
        ],
        resolve: {
            alias: {
                '@': path.resolve('src'), // 给src起了个别名
            }
        }
    }

};
