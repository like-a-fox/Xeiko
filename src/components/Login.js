import React, {Component} from 'react'
import {auth} from '../firebase'
import createHistory from "history/createBrowserHistory"




const updateByPropertyName = (propertyName, value) => () => ({[propertyName]: value});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class Login extends Component {
  constructor() {
    super();

    this.state = {
      ...INITIAL_STATE
      
    };
  }

  onSubmit = (event) => {
    const {email, password} = this.state;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({
          ...INITIAL_STATE
        }));
       
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {email, password, error} = this.state;

    const isInvalid = password === '' || email === '';
    const props = this.props
    return (
      <div className="login">
        
          
            <div href="jdivvascript:;" onClick={props.onToggleMenu} className=" login-title">
          Whats The Password?
        </div>
        
        
        

        <form className="login-form" onSubmit={this.onSubmit}>
          <input
            value={email}
            onChange=
            { event => this.setState(updateByPropertyName('email', event.target.value)) }
            type="text"
            placeholder="Email Address"/>
          <input
            value={password}
            onChange=
            { event => this.setState(updateByPropertyName('password', event.target.value)) }
            type="password"
            placeholder="Password"/>
          <input disabled={isInvalid} className="special fit button" type="submit"/> {error && <p>
            {error.message
}
          </p>}
        </form>
        <ul className="links">
        <li>
            <a href="javascript:;" className="special fit button" onClick={props.onToggleRegister}>
              Sign Up Idiot
            </a>
            
          </li>
          <li>
            <a href="javascript:;" className="special fit button" onClick={props.onToggleLogin}>
          Or Go Home
        </a>
        </li>
        </ul>
      </div>
    );
  }
}
Login.propTypes = {
  onToggleRegister: React.PropTypes.func,
  onToggleMenu: React.PropTypes.func,
  onToggleMenu: React.PropTypes.func
}
export default Login