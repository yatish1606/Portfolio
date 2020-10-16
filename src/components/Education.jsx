import React from 'react'

import { Edit2, Book, Edit, } from 'react-feather'

const EducationCard = ({props}) => {
    
    return (
        <div style={{width: '100%', height: 'auto', padding: '10px 0', display: "flex", flexDirection: 'row'}}>
            {props.name}
            {props.icon}
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
            <div style={{width: '100vw', height: 600, backgroundColor: 'white', padding: '0 10%'}}>
                <h2>Education</h2>
                {this.renderEducation()}
            </div>
        )
    }
}

export default Education


const educationDetails = [
    {
        name:'Secondary School Certificate (SSC)',
        where: 'Maharashtra State Board',
        school: 'Abhinava Vidyalaya English Medium High School',
        marks : '94',
        when: 'May 2016',
        icon:<Edit2/>
    },
    {
        name:'Higher Secondary School Certificate (HSC)',
        where: 'Maharashtra State Board',
        school: 'PACE Educational Institute',
        marks : '87',
        when: 'May 2018'
    },
    {
        name:'Bachelors in Engineering ( Information Technology )',
        where: 'Savitribai Phule Pune University',
        school: 'Pune Vidyrthi Griha College of Engineering and Technology',
        marks : null,
        when: 'May 2022',
        averagePointer: 9.66,
        pointers: [9.92,9.58,9.36,9.8]
    },
]