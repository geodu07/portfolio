import React, { Fragment } from 'react'
import { render } from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import  'popper.js'
import { BrowserRouter, Route} from 'react-router-dom'
import Me from '../pages/containers/me'

import Home from '../pages/containers/home'
import Header from '../pages/components/header'
const App = document.getElementById('App')

render(
  <BrowserRouter>
  <Fragment>
    <Header/>
    <Route exact path='/' component={Home}/>
    <Route exact path="/me" component={Me}/>    
  </Fragment>
  </BrowserRouter>
, App)