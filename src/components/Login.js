import React, {Component} from 'react'
import {auth} from '../firebase'
import createHistory from "history/createBrowserHistory"

const updateByPropertyName = (propertyName, value) => () => ({[propertyName]: value})

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class Login extends Component {
  constructor() {
    super()
    this.state = {
      ...INITIAL_STATE
    }
  }

  onSubmit = (event) => {
    const {email, password} = this.state

    const {history} = this.props

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({
          ...INITIAL_STATE
        }))
        history.push('/')
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      })
      event.preventDefault()
  }

  render() {
    const {email, password, error} = this.state

    const isInvalid = password === '' || email === ''

    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <label>></label>
        <input
          value={email}
          onChange=
          { event => this.setState(updateByPropertyName('email', event.target.value)) }
          type="text"
          placeholder="user_Email_Address"/>
        <label>></label>
        <input
          value={password}
          onChange=
          { event => this.setState(updateByPropertyName('password', event.target.value)) }
          type="password"
          placeholder="user_Passwd"/>
        <input
          disabled={isInvalid}
          className="fit special button"
          value="$login_submit"
          type="submit"/> {error && <p>
          {error.message
}
        </p>}
      </form>
      ); 
    } 
  } 
export default Login