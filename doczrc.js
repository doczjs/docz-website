import * as path from 'path'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
  title: 'Docz',
  description: 'It has never been so easy to document your things',
  indexHtml: 'src/index.html',
  theme: 'src/theme/index',
  typescript: true,
  propsParser: false,
  mdPlugins: [externalLinks],
  ignore: ['site-map.md', 'readme.md'],
  htmlContext: {
    favicon: '/public/favicon.ico',
  },
  menu: [
    'Home',
    {
      name: 'Introduction',
      menu: [
        'Getting Started',
        'Writting MDX',
        'Customizing',
        'Documenting Your Things',
        'Deploying Your Docs',
      ],
    },
    {
      name: 'Documentation',
      menu: [
        'Components API',
        'Project Configuration',
        'Creating Themes',
        'Creating Plugins',
      ],
    },
    'Plugins',
    'Themes',
  ],
  onCreateWebpackChain: config => {
    config.resolve.alias
      .set('@fonts', `${PUBLIC}/fonts`)
      .set('@images', `${PUBLIC}/images`)
      .set('@components', `${SRC}/theme/components`)
      .set('@styles', `${SRC}/theme/styles`)

    return config
  },
}
