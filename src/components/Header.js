import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/favicon-highlight.png'


const Header = (props) =>(
            <header id="header" className="alt">
                <Link to="/" className="logo" > </Link>
                <a className="logo-name" href="/"><strong>Like A Fox Design</strong></a>
                <nav>
                    <a className="menu-link" onClick={props.handleToggleMenu} href="javascript:;">Menu</a>
                </nav>
            </header>
        )
 



export default Header
