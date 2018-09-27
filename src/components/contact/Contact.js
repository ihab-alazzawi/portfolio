import React, { Component } from 'react';
import '../../assets/styles/Contact.css';
import axios from 'axios';
import { isEmail, isName, isEmpty } from './FormValidation';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      success: '',
      errors: '',
      isEmail: false,
      isName: false,
      isMessage: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: '',
      success: '',
      isEmail: false,
      isName: false,
      isMessage: false
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    // eslint-disable-next-line
    isEmail(email) && name.length < 100
      ? null
      : this.setState({
          isEmail: true
        });
    // eslint-disable-next-line
    isName(name) && name.length < 100
      ? null
      : this.setState({
          isName: true
        });
    if (isEmpty(message) || message.length > 1000) {
      this.setState({
        isMessage: true
      });
      return;
    }

    await axios({
      method: 'post',
      url: 'https://i5etoip6w0.execute-api.us-west-2.amazonaws.com/prod',
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.text
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            success: 'Thank you! Your message has been sent successfully',
            name: '',
            email: '',
            message: ''
          });
          console.log(this.state.success);
        }
      })
      .catch(err => {
        const status = JSON.stringify(err.response.status);
        if (status === '402') {
          this.setState({
            errors: 'Please complete the form before sending.'
          });
          console.log(this.state.errors);
        } else {
          this.setState({
            errors: 'Uh-oh, something went wrong. Please try again.',
            name: '',
            email: '',
            message: ''
          });
          console.log(this.state.errors);
        }
      });
  }
  render() {
    const {
      name,
      email,
      message,
      errors,
      success,
      isEmail,
      isName,
      isMessage
    } = this.state;

    return (
      <div className="contact-main">
        <h1>Contact</h1>
        <p />
        <div id="form-main">
          <div id="form-div">
            <form onSubmit={this.handleSubmit} className="form" id="form1">
              <p className="name">
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                  className={
                    isName ? 'feedback-input invalid' : 'feedback-input'
                  }
                  placeholder="Name"
                  id="name"
                />
              </p>
              {isName ? <p className="invalid-text">Invalid Name</p> : null}
              <p className="email">
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={this.handleChange}
                  className={
                    isEmail ? 'feedback-input invalid' : 'feedback-input'
                  }
                  id="email"
                  placeholder="Email"
                />
              </p>
              {isEmail ? <p className="invalid-text">Invalid Email</p> : null}
              <p className="text">
                <textarea
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  className={
                    isMessage ? 'feedback-input invalid' : 'feedback-input'
                  }
                  id="message"
                  placeholder="Message"
                />
              </p>
              {isMessage ? (
                <p className="invalid-text">Invalid Message content</p>
              ) : null}
              <div className="submit">
                <input type="submit" value="SEND" id="button-big" />
                <div className="ease" />
              </div>
            </form>
            <p className="invalid-submit">{errors}</p>
            <p className="success-submit">{success}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
