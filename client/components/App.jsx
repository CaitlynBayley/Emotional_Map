import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Launch from './Launch'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import AddPin from './AddPin'
import ViewPins from './ViewPins'
import ViewAreas from './ViewAreas'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <ErrorMessage />
        <WaitIndicator />
        <div className='main-container'>
          <Route exact path='/' component={Launch} />
          <Route path='/view' component={ViewPins}/>
          <Route path='/add' component={AddPin} />
          <Route path='/area' component={ViewAreas} />

        </div>
      </div>
    </Router>
  )
}

export default App
