const webpack = require('webpack');
const merge = require('webpack-merge');
const pkg = require('./package.json');

module.exports = function (config) {
  config.plugins.push(
    new webpack.DefinePlugin({
      AppVersion: JSON.stringify(pkg.version),
    })
  );
  return merge(config, {
    mode: 'production',
    optimization: {
      splitChunks: {
        cacheGroups: {
          large_files: {
            // Every module that is imported from src\LogAnalyticsPortalWebRole\Scripts\app\app-index.ts dependency tree will enter name function.
            test: /largefiles/,
            name(module) {
              return 'largefiles';
            },
            maxSize: 60000,
            minSize: 40000,
          },
        },
      },
    },
  });
};
