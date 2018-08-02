import React from 'react'
import Link from 'gatsby-link'
import Login from './Login'
import Register from './Register'
import { firebase } from '../firebase'



class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          isMenuVisible: false,
            isLoginVisible:false,
            isRegisterVisible: false
        }
       

    } 
    componentDidMount () {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
        setTimeout(() => this.setState({loading: false}), 300)
    }

    

  render() {
      const props = this.props
      const isAuth = !this.authUser
      
    return(
      <nav id="menu">
        <div className="inner">
          <ul className="links">
            <li>
              <Link onClick={props.onToggleMenu} to="/">$home</Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/landing">$kernel panic</Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/generic">$fatal error</Link>
            </li>
{/*             <li>
              <Link onClick={props.onToggleMenu} to="/profile">Profile</Link>
            </li> */}
          </ul>
          <ul className="actions vertical">
            <li>
              <a
                onClick={props.handleViewRegister}
                href="javascript:;"
                className="button fit special register-title">$register_user</a>
            </li>
            <Register onToggleLogin={props.onToggleLogin} onToggleRegister={props.onToggleRegister} onToggleMenu={props.onToggleMenu} registerState={props.registerState} loginState={props.loginState} />
            <li>
              <a onClick={props.handleViewLogin} href="javascript:;" className="button fit login-title">$login_user</a>
            </li>
            <Login onToggleMenu={props.onToggleMenu} onToggleRegister={props.handleViewRegister} onToggleLogin={props.onToggleLogin} />
          </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
       
       
      </nav>
    )
  }
}





Menu.propTypes = {
  onToggleMenu: React.PropTypes.func,
  handleViewLogin: React.PropTypes.func,
  handleViewRegister: React.PropTypes.func
}

export default Menu
