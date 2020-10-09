import React from 'react'

import '../css/about-me.css'

class AboutMe extends React.Component {

    constructor(props) {
        super(props)
        this.parentReference = React.createRef()
        this.state = {
            strokeDashoffset:0,
            strokeDasharray:0,
            length:0
        }
    }

    componentDidMount() {
        window.scroll({top:0, left:0, behavior:'smooth'})
        window.addEventListener('scroll', this._onScroll)
        var path = document.getElementById("svgPath")
        var length = path.getTotalLength()
        this.setState({length})

        path.style.strokeWidth = 20
        this.setState({strokeDashoffset: length, strokeDasharray: length})
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    _onScroll = () => {
        const { length } = this.state
        var scrollpercent = (document.documentElement.scrollTop - window.innerHeight/2) / document.querySelector('.parentDiv').clientHeight
        var draw = length * scrollpercent * 1.2
     }


    render() {
        
        return (
            <div style={{backgroundColor:'black', color:'white', marginTop:60,marginBottom:1000}} className="parentDiv" ref={this.parentReference}>
                <div className="svgDiv" style={{display:'flex', flexDirection:'column',alignItems:'center', width:'100vw'}}>
                    <h2 className="about-me-text" style={{left:'15%'}}>lorem ipsum</h2>
                    <svg height={700} width="70vw" style={{alignSelf:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <path 
                            id="svgPath"
                            d = "M 50 100 Q 50 300 200 300 C 300 300 300 300 400 300 C 450 300 500 300 600 300 C 750 300 750 400 750 500  "  
                            fill="none" 
                            stroke="green" 
                            strokeDashoffset={this.state.strokeDashoffset} 
                            strokeDasharray={this.state.strokeDasharray}
                            style={{stroke: 'url(#linear-gradient)', width:'100%', margin:'0 auto'}}
                        />
                        <linearGradient id="linear-gradient" x1="6.49" y1="151.03" x2="244.48" y2="151.03"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#6962ff" />
                        <stop offset="1" stop-color="#44d0ff" />
                        </linearGradient>
                    </svg>
                    {/* <h2 className="about-me-text" style={{right:'15%', bottom:0}}>lorem ipsum</h2> */}
                </div>
            </div>
        )
    }
}

export default AboutMe