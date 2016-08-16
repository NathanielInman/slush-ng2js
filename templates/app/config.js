import webpack       from 'webpack';
import commonsChunk  from 'webpack/lib/optimize/CommonsChunkPlugin';
import uglifyWebpack from 'webpack/lib/optimize/UglifyJsPlugin';
import autoprefixer  from 'autoprefixer';
import poststylus    from 'poststylus';

export default {
  watch: true,
  entry:{
    app: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server',
      './src/app/app.js'
    ],
    vendor: [
      'zone.js/dist/zone',
      'zone.js/dist/long-stack-trace-zone',
      'reflect-metadata',
      '@angular/platform-browser-dynamic',
      '@angular/platform-browser',
      '@angular/http',
      '@angular/router',
      '@angular/core',
      '@angular/compiler',
      '@angular/common'
    ]
  },
  devtool: 'source-map',
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new commonsChunk('vendor') /*,
    new uglifyWebpack({minimize: true,mangle: false}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })*/
  ],
  output:{
    path: '/dist',
    publicPath: '/dist',
    filename:'[name].js',
    library: 'app',
    libraryTarget: 'this'
  },
  module:{
 /*   preLoaders: [
      {test: /\.js$/, loader: 'source-map-loader'}
    ], */
    loaders: [
      {test: /\.js$/,   loaders: ['babel-loader','eslint-loader'], exclude: /node_modules/},
      {test: /\.styl$/, loaders: ['style-loader','css-loader','stylus-loader']},
      {test: /\.jade$/, loader: 'jade'},
      {test: /\.css$/,  loaders: ['style-loader','css-loader']},
      {test: /\.svg$/,  loader: 'url',
        query:{limit: '65000',mimetype: 'image/svg+xml'}},
      {test: /\.woff$/, loader: 'url',
        query:{limit: '65000',mimetype: 'application/font-woff'}},
      {test: /\.woff2$/,loader: 'url',
        query:{limit: '65000',mimetype: 'application/font-woff2'}},
      {test: /\.[ot]tf$/, loader: 'url',
        query:{limit: '65000',mimetype: 'application/octet-stream'}},
      {test: /\.eot$/, loader: 'url',
        query:{limit: '65000',mimetype: 'application/vnd.ms-fontobject'}}
    ]
  },
  stylus: {
    use: [
      poststylus(['autoprefixer'])
    ]
  }
};
