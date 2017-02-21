var config  = require('./webpack.config'),
    webpack = require('webpack')

webpack(config,function(err, stats){
    process.stdout.write(stats.toString({
        colors: true,
        modules: true,
        children: true,
        chunks: true,
        chunkModules: true
    }) + '\n')
})