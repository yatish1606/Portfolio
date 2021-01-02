import React from 'react'

import { Edit2, ExternalLink } from 'react-feather'
import '../css/app.css'
import '../css/education.css'
import capImage from '../images/mortarboard.svg'
import buildingImage from '../images/building.svg'

const EducationCard = ({props}) => {
    
    return (
        <div style={{width: '20vw', height: 'auto', padding: '10px'}} className="vertical">
            <div style={{width:'100%', height: 100}} className="centerbox">
                <div style={{width: 90, height:90, backgroundColor: '#2A2A2A', borderRadius: 50,}} className="centerbox">
                    <img src={capImage} style={{width: 50, height: 50, marginTop: 10}}/>
                </div>
            </div>
            <div style={{width: '100%'}} className="vertical">
                <p className="nameofboard">{props.name}</p>
                <div className="horizontal" style={{marginTop: 10, justifyContent: 'center', height: 60}}>
                    {/* <img src={buildingImage} style={{width: 25, height: 25}}/> */}
                    <p className="uniname">{props.school}</p>
                    <a href={props.link} target="_blank">
                        <ExternalLink size={16} color="#FFE500" style={{cursor: 'pointer'}}/>
                    </a>
                </div>
                <p className="date">Graduated in {props.when}</p>
            </div>
            <div style={{ height: 50, backgroundColor: '#2a2a2a', borderRadius: 5, marginTop: 15, padding: '0px 15px', justifyContent: 'space-between'}} className="horizontal">
                <p className="percentagetext">{props.gradeType.toUpperCase()}</p>
                <p className="percentage">{props.marks}</p>
            </div>
        </div>
    )
}

class Education extends React.Component {

    renderEducation = () => {
        return educationDetails.map(e => {
            return <EducationCard props={e}/>
        })
    }

    render() {
        return (
            <div style={{width: '100vw', paddingTop: 100}} className="container">
                <h2 className={'center title'} style={{marginBottom: 30}}>Education</h2>
                <div className={'horizontal space-between'} style={{padding:'20px 10%', alignItems: 'flex-start'}}>
                    {this.renderEducation()}
                </div>
                
            </div>
        )
    }
}

export default Education


const educationDetails = [
    {
        name:'Secondary School Certificate (SSC)',
        where: 'Maharashtra State Board',
        school: 'Abhinava Vidyalaya',
        marks : '94 %',
        when: 'May 2016',
        gradeType: 'Percentage',
        icon:<Edit2/>,
        link:'https://www.asm.ac.in/avemhs-home/'
    },
    {
        name:'Higher Secondary School Certificate (HSC)',
        where: 'Maharashtra State Board',
        school: 'PACE Educational Institute',
        marks : '87 %',
        gradeType: 'Percentage',
        when: 'May 2018',
        link:'https://iitianspace.com/'
    },
    {
        name:'Bachelors in Engineering (Information Technology)',
        where: 'Savitribai Phule Pune University',
        school: 'PVGCOET',
        marks : 9.66,
        when: 'May 2022',
        averagePointer: 9.66,
        gradeType: 'GPA',
        pointers: [9.92,9.58,9.36,9.8],
        link:'https://www.pvgcoet.ac.in/'
    },
]