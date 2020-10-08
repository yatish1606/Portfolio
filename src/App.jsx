import React from 'react'

import { Header, Home, AboutMe } from './components'

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
            </div>
        )
    }
}

export default App