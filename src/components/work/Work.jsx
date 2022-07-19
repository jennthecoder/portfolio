import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Project from "../utils/project/Project";
import uuid from "react-uuid";

export class Work extends Component {
  state = {
    projects: [
      {
        id: uuid(),
        title: "Netflix clone",
        description: "Replica of Netflix",
        github: "https://github.com/thejennify/netflix-clone",
        live: "https://tranquil-dusk-49142.herokuapp.com/",
        stack: "React, styled-components, scss, firebase",
        isPrivate: false,
      },
      {
        id: uuid(),
        title: "Jennify.dev",
        description: "My Portfolio Site",
        github: "",
        live: "https://jennify.dev",
        stack: "React",
        isPrivate: false,
      },
      {
        id: uuid(),
        title: "HomeAway",
        description: "short term rental portal inpired by airbnb",
        github: "https://github.com/thejennify/homeaway",
        live: "https://homeaway-home.herokuapp.com/listings",
        stack: "Vanilla JS, Espress, HTML, CSS",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Fast checkout",
        description: "E-commerce store",
        github: "https://github.com/thejennify/fast-checkout",
        live: "https://thejennify.github.io/fast-checkout/",
        stack: "React",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "customerPay",
        description: "Debt/Store management web application",
        github: "",
        live: "https://customerpay.me/",
        stack: "Bootstrap + Javascript + Laravel",
        isPrivate: false,
        },
    ],
  };

  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {
    return (
      <div className='work'>
        <div className='portfolio_showcase'>
          {this.state.projects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
