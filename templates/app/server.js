import webpack       from 'webpack';
import webpackServer from 'webpack-dev-server';
import config        from './config';

new webpackServer(webpack(config),{
  publicPath:  config.output.publicPath,
  contentBase: 'dist/',
  progress:    true,
  hot:         true,
  colors:      true,
  open:        true,
  stats:       {colors: true}
}).listen(8080,'localhost',(err,res)=>console.log(err?err:'Server started.'));
