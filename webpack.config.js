var webpack = require('webpack'),
    path = require('path')
module.exports = {
    entry:{
        main:'./main.js',
       // main2:'./main2.js'
    },
	plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true
        // })
	],
    
    output:{
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
};