import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link, withPrefix } from 'gatsby-link'
import '../assets/scss/main.scss'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import withAuthentication from '../components/Session/withAuthentication'



class Template extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: 'is-loading',
            isMenuVisible: false,
            isLoginVisible:false,
            isRegisterVisible: false
        }
       this.handleToggleMenu = this.handleToggleMenu.bind(this)
       this.handleViewLogin = this.handleViewLogin.bind(this)
       this.handleViewRegister = this.handleViewRegister.bind(this)
    }

    componentDidMount () {
        setTimeout(() => this.setState({ loading: '' }), 300);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible,
            isLoginVisible: false,
            isRegisterVisible: false
        })
    }
    
    handleViewLogin()  {
        this.setState({
            isLoginVisible: !this.state.isLoginVisible,
            isRegisterVisible: false,
            isMenuVisible: true
        })
    }
    handleViewRegister() {
        this.setState({
            isRegisterVisible: !this.state.isRegisterVisible,
            isLoginVisible: false,
            isMenuVisible: true
        })
    }

   

    render() {
        const {
            isLoginVisible,
            isRegisterVisible,
            loading,
            isMenuVisible
        } = this.state
        
        const { children } = this.props  

        return (
            
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''} ${this.state.isLoginVisible ? 'is-login-visible' : ''} ${this.state.isRegisterVisible ? 'is-register-visible' : ''}`}>
            
                <Helmet>
                    <link rel="stylesheet" href={withPrefix('skel.css')} />
                </Helmet>
                <div id="wrapper">
                    <Header handleToggleMenu={this.handleToggleMenu} />
                    {children()}
                    <Contact />
                    <Footer />
                </div>
                <Menu 
                handleToggleLogin={this.handleViewLogin} 
                handleToggleRegister={this.handleViewregister}
                onToggleMenu={this.handleToggleMenu} />
                   
               
            </div>
        )
    }
}






Template.propTypes = {
    children: PropTypes.func,
    componentDidMount: PropTypes.func,
    componentWillUnmount: PropTypes.func,
    handleToggleMenu: PropTypes.func,
    handleViewLogin: PropTypes.func,
    handleViewRegister: PropTypes.func,
    loading: PropTypes.string,
    isMenuVisible: PropTypes.bool,
    isLoginVisible:PropTypes.bool,
    isRegisterVisible: PropTypes.bool
}

export default withAuthentication(Template) 
