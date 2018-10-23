import React from 'react'
import { Link } from 'gatsby'
import './nav.styl'

const Nav = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/knowledge">Knowledge Base</Link>
        </li>
        <li>
          <Link to="/work">Work Samples</Link>
        </li>
        <li>
          <Link to="#">Resume</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Nav
