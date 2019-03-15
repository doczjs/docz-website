import * as React from 'react'

import { BaseStyle } from './base'
import { GithubBtnStyle } from './github-button'
import { PrismStyle } from './prism-theme'

export const Global = () => (
  <React.Fragment>
    <BaseStyle />
    <GithubBtnStyle />
    <PrismStyle />
  </React.Fragment>
)
