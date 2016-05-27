'use strict';

module.exports = {
    entry : './index',
    output : {
        path: __dirname + '/dist',
        filename : 'bundle.js'
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader : 'babel?presets[]=es2015'
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    watch : true
};
