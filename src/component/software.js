import React from "react";

class SoftWare extends React.Component {
    render() {
                
      return (
          <div className="card  ms-4 me-3 mt-3 ">
              <div className="card-body">

                <h3 className="">{this.props.title}</h3>
                <div className="d-flex justify-content-between flex-wrap me-5">
                
                {
                  
                  this.props.skills.map((skill,i)=>{
                    return(
                      <div key={i} className="d-flex  justify-content-between w-25">
                        <span>{skill}</span>
                        
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
