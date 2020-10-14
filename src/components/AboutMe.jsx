import React from 'react'
import feather from 'feather-icons'
import { Mail, Instagram, GitHub, MessageCircle } from 'react-feather'

import '../css/about-me.css'

import bitmoji from '../images/bitmoji.png'

class AboutMe extends React.Component {

    constructor(props) {
        super(props)
        this.parentReference = React.createRef()
        this.state = {
            strokeDashoffset: 0,
            strokeDasharray:0,
            length:0,
            scrollPercent:0,
            strokeDashoffset2:0,
            strokeDasharray2:0,
            length2:0,
            scrollPercent2:0,
            strokeDashoffset3:0,
            strokeDasharray3:0,
            length3:0,
            scrollPercent3:0,
        }
    }

    componentDidMount() {
        
        window.scroll({top:0, left:0, behavior:'smooth'})
        window.addEventListener('scroll', this._onScroll)
        var path = document.querySelector(".svgPath")
        var path2 = document.querySelector(".svgPath2")
        var path3 = document.querySelector(".svgPath3")
        var length = path.getTotalLength()
        var length2 = path2.getTotalLength()
        var length3 = path3.getTotalLength()
        this.setState({length, length2, length3})

        path.style.strokeWidth = 20
        path2.style.strokeWidth = 20
        this.setState({strokeDashoffset: length, strokeDasharray: length, strokeDasharray2: length2, strokeDashoffset2: length2,strokeDasharray3: length3, strokeDashoffset3: length3})
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    _onScroll = () => {
         const { length, length2, length3 } = this.state
        
        var scrollpercent = (document.documentElement.scrollTop - window.innerHeight/2) / document.querySelector('.svg1').clientHeight
        var draw = length * scrollpercent 
        this.setState({strokeDashoffset: length - draw, scrollPercent : scrollpercent})

        var scrollpercent2 = (document.documentElement.scrollTop - window.innerHeight + 650) / document.querySelector('.svg2').clientHeight
        var draw2 = length2 * scrollpercent2 
        this.setState({strokeDashoffset2: length2 - draw2, scrollPercent2 : scrollpercent2})

        var scrollpercent3 = (document.documentElement.scrollTop - window.innerHeight + 850) / document.querySelector('.svg3').clientHeight
        var draw3 = length3 * scrollpercent3 
        this.setState({strokeDashoffset3: length3 - draw3, scrollPercent3 : scrollpercent3})

    }

    stringToHTML = str => {
        var dom = document.createElement('div');
        dom.innerHTML = str;
        return dom;
    }

    render() {
        
        console.log( this.stringToHTML(feather.icons.x.toSvg()))
        let r = this.stringToHTML(feather.icons.x.toSvg())
        const leftSpace = document.documentElement.clientWidth * 0.235  + 14

        return (
            <div style={{backgroundColor:'black', color:'white', marginTop:60}} className="parentDiv" ref={this.parentReference}>
                <div className="svgDiv" style={{display:'flex', flexDirection:'column',alignItems:'center', width:'100vw'}}>
                    
                    {/* First SVG */}
                    <h2 className="about-me-text" style={{left:'10%', visibility: this.state.scrollPercent > 0 ? 'visible' : 'hidden', transition: 'visibility 0.3s, opacity 0.2s linear', opacity: this.state.scrollPercent > -0.15 ? 1 : 0}}>I love to write code</h2>
                    <svg className="svg1" height={420} width="70vw" style={{paddingTop:30,alignSelf:'center', display:'flex', flexDirection:'column', alignItems:'center', margin: 'auto', paddingLeft:'15%', zIndex:10}} >
                        <path 
                            className="svgPath"
                            d = "M 50 50 Q 50 200 150 200 Q 150 200 200 200 Q 300 200 350 200 C 400 200 500 200 550 200 C 550 200 650 200 650 200 C 750 200 750 300 750 350 "
                            fill="none" 
                            stroke="green" 
                            strokeDashoffset={this.state.strokeDashoffset} 
                            strokeDasharray={this.state.strokeDasharray}
                            strokeLinecap="round"
                            style={{stroke: 'url(#linear-gradient)', width:'100%', margin:'auto'}}
                        />
                        <linearGradient id="linear-gradient" x1="6.49" y1="151.03" x2="244.48" y2="151.03"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#6962ff" />
                        <stop offset="1" stop-color="#44d0ff" />
                        </linearGradient>
                    </svg>
                    
                    {/* Second SVG */}
                    <h2 className="about-me-text" style={{right:'15%', marginBottom:0, zIndex:10, top: window.innerHeight * 1.1 + 470, visibility: this.state.scrollPercent > 1 ? 'visible' : 'hidden', transition: 'visibility 0.4s, opacity 0.4s linear', opacity: this.state.scrollPercent > 1 ? 1 : 0 }}>and develop software</h2>
                    <svg className="svg2" height={360} width="70vw" style={{alignSelf:'center', display:'absolute', flexDirection:'column', alignItems:'center', margin: '0 auto 0 auto', padding:0, paddingLeft:'20%', transform: 'scale(-1,1)', top: -30,}} >
                        <path 
                            className="svgPath2"
                            d = "M 50 50 Q 50 200 150 200 Q 150 200 200 200 Q 300 200 350 200 C 400 200 500 200 550 200 C 550 200 650 200 650 200 C 750 200 750 300 750 350 "  
                            fill="none" 
                            strokeWidth={20}
                            strokeLinecap="round"
                            strokeDashoffset={this.state.strokeDashoffset2} 
                            strokeDasharray={this.state.strokeDasharray2}
                            style={{stroke: 'url(#linear-gradient2)', width:'100%', margin:'0 auto'}}
                        />
                        <linearGradient id="linear-gradient2" x1="6.49" y1="151.03" x2="244.48" y2="151.03"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#F84505" />
                        <stop offset="1" stop-color="#F8CC05" />
                        </linearGradient>
                    </svg>
                </div>
                
                <div className='swipedown' style={{display: window.scrollY > window.innerHeight * 1.1 + 300 ? '' : 'none',width: '15vw', height:'15vw', borderRadius:200, marginLeft:'19%', backgroundColor:'#F8CC05', top: -10, position:'relative', zIndex:10}}>
                    <div className="profile-picture">
                        <img src={bitmoji} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                    </div>
                </div>
                
                <svg className="svg3" height={700} width="40vw" style={{display: window.scrollY > window.innerHeight * 1.1 + 600 ? '' : 'none',alignSelf:'center', flexDirection:'column', alignItems:'center', margin: '0 auto 0 auto', padding:0, top: -120,  paddingLeft:'23%', position:'relative'}} >
                        <path 
                            className="svgPath3"
                            d = "M 50 50 C 50 300 50 300 50 650 "  
                            fill="none" 
                            strokeWidth={20}
                            strokeLinecap="round"
                            strokeDashoffset={this.state.strokeDashoffset3} 
                            strokeDasharray={this.state.strokeDasharray3}
                            // stroke="#F8CC05"
                            style={{width:'100%', margin:'0 auto',stroke: 'url(#linear-gradient3)'}}
                        />
                        <linearGradient id="linear-gradient3" x1="0%" y1="10%" x2="0%" y2="100%"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.1" stop-color="#F8CC05" />
                        <stop offset="0.3" stop-color="#0AA71D" />
                        <stop offset="0.5" stop-color="#0AA777" />
                        <stop offset="1" stop-color="#0A9EA3" />
                        <stop offset="1" stop-color="#0996CE" />
                        </linearGradient>

                </svg>

                
                <div className="skill" style={{left: leftSpace, marginTop: 180,backgroundColor:'#0AA71D',display: window.scrollY > window.innerHeight * 1.1 + 690 ? '' : 'none',}}><div className="center-icons"><Mail color="white" size={25}/></div></div>
                <div className="skill" style={{left: leftSpace, marginTop: 290,backgroundColor:'#0AA777',display: window.scrollY > window.innerHeight * 1.1 + 810 ? '' : 'none',}}><div className="center-icons"><Instagram color="white" size={25}/></div></div>
                <div className="skill" style={{left: leftSpace, marginTop: 400,backgroundColor:'#0A9EA3',display: window.scrollY > window.innerHeight * 1.1 + 940 ? '' : 'none',}}><div className="center-icons"><GitHub color="white" size={25}/></div></div>
                <div className="skill" style={{left: leftSpace, marginTop: 510,backgroundColor:'#0996CE',display: window.scrollY > window.innerHeight * 1.1 + 1050 ? '' : 'none',}}><div className="center-icons"><MessageCircle color="white" size={25}/></div></div>

                <div className="who-am-i" style={{width: '50vw', height:'30vw', marginLeft:'37%', backgroundColor:'transparent', position:'absolute', top: window.innerHeight * 1.1 + 850, visibility: window.scrollY > window.innerHeight * 1.1 + 300 ? 'visible' : 'hidden',opacity: window.scrollY > window.innerHeight * 1.1 + 300 ? 1 : 0, transition: 'visibility 0.4s , opacity 0.4s linear'}}>
                    <h2>But who am I ?</h2>
                    <p>I am Yatish Kelkar. I am currently interning at FortyTwo Labs as a Product Designer</p>
                    <p>I study at PVG's COET Pune and am 20 years old</p>
                    <p>I love to code, develop software and cook chicken. And, ofcourse, Netflix</p>
                </div>

                <div className="snippets" style={{width: '50vw', height:'30vw', marginLeft:'37%', backgroundColor:'transparent', position:'absolute', top: window.innerHeight * 1.1 + 1150, visibility: window.scrollY > window.innerHeight * 1.1 + 600 ? 'visible' : 'hidden',opacity: window.scrollY > window.innerHeight * 1.1 + 600 ? 1 : 0, transition: 'visibility 0.4s , opacity 0.4s linear'}}>
                    <h4>Snippets</h4>
                    <p className="subtitle">MAIL ME AT</p>
                    <p className="info">yatish1606@gmail.com</p>
                    <p className="subtitle">STALK ME ON INSTAGRAM</p>
                    <p className="info">instagram.com/profile/yatish1606</p>
                    <p className="subtitle">BROWSE MY CODE</p>
                    <p className="info">github.com/yatish1606</p>
                    <p className="subtitle">REACH OUT ON WHATSAPP</p>
                    <p className="info">whatsapp.com/me/efubdi638</p>
                </div>


            </div>
        )
    }
}

export default AboutMe