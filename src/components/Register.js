import React, {Component} from 'react';
import {auth, db} from '../firebase';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import createHistory from "history/createBrowserHistory"



const updateByPropertyName = (propertyName, value) => () => ({[propertyName]: value});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ...INITIAL_STATE
    };
    
  }
  

  onSubmit = (event) => {
    const {username, email, passwordOne} = this.state;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db
          .doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            doSignInWithEmailAndPassword(email, passwordOne)
          })
          .then(() => {
            this.setState(() => ({
              ...INITIAL_STATE
            }));
            
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
    const {username, email, passwordOne, passwordTwo, error} = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || username === '' || email === '';
    const props = this.props
    return (
      <div className="register">
         
            <div href="javascript:;" onClick={props.onToggleMenu} className=" register-title">
          Be Part Of The Club?
        </div>
        
        <form className="register-form" onSubmit={this.onSubmit}>
          <input
            value={username}
            onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
            type="text"
            placeholder="Full Name"/>
          <input
            value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"/>
          <input
            value={passwordOne}
            onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"/>
          <input
            value={passwordTwo}
            onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"/>
          <input disabled={isInvalid} type="submit" className="special fit button"/> {error && <p>{error.message}</p>}
        </form>
        <ul className="links">
          <li>
            <a href="javascript:;" className=" special fit button" onClick={props.onToggleLogin}>Login.. Hurry!</a>
          </li>
          <li>
            <a href="javascript:;" onClick={props.onToggleRegister} className=" special fit button">
          Or Go Home
        </a>
        </li>
        </ul>
      </div>
    );
  }
}

Register.propTypes = {
  onToggleLogin: React.PropTypes.func,
  onToggleRegister: React.PropTypes.func
}

export default Register;
