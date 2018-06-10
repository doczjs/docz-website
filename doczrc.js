import * as path from 'path'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
  title: 'Docz',
  description: 'It has never been so easy to document your things',
  theme: 'theme/index',
  propsParser: false,
  mdPlugins: [externalLinks.default],
  modifyBundlerConfig: config => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@fonts': `${PUBLIC}/fonts`,
      '@images': `${PUBLIC}/images`,
      '@components': `${SRC}/theme/components`,
      '@styles': `${SRC}/theme/styles`,
    })

    config.plugins.push(
      new FaviconsWebpackPlugin({
        logo: `${PUBLIC}/images/favicon.png`,
        inject: true,
      })
    )

    return config
  },
}
