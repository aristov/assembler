const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const env = process.env;
const plugins = [];

if(env.MIN) {
    if(env.ES6) throw Error('Minification requires transpiling to ES5');
    const uglifyjsOptions = {
        compress : { warnings : false },
        mangle : { keep_fnames : true },
        comments : false
    };
    const uglifyjsPlugin = new webpack.optimize.UglifyJsPlugin(uglifyjsOptions);
    plugins.push(uglifyjsPlugin);
}

module.exports = {
    entry : env.DOCS? {
        shim : ['./shim'],
        index : ['./docs'],
        spec : ['./lib/index.spec']
    } : {
        shim : ['./shim'],
        htmlmodule : ['./lib'],
        'window.htmlmodule' : ['./lib/window.htmlmodule']
    },
    output : {
        path : path.join(__dirname, '/dist'),
        filename : env.MIN? 'dist.[name].min.js' : 'dist.[name].js',
        pathinfo : !env.MIN
    },
    module : {
        loaders : [
            env.ES6?
                { test : /\.js$/, loader : 'babel?plugins[]=transform-es2015-modules-commonjs' } :
                { test : /\.js$/, loader : 'babel?presets[]=es2015' },
            { test : /\.txt$/, loader : 'raw-loader' },
            { test : /\.css$/, loader : 'style-loader!css-loader!postcss-loader' },
        ]
    },
    plugins,
    resolve : { modulesDirectories : ['node_modules'] },
    postcss : () => [autoprefixer],
    watch : Boolean(env.WATCH)
};
