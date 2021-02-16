const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, './docs'),
        filename: 'bundle.js',
        publicPath: './'
    }
};
