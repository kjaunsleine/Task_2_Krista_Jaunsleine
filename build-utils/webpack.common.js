const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    theme: path.resolve(__dirname, "../","resources/theme.js"),
    googleMaps: path.resolve(__dirname, "../","resources/js/googleMaps.js")
  },
  output: {
    path: path.resolve(__dirname, "../", "assets/"),
    filename: "[name].js",
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../", "assets/"),
    watchContentBase: true,
    compress: true,
    port: 9000,
    open: true,
    clientLogLevel: 'warning'
  },
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new CleanWebpackPlugin(
    	['assets'],
    	{
  			root:     path.resolve(__dirname, "../"),
  			verbose:  true
  		}
  	),
    new CopyWebpackPlugin(
    	[
    		{
    			from: 'resources/vendor/modernizr-3.6.0-custom.min.js',
    			to: 'js/'
    		},
        {
          from: 'resources/vendor/cookieconsent.min.js',
          to: 'js/'
        }
    	],
    	{ debug: 'debug' }
    ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'resources/index.html',
      inject: true,
      chunks: ['theme']
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'resources/404.html',
      inject: true,
      chunks: ['theme']
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy-policy.html',
      template: 'resources/privacy-policy.html',
      inject: true,
      chunks: ['theme']
    }),
    new HtmlWebpackPlugin({
      filename: 'ideja.html',
      template: 'resources/ideja.html',
      inject: true,
      chunks: ['theme']
    }),
    new HtmlWebpackPlugin({
      filename: 'piesaki-sapni.html',
      template: 'resources/piesaki-sapni.html',
      inject: true,
      chunks: ['theme']
    }),
    new HtmlWebpackPlugin({
      filename: 'uznemejiem.html',
      template: 'resources/uznemejiem.html',
      inject: true,
      chunks: ['theme']
    }),
    new HtmlWebpackPlugin({
      filename: 'sapnu-banka.html',
      template: 'resources/sapnu-banka.html',
      inject: true,
      chunks: ['theme']
    }),
    new HtmlWebpackPlugin({
      filename: '99iedvesmas-stasti.html',
      template: 'resources/99iedvesmas-stasti.html',
      inject: true,
      chunks: ['theme']
    }),
    new HtmlWebpackPlugin({
      filename: 'sapnus-atbalsta.html',
      template: 'resources/sapnus-atbalsta.html',
      inject: true,
      chunks: ['googleMaps', 'theme']
    }),
    new MiniCssExtractPlugin({
      filename: "./css/style.css"
    }),
    new FaviconsWebpackPlugin({
    	logo: './resources/img/favicon.png',
    	prefix: 'images/',
      cache: false,
    	icons: {
	      android: false,
	      appleIcon: false,
	      appleStartup: false,
	      coast: false,
	      favicons: true,
	      firefox: false,
	      opengraph: false,
	      twitter: false,
	      yandex: false,
	      windows: false
	    }
    })
  ],
  module: {
  	rules: [
      {
        test: /\.html$/,
        use: ['html-loader?interpolate']
      },
      {
        test: /\.(png|jpg|svg|gif|mp4)$/,
        exclude: path.resolve(__dirname, "../", "resources/fonts/"),
        use: [
          {
            loader: 'file-loader',
            options: {
            	name: '[name].[ext]',
            	outputPath: './images/'
            }
          }
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: path.resolve(__dirname, "../", "resources/img/"),
        use: [
	        {
	          loader: "file-loader",
	          options: {
	            name: "[name].[ext]",
	            outputPath: "./fonts/"
	          }
	        }
        ]
  	  },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            } 
          },
          { loader: "css-loader" },
          {
          	loader: "postcss-loader",
          	options: {
          		ident: "postcss",
          		plugins: (loader) => [
          			require('postcss-easing-gradients'),
          			require('autoprefixer')({
			            browsers: [
				            '> 1%',
				            'last 2 versions',
				            'IE 10',
				            'IE 11'
			            ],
			            cascade: false
          			})
          		]
          	}
          },
          { loader: "sass-loader" }
        ]
      }
  	]
  }
};

module.exports = config;