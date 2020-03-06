import React from 'react'
import twitter from '../../icons/twitter.svg'
import github from '../../icons/github.svg'
import linkedin from '../../icons/linkedin.svg'
import email from '../../icons/email.svg'


const Icons = (props)=>(
  <div className='Icon align-items-end'>
    <a className='mr-4' href='https://twitter.com/geowdu' target='_blank'><img src={twitter} alt='twitter' width={props.size} height={props.size}/></a>
    <a className='mr-4' href='https://github.com/geowdu' target='_blank'><img src={github} alt='github' width={props.size} height={props.size}/></a>
    <a className='mr-4' href='https://www.linkedin.com/in/georgie-duarte-45b832134/' target='_blank'><img src={linkedin} alt='linkedin' width={props.size} height={props.size}/></a>
    <a className='mr-4' href='mailto:geo.du07@gmail.com' ><img className='mt-1' src={email} alt='email' width={props.size} height={props.size}/></a>
  </div>
)

export default Icons