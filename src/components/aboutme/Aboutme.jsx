import React, { Component } from "react";
import "./Aboutme.css";
export class Aboutme extends Component {
    componentDidMount() {
        this.props.activeMenu(2);
    }

    render() {
        return (
            <div className="aboutme">
                <h2> Who I am</h2>
                <p>
                I am a self-taught developer who discovered my passion for programming in my last year of university when I accidentally stumbled into the Google chrome inspect tool.
I was fascinated and started researching more. I possess over five years of experience in customer success, operations management, and project management.
I have completed the App-academy open Bootcamp, which focuses on Javascript, OOP, Data structure & algorithms, React, and back-end development (node and Python).
                </p>
                <h2> What I am looking for </h2>
                <p> I am curious and self-disciplined, so I am searching for a company where I have the space to expand my skillset working on interesting projects with a collaborative team. </p>
            </div>
        );
    }
}

export default Aboutme;
