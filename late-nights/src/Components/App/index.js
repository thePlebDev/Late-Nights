import React from 'react'
import {Switch, Route } from 'react-router-dom'

import Game from '../Game'


const App = ()=>{
  //THE NAV BAR SHOULD GO ABOVE THE FIRST SWITCH COMPONENT. EVERYTHING ELSE GETS A ROUTE COMPONENT
  return(
    <Switch>
      <Route exact path="/game" component={Game} />
    </Switch>
  )
}

export default App
