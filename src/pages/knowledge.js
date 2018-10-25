import React from 'react'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import Js from '../images/language-javascript.svg'
import Ionic from '../images/ionic.svg'
import Angular from '../images/angular.svg'
import NodeJs from '../images/nodejs.svg'
import CssThree from '../images/css3.svg'
import Sass from '../images/sass.svg'
import Ani from '../images/animations.svg'
import Wp from '../images/wordpress.svg'
import Php from '../images/php.svg'
import Jq from '../images/jquery.svg'
import Ruby from '../images/ruby.svg'
import Rails from '../images/rails.svg'

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  svg {
    width: 100px !important;
    height: 100px !important;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`
const rotateBackwards = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-359deg);
  }
`

const Item = styled.li`
  padding: 3.5rem;
  font-family: 'Metropolis Semi Bold';
  position: relative;
  text-transform: uppercase;
  transform: translateZ(0) skew(-10deg);
  margin: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  @media all and (max-width: 990px) {
    width: 90%;
  }
  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: #ff0099;
    background-image: linear-gradient(45deg, #3023ae 0%, #ff0099 100%);
    top: 0;
    left: 0;
    margin: auto;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    z-index: -1;
    animation: ${rotate} 10s infinite linear;
    opacity: 0.5;
  }
  &:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: #ff0099;
    background-image: linear-gradient(45deg, #3023ae 0%, #ff0099 100%);
    top: 0;
    left: 0;
    margin: auto;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    z-index: -1;
    animation: ${rotateBackwards} 10s infinite linear;
    opacity: 0.5;
  }
`

const Knowledge = () => (
  <Layout>
    <div className="container">
      <StyledList>
        <Item>
          <Js />
          <p>Javscript</p>
        </Item>
        <Item>
          <Ionic />
          <p>Ionic Framework</p>
        </Item>
        <Item>
          <Angular />
          <p>Angular</p>
        </Item>
        <Item>
          <NodeJs />
          <p>NodeJs</p>
        </Item>
        <Item>
          <CssThree />
          <p>CSS</p>
        </Item>
        <Item>
          <Sass />
          <p>SCSS/SASS</p>
        </Item>
        <Item>
          <Ani />
          <p>Animations</p>
        </Item>
        <Item>
          <Wp />
          <p>Wordpress</p>
        </Item>
        <Item>
          <Php />
          <p>Wordpress</p>
        </Item>
        <Item>
          <Jq />
          <p>jQuery</p>
        </Item>
        <Item>
          <Ruby />
          <p>Ruby</p>
        </Item>
        <Item>
          <Rails />
          <p>Ruby on Rails</p>
        </Item>
      </StyledList>
    </div>
  </Layout>
)

export default Knowledge
