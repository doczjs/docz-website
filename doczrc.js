import * as path from 'path'
import { createPlugin } from 'docz-core'

const setAlias = () =>
  createPlugin({
    modifyBundlerConfig: config => {
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        '@fonts': path.resolve(__dirname, 'public/fonts'),
        '@images': path.resolve(__dirname, 'public/images'),
        '@components': path.resolve(__dirname, 'src/theme/components'),
        '@styles': path.resolve(__dirname, 'src/theme/styles'),
      })

      return config
    },
  })

export default {
  title: 'Docz',
  description: 'It has never been so easy to document your things',
  theme: 'theme/index',
  plugins: [setAlias()],
}
