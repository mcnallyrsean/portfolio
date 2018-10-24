import React from 'react'
import styled, { keyframes } from 'styled-components'

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
  padding: 5rem;
  font-family: 'Metropolis Semi Bold';
  position: relative;
  text-transform: uppercase;
  transform: translateZ(0) skew(-10deg);
  margin: 2.5rem 1rem;
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
  &:hover {
    cursor: pointer;
  }
`

const BlobContent = styled.div`
  width: 70vw;
  height: calc(100% - 10px);
  top: 0;
  left: 30vw;
  margin: auto;
  position: fixed;
  transform: translate3d(100%, 0, 0);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 10;
  padding: 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #ff0099;
    background-image: linear-gradient(45deg, #3023ae 0%, #ff0099 100%);
    opacity: 0.95;
    z-index: -1;
  }
  &.active {
    transform: none;
  }
  .exit {
    position: absolute;
    left: 2.5rem;
    top: 2.5rem;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
  .image-container {
    position: relative;
    display: inline-block;
    &:before {
      opacity: 0;
      position: absolute;
      content: 'Check it out!';
      height: 100%;
      width: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s linear;
      z-index: 999;
      color: white;
      transform: translateZ(0) skew(-10deg);
      text-transform: uppercase;
      font-family: 'Metropolis Semi Bold';
    }
    img {
      transition: all 0.3s ease-in;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
    &:hover {
      &:before {
        opacity: 1;
      }
      img {
        opacity: 0.25;
      }
    }
  }
`

class Blob extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }
  activeBlob = () => {
    this.setState(state => ({
      active: !state.active,
    }))
  }

  render() {
    return (
      <div>
        <Item onClick={this.activeBlob}>{this.props.name}</Item>
        <BlobContent className={this.state.active ? 'active' : ''}>
          <a
            href={this.props.url}
            target="_blank"
            rel="nofollow"
            className="image-container"
          >
            <img src={this.props.screenshot} alt="" />
          </a>
          <div className="exit" onClick={this.activeBlob}>
            &times;
          </div>
          <p>Designer: {this.props.designer}</p>
          <p>My Role: {this.props.myRole}</p>
          <p>Tech Used: {this.props.tech}</p>
          <p>Built for Clique Studios</p>
        </BlobContent>
      </div>
    )
  }
}

export default Blob
