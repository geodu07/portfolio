import React, {Component, Fragment} from 'react'


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
            <div id={projectName} className="carousel slide " data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target={`#${projectName}`} data-slide-to="0" className="active"></li>
                <li data-target={`#${projectName}`} data-slide-to="1"></li>
                <li data-target={`#${projectName}`} data-slide-to="2"></li>
              </ol>
            <div className="carousel-inner">
                {
                    this.props.data.covers.map((item, i)=>(
                    <div className={i==0?"carousel-item active":"carousel-item"} key={i} >
                    <img src={item} className="d-block w-100" alt="covers"/>
                    </div>
                    ))  
                }               
              </div>
                <a className="carousel-control-prev" href={`#${projectName}`} role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${projectName}`} role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>

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

