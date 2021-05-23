const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './build',
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
			template: path.resolve(__dirname, 'public', 'index.html'),
			favicon: './public/favicon.ico',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /[\\/]node_modules[\\/]/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				exclude: /[\\/]node_modules[\\/]/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|PNG|svg|jpe?g|gif|ico)$/i,
				exclude: /[\\/]node_modules[\\/]/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
};
