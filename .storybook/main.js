const path = require('path')

module.exports = {
  stories: ['../app/**/stories.@(mdx|js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
  staticDirs: ['../public/'],
  webpackFinal: async (config,) => {
    config.resolve.alias = {
       ...config.resolve.alias,
       "@styles": path.resolve(__dirname, "../app/styles/stitches.config",),
     }
     return config;
   }
}

