import React, {Component} from 'react';
import {auth, db} from '../firebase';
import {doSignInWithEmailAndPassword} from '../firebase/auth';

const updateByPropertyName = (propertyName, value) => () => ({[propertyName]: value})

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...INITIAL_STATE
    };

  }

  onSubmit = (event) => {
    const {username, email, passwordOne} = this.state

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
            }))
            history.push('/profile')
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error))
          })

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error))
      })
      event.preventDefault()
  }

  render() {
    const {username, email, passwordOne, passwordTwo, error} = this.state
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || username === '' || email === ''
    return (

      <form className="register-form" onSubmit={this.onSubmit}>
        <label>></label>
        <input
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="user_name"/>
        <label>></label>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="user_email_address"/>
        <label>></label>
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="user_passwd"/>
        <label>></label>
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="confirm_user_passwd"/>
        <input
          disabled={isInvalid}
          type="submit"
          value="$register_submit"
          className="fit button"/> {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default Register