import React from 'react'
import styled from 'styled-components'
import Email from '../../images/email.svg'
import Twitter from '../../images/twitter.svg'
import Github from '../../images/github.svg'

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-left: 0;
  margin: 0;
  li {
    &:nth-of-type(2) {
      margin: 0 10px;
    }
  }
`

const Contact = () => (
  <div>
    <StyledList>
      <li>
        <a href="mailto:seanmcnally88@gmail.com">
          <Email />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/mcnallyrsean"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/mcnallyrsean"
        >
          <Github />
        </a>
      </li>
    </StyledList>
  </div>
)

export default Contact
