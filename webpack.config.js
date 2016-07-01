  var config = {
    entry: './main.js',

     output: {
        path:'./',
        filename: 'index.js',
     },

     devServer: {
        inline: true,
        host: 'iwt.com',
        port: 8080,
     },

     module: {
        loaders: [
           {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel',

              query: {
                 presets: ['es2015', 'react']
              }
           },
           // Used for Bootstrap Less Source Files
             { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
             // Used for Bootstrap Less Source Files
             { test: /\.css/, loader: 'style-loader!css-loader' },
             // Used for Bootstrap Glyphicon Fonts
             { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file-loader' }
        ]
     }
  }

  module.exports = config;
