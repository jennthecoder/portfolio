import React, { Component } from "react";
import {Link } from 'react-router-dom';
import "./Base.css";
import navLine from "../../assets/svgs/menu-line.svg";
import Socials from "../utils/socials/Socials.jsx";


export class Base extends Component {
  render() {
    return (
      <div className='base_container'>
        <div className='hero'>
          <div className='intro_box'>
            <h1>
              Hello! I'm <br/> Jennifer Nnadi.
            </h1>
          </div>

          <div className='description'>
            <p>
              <span>
                I'm a <span className='highlight'> Software Developer </span>
                based in <span className='highlight'> Toronto </span>, Canada.
                My primary focus is Frontend Development with
                <span className='highlight'> Javascript </span>
                <span className='highlight'> React </span>
              </span>
              <span>
                to create exceptional user experience. I enjoy problem solving and creating solutions with code.
              </span>
            </p>
          </div>
        </div>

        <nav>
          <ul>
            <li className={this.props.menu[0]}>
              <small>
                <Link to='/'>
                  00
                  <img src={navLine} alt='menu bullet' /> PROJECTS
                </Link>
              </small>
            </li>

            <li className={this.props.menu[1]}>
              <small>
                <Link to='/contact'>
                  01
                  <img src={navLine} alt='menu bullet' /> CONTACT
                </Link>
              </small>
            </li>

            <li className={this.props.menu[2]}>
              <small>
                <Link to='/aboutme'>
                  02
                  <img src={navLine} alt='menu bullet' /> ABOUT ME
                </Link>
              </small>
            </li>
          </ul>
        </nav>

        <Socials />
      </div>
    );
  }
}

export default Base;
