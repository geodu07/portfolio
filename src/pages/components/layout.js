import React from 'react'
import './layout.css'

function Layout (props){
  return(
    <div className='Layout m-0 p-0'>
      
        
      {props.children}
        
     

    </div>
  )
}

export default Layout