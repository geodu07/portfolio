import React, { Component, Fragment } from 'react'
import HomeLayout from '../components/layout'
import Landing from '../components/landing';
import Header from '../components/header';
import Footer from './footer';



class Home extends Component{
  render(){
    return(
      <div>
        <HomeLayout>
        <Header/>
        <Landing/>
        <Footer handleLenguague={this.handleLenguague} />
        </HomeLayout>
      </div>
    )
  }
}

export default Home