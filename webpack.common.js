module.exports = {
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
