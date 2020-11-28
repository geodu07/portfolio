import React, {Component} from 'react'
import ButtonLenguague from './buttonLenguague';
import './footer.css'

class Footer extends Component{
  render(){
    return(
      <div className='container-fluid m-0 p-0'>
      <div className='row align-items-center text-center bg-light footer'>
      <div className='col-3 col-lg-2'></div>
      <div className="col-6 col-lg-8">
        <p className='mb-0 '><small className='font-weight-lighter text-black-50'>Alguna frase que practique</small></p>
        
      </div>
      <ButtonLenguague handleLenguague={this.props.handleLenguague}/>
      
    </div>
    </div>
    )
  }
}
export default Footer