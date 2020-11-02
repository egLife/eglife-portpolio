///<reference path="../typings/webpack.d.ts"/>
import * as path from 'path';
import * as webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

const config: webpack.Configuration = merge(baseConfig, {
    mode: 'production',

    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: './',
        filename: 'bundle.js'
    },

    optimization: {
        // minimizer: [
        //     /**
        //      * This plugin uses terser to minify your JavaScript.
        //      * ref: https://github.com/webpack-contrib/terser-webpack-plugin
        //      */
        //     new TerserWebpackPlugin({
        //         cache: true,
        //         parallel: true,
        //         sourceMap: false
        //     }),

        //     /**
        //      * A Webpack plugin to optimize and minimize CSS assets.
        //      * ref: https://github.com/NMFR/optimize-css-assets-webpack-plugin
        //      */
        //     // new OptimizeCssAssetsWebpackPlugin({
        //     //     cssProcessorOptions: {
        //     //         map: {
        //     //             inline: false,
        //     //             annotation: true
        //     //         }
        //     //     }
        //     // })
        // ]
    },

    plugins: [
        /**
         * Add production environment.
         * Ref: https://webpack.js.org/plugins/define-plugin/
         */
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});

export default config;
