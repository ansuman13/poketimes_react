import React, { Component } from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import CategoryNav from '../navbar/CategoryNav'

class Navbar extends Component {
    render() {
        return (
            <>
            <nav>
                <div className="nav-wrapper container">
                    <Link to='/' className="brand-logo">Poke'Times</Link>
                    <ul id='nav-mobile' className="hide-on-med-and-down right">
                        <li><NavLink exact to="/"> Home</NavLink></li>
                        <li><NavLink to="/about"> About</NavLink></li>
                        <li><NavLink to="/contact"> Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
            </>
        )
    }
}

export default withRouter(Navbar)