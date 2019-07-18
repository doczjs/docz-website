import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'docz'

import { Container } from '@components/ui'
import magicWand from '@images/icons/magic-wand.svg'
import gatsby from '@images/icons/gatsby.svg'
import settings from '@images/icons/settings.svg'
import plug from '@images/icons/plug.svg'
import rocket from '@images/icons/rocket.svg'
import mdx from '@images/icons/mdx.svg'
import typescript from '@images/icons/typescript.svg'

const ListItems = styled.div`
  display: grid;
  justify-content: center;

  ${p =>
    p.theme.mq({
      margin: ['30px 0', '60px 0'],
      gridGap: ['30px', '60px'],
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 0.8fr)',
      ],
    })}
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;

  ${p =>
    p.theme.mq({
      padding: ['0 10px', '0 20px', '0 20px', '0 30px'],
      flexDirection: ['column', 'row'],
      textAlign: ['center', 'left'],
    })};
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  height: 100px;

  ${p =>
    p.theme.mq({
      margin: ['0 0 30px', '0 40px'],
    })}
`

const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-family: 'Zilla Slab';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.02em;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
`

export const Features = () => (
  <Container>
    <ListItems>
      <FeatureItem>
        <Image src={gatsby} />
        <Info>
          <Title>Powered by Gatsby</Title>
          <Text>
            Docz since the v2 is entirely built using Gatsby under the hood,
            optimised for a lightning fast dev experience and build times and
            with a huge ecosystem of plugins and tools.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={magicWand} />
        <Info>
          <Title>Zero config</Title>
          <Text>
            No worrying about complex configuration settings to build and run
            your documentation. With Docz you can init your app with just a
            single command.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={settings} />
        <Info>
          <Title>Easy to customize</Title>
          <Text>
            Using <b>component shadowing</b> you can easily create and modify
            your theme for your documentation website, just like the one you see
            here!
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={mdx} />
        <Info>
          <Title>Based on MDX</Title>
          <Text>
            MDX is <i>Markdown + JSX</i>, bringing the world of components to
            Markdown. MDX makes it possible to import and use your components in
            a Markdown-style file. Docz fully leverages this, and provides many
            built-in components that augment and speed up your documentation
            workflow.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={plug} />
        <Info>
          <Title>Fully pluggable</Title>
          <Text>
            Plugins have always been a great way to allow for functional,
            flexible and optimized applications. In Docz, you can use them to
            hook into the Docz dataflow and use all Gatsby plugins to improve
            your documentation.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={typescript} />
        <Info>
          <Title>TypeScript support</Title>
          <Text>
            Docz provides full, native TypeScript support for your TSX
            components and custom types. In fact, all Docz packages are built
            using TypeScript. Check out the{' '}
            <Link to="/docs/components-api">API section</Link> for more
            information.
          </Text>
        </Info>
      </FeatureItem>
    </ListItems>
  </Container>
)
