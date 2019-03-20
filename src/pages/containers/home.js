import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Header from '../components/header'
import Landing from './landing';



class Home extends Component{
  render(){
    return(
      <HomeLayout>
        <Header/>
        <Landing/>
      </HomeLayout>
    )
  }
}

export default Home