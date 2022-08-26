import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import routes from './routes'
import CustomRoute from  "./CustomRoute";
const Routers = () => (
  <Router>
      <Switch>
      {routes.map((route, i) => {
          return <CustomRoute key={i} {...route}/>
      })}
      </Switch>
  </Router>
)

export default Routers
