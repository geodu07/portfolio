import React from 'react'
import './layout.css'

function Layout (props){
  return(
    <section>
      {props.children}
    </section>
  )
}

export default Layout