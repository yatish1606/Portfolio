import React from 'react'

import '../css/about-me.css'

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
        }
    }

    componentDidMount() {
        
        window.scroll({top:0, left:0, behavior:'smooth'})
        window.addEventListener('scroll', this._onScroll)
        var path = document.querySelector(".svgPath")
        var path2 = document.querySelector(".svgPath2")
        var length = path.getTotalLength()
        var length2 = path2.getTotalLength()
        this.setState({length, length2})

        path.style.strokeWidth = 20
        path2.style.strokeWidth = 20
        this.setState({strokeDashoffset: length, strokeDasharray: length, strokeDasharray2: length2, strokeDashoffset2: length2})
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    _onScroll = () => {
         const { length, length2 } = this.state
        // let elements = document.elementsFromPoint(0,window.innerHeight * 0.5)
        // let SVGElements = Array.from(elements[0].children).filter(element => element.nodeName === 'svg')
       
        // if (!SVGElements.length || window.scrollY < window.innerHeight * 0.5) return 

        // if(numberOfSVG !== SVGElements.length && (window.scrollY + 300) >= (numberOfSVG+1)*600) {
        //     this.setState({numberOfSVG: this.state.numberOfSVG + 1})
        // }
    
        // if(numberOfSVG) {
            var scrollpercent = (document.documentElement.scrollTop - window.innerHeight/2) / document.querySelector('.svg1').clientHeight
            var draw = length * scrollpercent 
            this.setState({strokeDashoffset: length - draw, scrollPercent : scrollpercent})

            var scrollpercent2 = (document.documentElement.scrollTop - window.innerHeight + 500) / document.querySelector('.svg2').clientHeight
            var draw2 = length2 * scrollpercent2 
            this.setState({strokeDashoffset2: length2 - draw2, scrollPercent2 : scrollpercent2})

            //console.log(SVGElements[numberOfSVG-1], scrollpercent)

            //this.setState(prevState => ({strokeDashoffset: {...prevState.strokeDashoffset, [prevState.strokeDashoffset[numberOfSVG]] : length - draw}}))
            //this.setState(prevState => ({strokeDasharray: {...prevState.strokeDasharray, [prevState.strokeDashoffset[0]] : scrollpercent}}))
            
            // let fakeStrokeDashArrays = [...this.state.strokeDasharray]
            // fakeStrokeDashArrays[numberOfSVG-1] = scrollpercent
            // this.setState({strokeDasharray: fakeStrokeDashArrays})

            // let fakeStrokeDashOffset = [...this.state.strokeDashoffset]
            // fakeStrokeDashOffset[numberOfSVG-1] = length - draw
            // this.setState({strokeDashoffset: fakeStrokeDashOffset})
            //this.setState(({strokeDasharray}) => ({strokeDasharray : [...strokeDasharray.slice(0,1), {...strokeDasharray[1], 0 : scrollpercent}, strokeDasharray.slice(2)]}))
        // }
    }


    render() {
        //console.log( this.state.strokeDashoffset)
        return (
            <div style={{backgroundColor:'black', color:'white', marginTop:60,marginBottom:1000}} className="parentDiv" ref={this.parentReference}>
                <div className="svgDiv" style={{display:'flex', flexDirection:'column',alignItems:'center', width:'100vw'}}>
                    
                    {/* First SVG */}
                    <h2 className="about-me-text" style={{left:'15%', visibility: this.state.scrollPercent > 0 ? 'visible' : 'hidden', transition: 'visibility 0.3s, opacity 0.2s linear', opacity: this.state.scrollPercent > -0.15 ? 1 : 0}}>I write code</h2>
                    <svg className="svg1" height={420} width="70vw" style={{paddingTop:30,alignSelf:'center', display:'flex', flexDirection:'column', alignItems:'center', margin: 'auto', paddingLeft:'15%'}} >
                        <path 
                            className="svgPath"
                            d = "M 50 50 Q 50 200 150 200 Q 150 200 200 200 Q 300 200 350 200 C 400 200 500 200 550 200 C 550 200 650 200 650 200 C 750 200 750 300 750 350 "
                            // M 50 100 Q 50 300 200 300 C 300 300 300 300 400 300 C 450 300 500 300 600 300 C 750 300 750 400 750 500   
                            fill="none" 
                            stroke="green" 
                            strokeDashoffset={this.state.strokeDashoffset} 
                            strokeDasharray={this.state.strokeDasharray}
                            strokeLinejoin="round"
                            style={{stroke: 'url(#linear-gradient)', width:'100%', margin:'auto'}}
                        />
                        <linearGradient id="linear-gradient" x1="6.49" y1="151.03" x2="244.48" y2="151.03"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#6962ff" />
                        <stop offset="1" stop-color="#44d0ff" />
                        </linearGradient>
                    </svg>

                    {/* Second SVG */}
                    <h2 className="about-me-text" style={{right:'15%', marginBottom:0, top: window.innerHeight * 1.1 + 470, visibility: this.state.scrollPercent > 1 ? 'visible' : 'hidden', transition: 'visibility 0.4s, opacity 0.4s linear', opacity: this.state.scrollPercent > 1 ? 1 : 0 }}>and develop software</h2>
                    <svg className="svg2" height={320} width="70vw" style={{alignSelf:'center', display:'absolute', flexDirection:'column', alignItems:'center', margin: '0 auto 0 auto', padding:0, paddingLeft:'20%', transform: 'scale(-1,1)', top: -30,}} >
                        <path 
                            className="svgPath2"
                            d = "M 50 50 Q 50 200 150 200 Q 150 200 200 200 Q 300 200 350 200 C 400 200 500 200 550 200 C 550 200 650 200 650 200 C 750 200 750 300 750 350 "  
                            fill="none" 
                            strokeWidth={20}
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

                    {/* Third SVG */}
                    <h2 className="about-me-text" style={{left:'15%',top: window.innerHeight * 1.1 + 880, visibility: this.state.scrollPercent > 0 ? 'visible' : 'hidden', transition: 'visibility 0.3s, opacity 0.2s linear', opacity: this.state.scrollPercent > -0.15 ? 1 : 0}}>I focus on User Experience</h2>
                    <svg className="svg1" height={320} width="70vw" style={{alignSelf:'center', display:'flex', flexDirection:'column', alignItems:'center', margin: 'auto', paddingLeft:'15%',marginTop:100, }} >
                        <path 
                            className="svgPath"
                            d = "M 50 50 Q 50 200 150 200 Q 150 200 200 200 Q 300 200 350 200 C 400 200 500 200 550 200 C 550 200 650 200 650 200 C 750 200 750 300 750 350 "  
                            fill="none" 
                            stroke="green" 
                            strokeWidth={20}
                            strokeDashoffset={this.state.strokeDashoffset} 
                            strokeDasharray={this.state.strokeDasharray}
                            strokeLinejoin="round"
                            style={{stroke: 'url(#linear-gradient3)', width:'100%', margin:'auto'}}
                        />
                        <linearGradient id="linear-gradient3" x1="6.49" y1="151.03" x2="244.48" y2="151.03"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#04CE1A" />
                        <stop offset="1" stop-color="#D0F205" />
                        </linearGradient>
                    </svg>

                </div>
            </div>
        )
    }
}

export default AboutMe