import React from 'react'
import Typist from 'react-typist';
import './landing.css'
import Icons from '../../icons/component/icons';

const Landing = (props)=>(
  <main className='container mt-5'>
    <div className='row justify-content-center align-items-start Landigrow'>
      <div className='col-12 col-md-12 col-lg-6 text-left '>
        <h1 className='font-weight-bold mb-2 sm'>Georgie Duarte</h1>
        <h2 className='font-weight-light mb-3'>
          <Typist className="MyTypist" >
            <span>Electrical Engineer</span>
            <Typist.Backspace count={19} delay={500} />
            <span>Programmer</span>
            <Typist.Backspace count={10} delay={600} />
            <span>Electrical Engineer & Programmer</span>
          </Typist>
        </h2>
        <Icons size={30}/>  
      </div> 
    </div>
  </main>
)

export default Landing