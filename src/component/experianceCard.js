import React from "react";

class Experiences extends React.Component {
    render() {
      return (
          <div className="card  ms-4 me-3 mt-3 ">
              <div className="card-body">

                <h3 className="">{this.props.title}</h3>
                <p className="text-primary">{this.props.dateStart} à {this.props.dateEnd}</p>
                <h4 className="text-primary">Missions: </h4>
                <ul>
                    {this.props.experiences.map((experience,i)=>{
                        return(
                            <li  key={i}>{experience}</li>
                        )
                    })}
                </ul>
                <h5 className="text-primary">Competances: </h5>

                <div className="d-flex justify-content-between">
                        {this.props.competances.map((competance,i)=>{
                            return(
                                <div  key={i}>{competance}</div>
                            )
                        })}                                                                               
                </div>

              </div>
               
               
              
          </div>
         
      );
    }
  }
  export default Experiences;
