import React from 'react'
import Link from 'gatsby-link'
import Login from './Login'
import Register from './Register'
import AuthUserContext from '../components/Session/AuthUserContext'
import {auth} from '../firebase'

const MenuNoAuth = (props) =>
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
  </ul>
  <ul className="actions vertical">
    <li>
      <a
        onClick={props.handleToggleRegister}
        href="javascript:;"
        className="button fit special register-title">$register_user</a>
    </li>
    <Register />
    <li>
      <a onClick={props.handleToggleLogin} href="javascript:;" className="button fit login-title">$login_user</a>
    </li>
    <Login />
  </ul>
</div>
<a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
</nav>

const MenuAuth = (props) =>
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
            <li>
              <Link onClick={props.onToggleMenu} to="/profile">$master --slave</Link>
            </li>
          </ul>
          <ul className="actions vertical">
            <li>
              <a
                onClick={auth.doSignOut}
                href="javascript:;"
                className="button fit login-title">$session_logout</a>
            </li>
          </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>

      </nav>

const Menu = (props) => 
<AuthUserContext.Consumer>
  {authUser => authUser
    ? <MenuAuth 
      onToggleMenu={props.onToggleMenu} />
    : <MenuNoAuth 
      onToggleMenu={props.onToggleMenu} 
      handleToggleRegister={props.handleToggleRegister} 
      handleToggleLogin={props.handleToggleLogin} />
  }
</AuthUserContext.Consumer>



export default Menu
