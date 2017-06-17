import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Form from './pages/form'

const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <header className="avenir bg-black-80 pv2 ph4 white-60">
          <h1>Training Video Management</h1>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/videos/new" component={Form} />
      </div>
    </BrowserRouter>
  )
}

export default App
