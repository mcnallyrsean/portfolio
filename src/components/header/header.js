import React from 'react'
import { Link } from 'gatsby'
import Nav from '../nav/nav'
import './header.styl'

const Header = ({ siteTitle }) => (
  <div>
    <header>
      <h1
        style={{
          border: '2.5px solid white',
          borderRadius: '50%',
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            fontSize: '3rem',

            padding: '4vh 3vh',
            transform: 'skew(-10deg)',
          }}
          className="logo"
          alt="Sean McNally"
        >
          SM
        </Link>
      </h1>
      <Nav />
    </header>
  </div>
)

export default Header
