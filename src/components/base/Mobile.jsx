import React, { Component } from 'react'
import Base from './Base';
import Socials from "./../utils/socials/Socials";
import './Mobile.css'

export class Mobile extends Component {

  componentDidMount() {
    this.props.fullScreen(true)
  }

  componentWillUnmount() {
    this.props.fullScreen(false);
  }
  
  render() {
    return (
      <div id='mobile'>
        <Base menu={this.props.menu} />
        <Socials />
      </div>
    )
  }
}

export default Mobile
