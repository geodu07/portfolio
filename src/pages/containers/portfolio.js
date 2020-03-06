import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Container from '../components/container';
import ButtonGroup from '../buttonGroup';
import Title from '../components/titleportfolio';
import Job from '../components/projects'
import Headers from '../components/header'
import Footer from './footer'

class Portfolio extends Component{
  
  handleProfession = (idProfession) =>{
    switch (idProfession){
      case 0:
        this.props.dispatch({
          type: 'ENG',
          payload: {
            theme: "navbar-light bg-white",
            professionId: 0
          }

        })
       
      break
      case 1:
       this.props.dispatch({
          type:'DEV',
          payload: {
            theme: "navbar-dark bg-dark",
            professionId: 1
          }

        })
        
      break   }
  }

  handleLenguague = (lenguague) =>{
    switch (lenguague){
      case 0:
        this.props.dispatch({
          type: 'EN',
        })
       
      break
      case 1:
       this.props.dispatch({
          type:'ES',
        })
        
      break   }
  }
  render(){
    return(
      <Fragment>
        <Headers/>
        <Container>
        <ButtonGroup handleProfession={this.handleProfession}/>
        <Title job={this.props.profession.title}/>
        {
          this.props.profession.portfolio.map((item)=>(
            <Job key={item.id} data={item} />
          ))
        }
        </Container>
        <Footer handleLenguague={this.handleLenguague}/>
      </Fragment>

    )
  }
}

function mapStateToProps (state,props){
  return {
    profession: state.load.profession[state.career.role],
    
  }
}
export default connect(mapStateToProps)(Portfolio)