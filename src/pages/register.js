import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import { auth, db } from '../firebase';


const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push('/login');
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
<div className="register-is-visible">
      <Helmet>
      <title>Finally Registering?</title>
      <meta name="description" content="What An Idiot!" />
  </Helmet>
  <Banner />
  <div id="filter"></div>
  <div id="main" className="register-parent">
  <section id="register">
  
  <div className="inner">

    <div className="register-title">Idiot Says What?</div>
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <input disabled={isInvalid} type="submit" />
          

        { error && <p>{error.message}</p> }
      </form>
      <ul className="links">
        <li><Link to="/">Back Home?</Link></li>
        <li><Link to="/login">Login.. Hurry!</Link></li>
        </ul>
      </div>
      </section>
      </div>
      </div>
    );
  }
}

export default Register;
