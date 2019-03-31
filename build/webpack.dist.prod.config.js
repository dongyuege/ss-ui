const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./packages/webpack.base.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    entry: {
        main: './packages/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: 'ss-ui.min.js',
        library: 'ss-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: true
        })
    ]
});
