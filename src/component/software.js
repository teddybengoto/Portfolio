import React from "react";
import { Badge } from "react-bootstrap";

class SoftWare extends React.Component {
    render() {
                
      return (
          <div className="card  ms-4 me-3 mt-3 mb-2 ">
              <div className="card-body">

                <h3 className="">{this.props.title}</h3>
                <div className="d-flex justify-content-betweend flex-wrap ">
                
                {
                  this.props.skills.map((skill,i)=>{
                    return(
                      <div key={i} className="d-flex  justify-content-between ">
                        <Badge className="mb-1" key={i} pill bg="info">
                                {skill}
                        </Badge>
                        
                      </div>
                    )
                  })
                }
                </div>
                
              </div>
                             
          </div>
         
      );
    }
  }
  export default SoftWare;
