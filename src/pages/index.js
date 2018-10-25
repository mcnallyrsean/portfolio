import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledSpan = styled.span`
  position: relative;
  transform: skew(-10deg);
  display: inline-block;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background: -webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);
    background: linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);
  }
`

const IndexPage = () => (
  <Layout>
    <div className="banner">
      <h1 style={{ fontFamily: 'Metropolis Bold', lineHeight: '3rem' }}>
        Hi my name is <StyledSpan>Sean McNally.</StyledSpan> I'm a full stack
        developer from Chicago, Illinois. Let me build cool stuff for you.
      </h1>
    </div>
  </Layout>
)

export default IndexPage
