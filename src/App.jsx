import React from 'react'

import { Header, Home, AboutMe, Hobbies } from './components'

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
                <Hobbies/>
            </div>
        )
    }
}

export default App