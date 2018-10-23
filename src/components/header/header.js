import React from 'react'
import { Link } from 'gatsby'
import Nav from '../nav/nav'
import './header.styl'

const Header = ({ siteTitle }) => (
  <div>
    <header>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '5rem',
            border: '2.5px solid white',
            borderRadius: '50%',
            padding: '4vh',
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
