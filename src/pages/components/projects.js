import React, {Component, Fragment} from 'react'
import { Carousel } from 'react-bootstrap'

class Job extends Component{
  render(){
    var jobstyle = {
      maxWidth: "50rem"
    }
    var projectName = null

    { projectName = this.props.data.title.replace(" ","-")
   
     }
    return(
      <Fragment>
        <div className='row justify-content-center my-3'>
      <div className="card my-4 " style={jobstyle}>
      <div className='row no-gutters '>
          <div className='col-md-6 '>
          <Carousel>
          {
            this.props.data.covers.map((item, i)=>(
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={item}
                  alt={`slide ${i}`}
                />
              </Carousel.Item>
            ))
          }    
          </Carousel>
          </div>

          <div className='col-md-6'>
            <div className="card-body">
              <h5 className="card-title">{this.props.data.title}</h5>
              <p className="card-text">{this.props.data.description}</p>
            </div>
          </div>    
        </div>
      </div>
      </div>
      </Fragment>
    )
  }
}

export default Job

