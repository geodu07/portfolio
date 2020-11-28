import React, {Component} from 'react'

class ButtonGroup extends Component{
    // state={
    //   role: 0
    // }
  handleclickEng = (ev) => {
    let idProfession = 0
this.props.handleProfession(idProfession)
  } 
  handleclickDev = (ev)=>{
    let idProfession = 1
this.props.handleProfession(idProfession)    
  }

  

  render(){
  return(
    <div className='row mr-2 mr-md-0'>
    <div className='col-3 offset-9 col-md-2 offset-md-10 mt-4 mr-4'>
      <div className="btn-group btn-group-sm mr-4" role="group" aria-label="Basic example">
        <button type="button" id='0' className="btn btn-light" onClick={this.handleclickEng}>Eng</button>
        <button type="button" id='1' className="btn btn-dark" onClick={this.handleclickDev}>Dev</button>
      </div>
    </div>
    </div>
  )
}
}
export default ButtonGroup