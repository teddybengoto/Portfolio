import React from "react";
import { Badge } from "react-bootstrap";

class SoftWare extends React.Component {
    render() {
                
      return (    
          <div className="w-75 ms-4 me-3 mt-3 shadow p-2 text-white rounded">
              <div className="card-body">

                <h3 className="">{this.props.title}</h3>
                <div  className="d-flex  flex-wrap justify-content-between ">
                  {
                    this.props.skills.map((skill,i)=>{
                      return(
                          <Badge key={i} className="mb-1" pill bg="success">
                                  {skill}
                          </Badge>                  
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
