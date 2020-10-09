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
        var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
        var draw = length * scrollpercent
        this.setState({strokeDashoffset: length - draw})
     }


    render() {
        
        return (
            <div style={{backgroundColor:'black', color:'white', marginTop:60}} className="parentDiv" ref={this.parentReference}>
                <div className="svgDiv" style={{display:'flex', flexDirection:'column',alignItems:'center', width:'100vw'}}>
                    <h2 className="about-me-text" style={{left:'15%'}}>lorem ipsum</h2>
                    <svg height={1000} width="70vw" style={{alignSelf:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        {/* <path id="svgPath"
                        d="M10.5,195.36q0,26.47,0,52.94,0,8.76,0,17.53c0,13.85,9,24.7,22.55,27.4a23.18,23.18,0,0,0,4.48.43c32.34,0,64.69.15,97-.09,17.83-.13,35.31-2.8,52-9.56,18.33-7.44,33.21-19,43.13-36.42a82.72,82.72,0,0,0,10.29-33c2.62-25.6-5.61-47.75-21.32-67.52-1.66-2.09-3.25-4-3-6.91a9.71,9.71,0,0,1,.94-3.3,141.56,141.56,0,0,0,10.67-33,76.48,76.48,0,0,0,.5-21.6,79.75,79.75,0,0,0-9.39-30.74c-8-14.5-19.85-24.94-34.65-32.12a110.27,110.27,0,0,0-36.86-10.1,181.78,181.78,0,0,0-19.22-1q-57.46,0-114.91,0c-1.65,0-2.24.25-2.24,2.12.07,37.9,0,75.8.07,113.7,0,10,.94,20,4.8,29.38,5.65,13.78,16,21.3,30.67,23.2,4.1.53,8.19.08,12.29.07q47-.11,94.08,0c14.07,0,25.59,8.89,28.62,22.14A28,28,0,0,1,157.29,233a38.43,38.43,0,0,1-4.83.3q-52.6,0-105.19,0c-1.65,0-2.14.35-2.09,2.06.13,4.74,0,9.49,0,14.23,0,5.81,3.63,9.43,9.41,9.43,26.15,0,52.31.09,78.46-.05,14.06-.08,27.89-1.89,41-7.29,10.46-4.3,19.34-10.65,25.15-20.61,5.22-8.94,7.07-18.7,6.46-29-1-17.72-10.71-29.74-25.41-38.42a83.7,83.7,0,0,0-17.88-7.83c-3.56-1.1-6.12-3.25-7.14-6.9a9.53,9.53,0,0,1,6.29-11.74,57.27,57.27,0,0,0,12.47-5.5c10.6-6.64,16.54-16.37,18.64-28.53,1.64-9.53,1.35-19-1.85-28.23-4.4-12.66-13.46-20.88-25.62-25.9a77.57,77.57,0,0,0-26.46-5.59c-20.12-.86-40.26-.21-60.39-.36C68,43,57.55,43.1,47.13,43c-1.44,0-2,.23-2,1.85.12,5.32.11,10.65,0,16,0,1.57.45,1.91,1.94,1.91,30.15,0,60.29,0,90.44-.06,7.27,0,13.82,1.83,19.41,6.54a27.25,27.25,0,0,1,10.14,22.21,28.16,28.16,0,0,1-25.38,27.6,43.18,43.18,0,0,1-4.34.08H48.87c-3.65,0-3.65,0-3.65,3.57,0,2.2,0,13.4,0,15.6a9.29,9.29,0,0,0,9.56,9.52c7.15,0,83.48,0,90.66,0"
                        transform="translate(-6.49 -4.36)" fill="none" stroke="green" strokeDashoffset={this.state.strokeDashoffset} strokeDasharray={this.state.strokeDasharray} style={{stroke: 'url(#linear-gradient)'}}/> */}
                        <path 
                            id="svgPath"
                            d = "M 50 100 Q 50 300 200 300 C 300 300 300 300 400 300 C 450 300 500 300 600 300 C 750 300 750 400 750 500  "  
                            fill="none" 
                            stroke="green" 
                            strokeDashoffset={this.state.strokeDashoffset} 
                            strokeDasharray={this.state.strokeDasharray}
                            style={{stroke: 'url(#linear-gradient)', width:'100%', margin:'0 auto'}}
                        />
                        {/* <path 
                            id="svgPath2"
                            d = "M 100 100 C 150 100 200 100 250 100 Q 400 100 400 300 C 400 450 450 500 550 500 C 600 500 650 500 700 500 "  
                            fill="none" 
                            stroke="green" 
                            strokeWidth={20}
                            strokeDashoffset={this.state.strokeDashoffset} 
                            strokeDasharray={this.state.strokeDasharray}
                            style={{stroke: 'url(#linear-gradient)',position:'absolute', top:100, right:100, zIndex:9989,}}
                            transform="translate(-6.49 -4.36)"
                            
                        /> */}
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