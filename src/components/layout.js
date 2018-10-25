import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header/header'
import favicon from '../images/favicon.ico'

import './layout.css'
import '../../styles/fonts.styl'
import '../../styles/html.styl'

const McNallyContainer = styled.div`
  padding: 5rem;
  display: flex;
  align-items: center;
  width: calc(100% - 30vw);
  min-height: 100vh;
  margin-left: auto;
  font-family: 'Metropolis Medium';
  position: relative;
  @media all and (max-width: 568px) {
    width: 100%;
    padding: 2.5rem;
    margin-top: 20vh;
    min-height: calc(100vh - 200px);
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />

        <McNallyContainer>{children}</McNallyContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
