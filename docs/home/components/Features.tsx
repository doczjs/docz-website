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
      <Title>Zero Config</Title>
      <Text>
        Don't worry about complex configuration setups to build and run your documentation. With docz you can just init your app with a single command.
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={rocket} />
      <Title>Really Blazing Fast</Title>
      <Text>
        Docz uses Webpack 4 with a lot of techniques. With a really fast dev server and build, you don't need to worry about anything other than writing your docs!
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={settings} />
      <Title>Easy to customize</Title>
      <Text>
        With docz you can easily create and modify <Link to="/themes">themes</Link> for your documentation site. Like this website that you're looking!
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={mdx} />
      <Title>MDX Based</Title>
      <Text>
        MDX is <i>Markdown + JSX</i>. It brings the world of components into markdown. MDX makes it possible to import and use your components in a markdown-style file. To help you, docz has a lot of built-in components that can improve and accelerate your documentation process.
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={plug} />
      <Title>Fully pluggable</Title>
      <Text>
        Plugins are one of the oldest and best ways to make an application functional, flexible and optimized. With plugins, you can manipulate a lot of things through the docz flow and data. You can easily use or create some really cool stuff to help you to build your docs!
      </Text>
    </FeatureItem>
    <FeatureItem>
      <Image src={typescript} />
      <Title>Typescript Support</Title>
      <Text>
        Docz provides a native TypeScript support if you want to use your TSX components, and all docz packages were built entirely around typescript. So we have a full support for your type if you like to write typescript files. You can see more about your typing in your API section.
      </Text>
    </FeatureItem>
  </Container>
)
