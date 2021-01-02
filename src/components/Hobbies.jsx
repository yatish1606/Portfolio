import React from 'react'
import Swiper from 'swiper'

import Slide from './Slide'
import mountainImage from '../images/mountain.jpg'

import 'swiper/swiper-bundle.css'
import '../css/hobbies.css'

class Hobbies extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
        
            <div style={{height:1000, color: 'white', width: '100%'}}>
                {/* <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Slide 
                            title="FileShare"
                            number="01"
                            info=" sdsbdicubsdcu sidc sidc  ic adi eqdiquw  ciadu fqie fqeij ciqwodquwbdqou aic auf qe  dic i fie qieu qiue qeifuqbeufiqbiq cq efowrgbij sdivu qeriv sci;wu3iut wiw diwe iuf weicu wif weifu ewif weif weifu"
                            frontend="React and Framer Motion"
                            backend="MongoDB"
                            deployed="link"
                        />
                    </div>
                </div> */}
                <iframe width="100%" height={300} src="./Education.jsx">
                    <div style={{width: '100%', height: 500,}}>

                    </div>
                </iframe>
                <div className="mountain">

                </div>
            </div>
        )
    }
}

export default Hobbies