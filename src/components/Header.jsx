import React from 'react'

import facebook from '../images/facebook.png'
import instagram from '../images/instagram-logo.png'
import linkedin from '../images/linkedin.png'

import '../css/header.css'

class Header extends React.Component {

    state = {
        background: false,
        windowHeightExceeded: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({windowHeightExceeded: window.scrollY > window.innerHeight + 100 ? true : false})
        })
    }

    handleNavigation = navID => {
        switch(navID) {
            case 0: 
                return window.scroll({top:0, left:0, behavior:'smooth'})
            case 1:
                return window.scroll({top:window.innerHeight, left:0, behavior:'smooth'})
            case 2:
                return window.scroll({top:window.innerHeight*3 + 50, left:0, behavior:'smooth'})
        }
    }

    render() {
        
        return (
            <div className="header-container" style={{background: this.state.windowHeightExceeded ? '#151515' : 'transparent'}}>
                <div>
                    <ul>
                        <li onClick={() => this.handleNavigation(0)}>Home</li>
                        <li onClick={() => this.handleNavigation(1)}>About Me</li>
                        <li onClick={() => this.handleNavigation(2)}>Education</li>
                        <li onClick={() => this.handleNavigation(1)}>Hobbies</li>
                        <li onClick={() => this.handleNavigation(2)}>Projects</li>
                        <li onClick={() => this.handleNavigation(3)}>Contact</li>
                    </ul>
                </div>

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