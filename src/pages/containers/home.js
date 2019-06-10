import React, { Component } from 'react'
import HomeLayout from '../components/layout'
import Landing from '../components/landing';



class Home extends Component{
  render(){
    return(
      <HomeLayout>
        <Landing/>
      </HomeLayout>
    )
  }
}

export default Home