var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//require('./src/index.less');
module.exports = {
	entry: 'src/js/script.js',
	output: {
		path: 'dist/js',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: 'dist',
		port: 3000
	},
	module: {
		// loaders: [
		// 	{
		// 		test: /\.less$/,
		// 		loader: 'style!css!less'
		//   },
      loaders: [{
        test: /\.less$/,
        loader: "css-loader!less-loader"
}]
//	 ]
	}
};


// {
//   test: /\.js$/,
//   exclude: /(node_modules)/,
//   loader: 'babel',
//   query: {
//     presets: ['react', 'es2015']
//   }
// },
// {
//   test: /\.(png|jpg)$/,
//   loader: 'url-loader?limit=10000'
// }
