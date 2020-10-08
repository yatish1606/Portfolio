import React from 'react'

import {AboutMe, Home} from './components'
// import Home from './components/Home'

class App extends React.Component {
    render() {
        return (
            <div>
                hi
                <Home/>
                <AboutMe/>
            </div>
        )
    }
}

export default App