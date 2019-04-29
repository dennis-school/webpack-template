var webpack = require('webpack');
const path = require( 'path' );
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = [ {
    entry: './src/client/index.ts',
	mode: 'development',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'public_html', 'script' )
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
          '@m': path.resolve(__dirname, 'src/modules/')
        }
    },
    node: {
      util: false
    }
}]
