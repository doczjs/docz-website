const path = require('path')
const { createPlugin } = require('docz-core')

const setAlias = () =>
  createPlugin({
    modifyBundlerConfig: config => {
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        '@images': path.resolve(__dirname, 'src/images'),
        '@components': path.resolve(__dirname, 'src/theme/components'),
        '@styles': path.resolve(__dirname, 'src/theme/styles'),
      })

      return config
    },
  })

module.exports = {
  theme: 'theme/index',
  plugins: [setAlias()],
}
