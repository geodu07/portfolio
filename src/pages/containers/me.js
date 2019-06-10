import React, { Component } from 'react'
import Layout from '../components/layout';
import './me.css'
import yo from '../../../assets/yo.jpg'
import SwitchJob from '../../switch';

class Me extends Component{
  render(){
    return(
      <Layout>
        <div className='container'>
          <div className='row justify-content-end pr-sm-5'>
          <div className='col-4 col-md-1 align-self-center mt-2'>
          <SwitchJob/>
          </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-5'>
            <h2 className='font-weight-bold mb-5'>Electrical Engineer Skills</h2>
            <ul className='skill'>
              <li className="">
                <p className='mb-0'>Design Electronic Circuit</p>
              </li>
              <li className=''>
                <p className='mb-0'>Automation projects</p>
              </li>
              <li className="">
                <p className='mb-0'>PCB Design Prototype</p>
              </li>
              <li className="">
                <p className='mb-0'>3D Modeling</p>
              </li>
              <li className="">
                <p className='mb-0'>Microcontroller Programmer</p>
              </li>
              <li className="">
                <p className='mb-0'>Electrical projects</p>
              </li>
            </ul>
            </div>
            <div className='img-container col-3 align-self-center justify-content-center'>
              <img className='rounded img-fluid' src={yo} />
            </div>
            <div className='row justify-content-center mt-4'>
              <div className='col-8'>
              <p>In the case your company is based on <b>Colombia</b> I can go physically to your office. Outside those places I should do an online streaming.</p>
              <p>You could also hire me as <b>consultant</b> or <b>freelance</b>, let me know more details about your project.</p>
              <p>If you need help, send me an email to <a href='mailto:geo.du07@gmail.com'>geo.du07@gmail.com</a></p>
              </div>
            </div>
         </div>
        </div>
      </Layout>
    )
  }
}

export default Me