import './styles/prism-theme'
import './styles/base'

import * as React from 'react'
import { theme, ThemeConfig, DocPreview } from 'docz'
import { ThemeProvider } from 'emotion-theming'

import { config } from './config'
import { Topbar, Main } from '@components/shared'
import * as components from '@components/ui'

const Theme = () => (
  <ThemeConfig>
    {config => (
      <ThemeProvider theme={config}>
        <Main>
          <Topbar />
          <DocPreview
            components={{
              page: components.Page,
              loading: components.Loading,
              h1: components.H1,
              h2: components.H2,
              h3: components.H3,
              h4: components.H4,
              h5: components.H5,
              h6: components.H6,
              hr: components.Hr,
              img: components.Image,
              ul: components.List,
              pre: components.Pre,
              inlineCode: components.Code,
              blockquote: components.Blockquote,
            }}
          />
        </Main>
      </ThemeProvider>
    )}
  </ThemeConfig>
)

export default theme(Theme, config)
