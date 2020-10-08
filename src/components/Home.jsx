import React from 'react'
import Parallax from 'parallax-js'

import background from '../images/background.png'
import rock from '../images/rock.png'
import earth from '../images/earth.png'
import mid from '../images/mid.png'
import foreground from '../images/foreground.png'

import '../css/home.css'

class Home extends React.Component {

    componentDidMount() {
        let scene = document.getElementById('scene')
        let parallaxInstance = new Parallax(scene)
        console.log(scene)
    }

    render() {
        return (
            <section>
                <div id="scene">
                    <div data-depth={0.1} className="bg">
                        <img src={background}/>
                    </div>
                    <div data-depth={0.2} className="rock1">
                        <img src={rock}/>
                    </div>
                    <div data-depth={1.0} className="earth">
                        <img src={earth}/>
                    </div>
                    <div data-depth={0.2} className="text">
                        <h1>I'm Yatish</h1>
                    </div>
                    <div data-depth={0.4} className="subtext">
                        <h1>a programmer</h1>
                    </div>
                    <div data-depth={0.4} className="mid">
                        <img src={mid}/>
                    </div>
                    <div data-depth={0.1} className="fore">
                        <img src={foreground}/>
                    </div>
                    
                </div>
            </section>
        )
    }
}
export default Home