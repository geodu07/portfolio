import React from 'react'
import Skill from './skills';

function Profession (props){
  return(
   <div>
    <div className='row justify-content-center align-self-center mt-4 mb-4'>
            <div className='col-6 col-md-6 col-lg-5 align-self-center'>
            <h2 className='font-weight-bold'>{`${props.profession.title} Skills`}</h2>
            </div>
            <div className='img-container col-4 col-md-4 col-lg-2 align-self-start justify-content-center'>
              <img className='img-fluid' src={props.profession.photo} />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-8 col-md-10 col-lg-7'>
            <ul className='skill'>
              {
                props.profession.skill.map((item, i)=>{
                 return <Skill skill={item} key={i}/>
                })

              }
            </ul>
            </div>

            <div className='row justify-content-center mt-4'>
              <div className='col-8 col-md-10 col-lg-8 mb-5'>
              <p>In the case your company is based on <b>Colombia</b> I can go physically to your office. Outside those places I should do an online streaming.</p>
              <p>You could also hire me as <b>consultant</b> or <b>freelance</b>, let me know more details about your project.</p>
              <p>If you need help, send me an email to <a href='mailto:geo.du07@gmail.com'>geo.du07@gmail.com</a></p>
              </div>
            </div>
         </div>
         </div> 
  )
}
export default Profession