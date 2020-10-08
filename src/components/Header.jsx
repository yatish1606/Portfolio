import React from 'react'

import facebook from '../images/facebook.png'
import instagram from '../images/instagram-logo.png'
import linkedin from '../images/linkedin.png'

import '../css/header.css'

class Header extends React.Component {

    state = {
        background: false
    }

    render() {
        console.log(facebook)
        return (
            <div className="header-container">
                <ul>
                    <li><img src={facebook} className="header-social"/></li>
                    <li><img src={instagram} className="header-social"/></li>
                    <li><img src={linkedin} className="header-social"/></li>
                </ul>
            </div>
        )
    }
}
export default Header