const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore CSS order conflicts
      const plugin = webpackConfig.plugins.find(
        (p) => p.constructor.name === 'MiniCssExtractPlugin'
      );
      if (plugin) plugin.options = { ...plugin.options, ignoreOrder: true };
      return webpackConfig;
    },
  },
};
