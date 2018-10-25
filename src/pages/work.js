import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Blob from '../components/blob/blob'
import milehigh from '../images/milehigh.png'
import urbanbelly from '../images/urbanbelly.png'
import mcds from '../images/mcds.png'

const samples = [
  {
    name: 'McDonalds',
    screenshot: mcds,
    url: 'https://itunes.apple.com/us/app/wwc-2018/id1342757682?mt=8',
    designer: 'Austin Golownia',
    myRole: 'Frontend',
    tech: 'Ionic, Angular, SCSS',
  },
  {
    name: 'Urbanbelly',
    screenshot: urbanbelly,
    url: 'https://www.urbanbellychicago.com/',
    designer: 'Sue Janna Truscott',
    myRole: 'Frontend + Backend',
    tech: 'Javascript, CSS, Wordpress',
  },
  {
    name: 'Mile High',
    screenshot: milehigh,
    url: 'https://www.milehighgolftrail.com/',
    designer: 'Sue Janna Truscott',
    myRole: 'Frontend + Backend',
    tech: 'Javascript, CSS, Wordpress',
  },
]
const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media all and (max-width: 568px) {
    margin: 0;
  }
`
class Work extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Layout>
          <div className="container">
            <List>
              {samples.map(sample => (
                <Blob
                  key={sample.name}
                  screenshot={sample.screenshot}
                  name={sample.name}
                  url={sample.url}
                  designer={sample.designer}
                  myRole={sample.myRole}
                  tech={sample.tech}
                />
              ))}
            </List>
          </div>
        </Layout>
      </div>
    )
  }
}
export default Work
