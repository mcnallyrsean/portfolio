import React from 'react'
import { Link } from 'gatsby'
import './nav.styl'

const links = [
  { url: '/knowledge', title: 'Knowledge Base' },
  { url: '/work', title: 'Work Samples' },
  { url: '#', title: 'Resume' },
]

const Nav = () => (
  <div>
    <nav>
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

export default Nav
