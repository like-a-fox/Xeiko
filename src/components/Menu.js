import React from 'react'
import Link from 'gatsby-link'
import Login from './Login'
import Register from './Register'



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
        setTimeout(() => this.setState({loading: false}), 300)
    }

    

  render() {
      const props = this.props
      
    return(
      <nav id="menu">
        <div className="inner">
          <ul className="links">
            <li>
              <Link onClick={props.onToggleMenu} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/landing">Landing</Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/generic">Generic</Link>
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
                className="button fit special">Register</a>
            </li>
            <li>
              <a onClick={props.handleViewLogin} href="javascript:;" className="button fit">Log In</a>
            </li>
          </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
       <Login onToggleMenu={props.onToggleMenu} onToggleRegister={props.handleViewRegister} onToggleLogin={props.onToggleLogin} />
       <Register onToggleLogin={props.onToggleLogin} onToggleRegister={props.onToggleRegister} onToggleMenu={props.onToggleMenu} registerState={props.registerState} loginState={props.loginState} />
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
