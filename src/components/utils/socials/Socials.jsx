import React, { Component } from "react";
import open from "../../../assets/svgs/open.svg";
import "./Socials.css";

export default class Socials extends Component {
    render() {
        return (
        <div class="footer">
        <div className='social'>
            <a
              href='https://github.com/thejennify'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i> Github
              <img src={open} alt='pointer' />
            </a>

            <a
              href='https://linkedin.com/in/ifeomajnnadi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i> LinkedIn {" "}
              <img src={open} alt='pointer' />
            </a>
          </div>
    </div>
    )
    }
}
