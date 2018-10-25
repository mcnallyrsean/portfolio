import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledHeader = styled.h2`
  transform: skew(-10deg);
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  &:after {
    position: absolute;
    content: '';
    bottom: -5px;
    left: 0;
    height: 5px;
    width: 100%;
    background: -webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);
    background: linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);
  }
`

const Resume = () => (
  <Layout>
    <div className="container">
      <div className="resume-block">
        <StyledHeader>Experience</StyledHeader>
        <div className="resume-block__item">
          <h3>Clique Studios - Engineer</h3>
          <p>DECEMBER 2016 - PRESENT</p>
          <p>
            Led front end development on custom Ionic app built for a
            multinational, Fortune 500 corporation | Acted as a full-stack
            engineer, specializing in front end builds for Wordpress and Laravel
            frameworks | Balanced deliverables for numerous client projects in a
            high volume, deadline driven agency environment | Well versed at
            custom feature implementation, including CSS and SVG animations
          </p>
        </div>
        <div className="resume-block__item">
          <h3>Wellington West Webdesign - Engineer</h3>
          <p>MARCH 2016 - DECEMBER 2016</p>
          <p>
            Founded freelance web development firm focusing on agency and
            corporate clients | Created a WebVR template for an agency client
            using Mozilla’s A-Frame framework | Developed custom Wordpress
            themes for various corporate clients | Designed responsive versions
            of websites which lacked mobile responsiveness
          </p>
        </div>
        <div className="resume-block__item">
          <h3>Anyone Can Have a Website - Engineer</h3>
          <p>JANUARY 2016 - MARCH 2016</p>
          <p>
            Built a full-service web application for a start-up client using
            Rails, PostgreSQL, Heroku, Puma, Twilio
          </p>
        </div>
        <div className="resume-block__item">
          <h3>Village Of West Dundee</h3>
          <p>Administrative Analyst</p>
          <p>JANUARY 2014 - OCTOBER 2015</p>
          <p>
            Oversaw the creation of 2 new municipal taxes | Aided in the
            preparation of the annual Village budget | Assisted with annual
            audit preparation, Accounts Payable, and Police/Fire Pension
            Reporting | Developed a smartphone app geared toward promoting local
            Village businesses through the use of coupons and other special
            deals
          </p>
        </div>
      </div>
      <div className="resume-block">
        <StyledHeader>Education</StyledHeader>
        <div className="resume-block__item">
          <h3>Actualize, Chicago, Illinois</h3>
          <p>Full Stack Development, Software and Web</p>
          <p>2015 - 2016</p>
        </div>
        <div className="resume-block__item">
          <h3>University of Illinois at Chicago</h3>
          <p>Master of Public Administration</p>
          <p>2012 - 2013</p>
        </div>
        <div className="resume-block__item">
          <h3>Illinois State University</h3>
          <p>Bachelor of Science, Political Science </p>
          <p>2006 - 2010</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Resume
