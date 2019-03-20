import React from 'react'

import './landing.css'
import Icons from '../../icons/component/icons';

const Landing = (props)=>(
  <main className='container'>
    <div className='row justify-content-center align-items-start Landigrow'>
      <div className='col-12 col-md-12 col-lg-6 text-left '>
        <h1 className='font-weight-bold mb-2 sm'>Georgie Duarte</h1>
        <h2 className='font-weight-light mb-3'>Electrical Engineer & Programmer</h2>
        <Icons size={30}/>  
      </div> 
    </div>
  </main>
)

export default Landing