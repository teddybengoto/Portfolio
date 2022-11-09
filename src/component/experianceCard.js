import React from "react";
import Badge from 'react-bootstrap/Badge';


class Experiences extends React.Component {
    render() {
      return (
          <div className="card  ms-4 me-3 mt-3 ">
              <div className="card-body">

                <h3 className="">{this.props.title}</h3>
                <p className="blue-text my-0">{this.props.dateStart} à {this.props.dateEnd}</p>
                <h4 className="blue-text my-0">Missions: </h4>
                <ul className="mb-0">
                    {this.props.experiences.map((experience,i)=>{
                        return(
                            <li  key={i}>{experience}</li>
                        )
                    })}
                </ul>
                <h5 className="blue-text my-0">Competances: </h5>

                <div className="d-flex justify-content-between">
                        {this.props.competances.map((competance,i)=>{
                            return(
                                <Badge className="my-1" key={i} pill bg="success">
                                {competance }
                               </Badge>
                            )
                        })}                                                                               
                </div>

              </div>
               
               
              
          </div>
         
      );
    }
  }
  export default Experiences;
