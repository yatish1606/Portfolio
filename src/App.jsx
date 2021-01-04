import React from 'react'

import { Header, Home, AboutMe, Education, Hobbies, Contact } from './components'

import './css/app.css'

class App extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <AboutMe/>
                <Education/>
                <Hobbies/>
                <Contact/>
            </div>
        )
    }
}

export default App