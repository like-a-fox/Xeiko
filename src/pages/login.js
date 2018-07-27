import React, { Component } from 'react'
import { auth } from '../firebase'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Banner from '../components/Banner'


const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  
  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };
  
  class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE };
    }
  
    onSubmit = (event) => {
      const {
        email,
        password,
      } = this.state;
  
      const {
        history,
      } = this.props;
  
      auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(updateByPropertyName('error', error));
        });
  
      event.preventDefault();
    }
  
    render() {
      const {
        email,
        password,
        error,
      } = this.state;
  
      const isInvalid =
        password === '' ||
        email === '';
  
      return (
        <div className="login-is-visible">
<Helmet>
        <title>Login Ass Hole</title>
        <meta name="description" content="Log In" />
       
    </Helmet>
    <Banner />
<div id="main">
<section id="login">
<div className="inner login-block">

        <div className="login-title">
        Log In Stupid</div>
    
        <form className="register" onSubmit={this.onSubmit}>
          <input
            value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
          
          <input disabled={isInvalid} type="submit" />

  
          { error && <p>{error.message}</p> }
        </form>
        <ul className="links">
        <li><Link to="/">Back Home?</Link></li>
        <li><Link to="/register">Sign Up Idiot</Link></li>
        </ul>
        </div>
        </section>
</div></div>
    

      
      );
    }
  }
  
  export default Login
  