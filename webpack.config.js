var webpack = require('webpack');
var dotenv = require('dotenv').config();
var configurator = require('@dosomething/webpack-config');

var config = configurator({
  entry: {
    'app': './resources/assets/app.js'
  },
});

// Override output path.
config.output.path = './public/dist';

// Expose Service URLs
config.plugins.push(
  new webpack.DefinePlugin({
    'services': {
      'GLADIATOR_URL': JSON.stringify(process.env.GLADIATOR_URL),
      'NORTHSTAR_URL': JSON.stringify(process.env.NORTHSTAR_URL),
      'PHOENIX_URL': JSON.stringify(process.env.PHOENIX_URL),
      'PHOENIX_LEGACY_URL': JSON.stringify(process.env.PHOENIX_LEGACY_URL),
    }
  })
);

module.exports = config;
