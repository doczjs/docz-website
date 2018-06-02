import * as path from 'path'
import { createPlugin } from 'docz-core'

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

export default {
  theme: 'theme/index',
  plugins: [setAlias()],
}
