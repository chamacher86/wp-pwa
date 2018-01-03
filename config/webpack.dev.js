const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool:   'cheap-module-source-map',
    devServer: {
        historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
    },
    entry:     [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://127.0.0.1:8080/', // Specify the local server port
        'webpack/hot/only-dev-server', // Enable hot reloading
        './src' // This is where Webpack will be looking for the entry index.js file
    ],
    output:    {
        path:       path.join(__dirname, '../build'), // This is used to specify folder for producion bundle
        filename:   'bundle.js', // Filename for production bundle
        publicPath: '/'
    },
    resolve:   {
        modules:    [
            'node_modules',
            'src',
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules')
        ], // Folders where Webpack is going to look for files to bundle together
        extensions: ['.jsx', '.js'] // Extensions that Webpack is going to expect
    },
    module:    {
        // Loaders allow you to preprocess files as you require() or “load” them.
        // Loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle frontend build steps.
        loaders: [
            {
                loader: "babel-loader",

                // Skip any files outside of your project's `src` directory
                include: [
                    path.join(__dirname, "../src"),
                ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,
            }
        ]
    },
    plugins:   [
        new webpack.HotModuleReplacementPlugin(), // Hot reloading
        new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors

        // Declare global variables
        new webpack.ProvidePlugin({
            React:    'react',
            ReactDOM: 'react-dom',
            //_:        'lodash'
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash:     false
        })
    ]
};
