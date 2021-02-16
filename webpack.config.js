const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const path = require('path');

module.exports = env => {
    const mode = env.MODE || 'dev';
    const conf = require(`./webpack.${mode}.js`);

    return merge({
        entry: './src/index.jsx',
        output: {
            // eslint-disable-next-line no-undef
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx'],
            plugins: [
                new DirectoryNamedWebpackPlugin()
            ]
        }
    }, conf);
};
