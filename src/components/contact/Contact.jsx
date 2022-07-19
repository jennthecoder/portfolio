import React, { Component } from "react";
import Form from "../utils/form/Form";
import "./Contact.css";

export class Contact extends Component {
  componentDidMount() {
    this.props.activeMenu(2);
  }

  render() {
    return (
      <div className='contact'>
        <Form />
      </div>
    );
  }
}

export default Contact;
