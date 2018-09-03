import * as React from 'react'
import styled from 'react-emotion'
import { Link } from 'docz'

import { Container as BaseContainer } from '@components/ui'
import magicWand from '@images/icons/magic-wand.svg'
import settings from '@images/icons/settings.svg'
import plug from '@images/icons/plug.svg'
import rocket from '@images/icons/rocket.svg'
import mdx from '@images/icons/mdx.svg'
import typescript from '@images/icons/typescript.svg'

const Container = styled(BaseContainer)`
  display: flex;
  flex-wrap: wrap;
  padding: 80px 0;
  ${p =>
    p.theme.mq({
      padding: ['25px 0', '25px 0', '25px 0', '80px 0'],
    })};
`

const FeatureItem = styled('div')`
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${p =>
    p.theme.mq({
      width: ['100%', '50%', '33%', '33%'],
      padding: ['0 10px', '0 20px', '0 20px', '0 30px']
    })};
`

const Image = styled('img')`
  height: 70px;
  margin-bottom: 20px;
`

const Title = styled('h3')`
  padding: 0;
  margin: 0;
  font-family: 'Zilla Slab';
  font-size: 30px;
  font-weight: 300;
  letter-spacing: -0.02em;
`

const Text = styled('p')`
  padding: 0;
  margin: 20px 0 0;
`

export const Features = () => (
  <Container>
    <FeatureItem>
      <Image src={magicWand} />
      <Title>Zero config</Title>
      <Text>
        No worrying about complex configuration settings to build and run your documentation. With docz you can init your app with just a single command.
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={rocket} />
      <Title>Really Blazing Fast</Title>
      <Text>
        Docz uses Webpack 4 under the hood, optimized for lightning fast dev servers and build times, so you can focus on writing your docs!
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={settings} />
      <Title>Easy to customize</Title>
      <Text>
        Easily create and modify <Link to="/themes">themes</Link> for your documentation website, just like the one you see here!
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={mdx} />
      <Title>Based on MDX</Title>
      <Text>
        MDX is <i>Markdown + JSX</i>, bringing the world of components to Markdown. MDX makes it possible to import and use your components in a Markdown-style file. Docz fully leverages this, and provides many built-in components that augment and speed up your documentation workflow.
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={plug} />
      <Title>Fully pluggable</Title>
      <Text>
        Plugins have always been a great way to allow for functional, flexible and optimized applications. In docz, you can use them to hook into the docz dataflow. Have a look at our <Link to="/plugins">existing plugins</Link>, or create your own plugins to help you build awesome docs!
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={typescript} />
      <Title>TypeScript support</Title>
      <Text>
        Docz provides full, native TypeScript support for your TSX components and custom types. In fact, all docz packages are built using TypeScript. Check out the <Link to="/documentation/components-api">API section</Link> for more information.
      </Text>
    </FeatureItem>
  </Container>
)
