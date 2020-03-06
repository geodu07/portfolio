import React from 'react'
import './container.css'


function Container (props){
  return(
    
      <div className='container Layout'>
        
      {props.children}
        
      </div>  

    
  )
}

export default Container