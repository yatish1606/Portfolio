import React from 'react'
import Swiper from 'swiper'

import Slide from './Slide'
import mountainImage from '../images/mountain.jpg'
import curveImage from '../images/curve.png'
import gearImage from '../images/gear.png'
import gearImage2 from '../images/gear2.png'
import algorithmImage from '../images/algorthms.png'
import appdevImage from '../images/appdev.png'
import bookImage from '../images/book.png'
import catImage from '../images/cat.png'
import cookingImage from '../images/cooking.png'
import sleepingImage from '../images/sleeping.png'
import uiuxImage from '../images/uiux.png'
import cricketImage from '../images/cricket.png'

import 'swiper/swiper-bundle.css'
import '../css/hobbies.css'

const HobbiesCard = ({title, description, image, color}) => {

    const [isHover, setIsHover] = React.useState(false)

    return (
        <div className="hobbies-card">
            <div className="hobbies-card-top">
                <img src={image} className={isHover ? "img-hover" : "hobbies-card-img"} width={120} height={120}/>
            </div>
            <div className="hobbies-card-bottom" style={{backgroundColor: '#1A1A1A'}} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <h2 className="center subtitle" style={{color, textAlign: 'center', fontSize: isHover ? 20 : 18, transition: '0.3s ease-in', marginTop: isHover ? 40 : 30}}>{title}</h2>
                <h2 className="center subtitle" style={{color : '#eee', textAlign: 'center', fontSize: 13.5, margin:'10px 20px', display: isHover ? 'block' : 'none', fontWeight: 400, transition: '0.3s ease-in'}}>{description}</h2>
            </div>
        </div>
    )
}

class Hobbies extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {

        }
    }

    componentDidMount() {
        var gear = document.getElementById('gear')
        window.addEventListener('scroll', () => {
            gear.style.transform = "rotate("+window.pageYOffset*0.4+"deg)";
        })
        var gear2 = document.getElementById('gear2')
        window.addEventListener('scroll', () => {
            gear2.style.transform = "rotate(-"+window.pageYOffset*0.4+"deg)";
        })
        var gear3 = document.getElementById('gear3')
        window.addEventListener('scroll', () => {
            gear3.style.transform = "rotate(-"+window.pageYOffset*0.45+"deg)";
        })
    }

    render() {
        return (
        
                <div style={{width: '100vw', paddingTop: 100}} className="container">
                    
                    <div>
                        <img src={curveImage} width="100%"/>
                        <div style={{position: 'absolute', margin:'0px auto', alignSelf: 'center', marginLeft:'auto', marginRight: 'auto', backgroundColor: '#232323',width: 230, height: 230, marginTop: -290, left: window.innerWidth*0.5-115, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 150 }}>
                            <img src={gearImage} id="gear" style={{position: 'absolute', right: 10, top: 50}} width="120px"/>
                            <img src={gearImage2} id="gear2" style={{position: 'absolute', left: 50, top: 25}} width="60px"/>
                            <img src={gearImage} id="gear3" style={{position: 'absolute', left: 15, top: 90}} width="90px"/>
                        </div>
                        
                        
                
                    </div>
                    <div className="hobbiesmain">
                        <h2 className={'center title'} style={{marginBottom: 20, marginTop: 0, color:'#151515', fontWeight: 800, letterSpacing:-2}}>Hobbies</h2>
                        <h2 className={'center subtitle'} style={{marginTop: 40, color:'#151515', fontWeight: 800, letterSpacing:0}}>Stuff I'm passionate about. Or good at</h2>
                        
                        <div style={{width: '76%', padding: '0px 12%', display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                            {
                                hobbiesInfo.slice(0,4).map(h => {
                                    return <HobbiesCard title={h.title} description={h.description} color={h.color} image={h.image}/>
                                })
                            }
                        </div>

                        <div style={{width: '76%', padding: '0px 12%', display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 100, marginTop: 50}}>
                            {
                                hobbiesInfo.slice(4,8).map(h => {
                                    return <HobbiesCard title={h.title} description={h.description} color={h.color} image={h.image}/>
                                })
                            }
                        </div>
                        
                    </div> 
                    
                    
                </div>
            
        )
    }
}

export default Hobbies

const hobbiesInfo = [
    {
        title:'Algorithms',
        description:'Data structures and programming concepts',
        image: algorithmImage,
        color: '#F45701'
    },
    {
        title:'Reading',
        description:'Fiction and non fiction',
        image: bookImage,
        color: '#04CB18'
    },
    {
        title:'App Development',
        description:'React Native app development',
        image: appdevImage,
        color: '#E9A606'
    },
    {
        title:'UI UX',
        description:'Design concepts and product design',
        image: uiuxImage,
        color: '#0277DC'
    },
    {
        title:'Sleeping',
        description:'Duh. Who doesnt ?',
        image: sleepingImage,
        color: 'gold'
    },
    {
        title:'Cats',
        description:'Meow',
        image: catImage,
        color: '#FDB2B2'
    },
    {
        title:'Cooking',
        description:'From chinese to chicken',
        image: cookingImage,
        color: '#11D413'
    },
    {
        title:'Cricket',
        description:'',
        image: cricketImage,
        color: '#F45701'
    },
]