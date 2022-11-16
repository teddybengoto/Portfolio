import React from "react";
import Badge from 'react-bootstrap/Badge';


class Experiences extends React.Component {
    render() {
        const experience = {...this.props.dataExperiences}
      return (
          <div className="d-flex justify-content-around align-items-center w-75 shadow mb-4  ">

            <div className=" d-flex justify-content-around align-items-center border  cercle ">
            <p  className="text-justify text-center">{experience.dateStart} à {experience.dateEnd}</p>
 
            </div>

            <div className="w-75 ms-4 me-3 mt-3 mb-3 shadow p-2 rounded text-white ">

                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="">{experience.title}</h3>
                </div>
                                
                <h4 className="text-green my-0">Missions: </h4>
                <ul className="mb-1">
                    {experience.experiences.map((experience,i)=>{
                        return(
                            <li  key={i}>{experience}</li>
                        )
                    })}
                </ul>
                <div className="d-flex align-items-center">
                <h5 className="text-green my-0 me-2">Compétences: </h5>

                <div className="d-flex flex-wrap">
                    {experience.competances.map((competance,i)=>{
                        return(
                            <Badge className="my-1 me-1" key={i} pill bg="success">
                                {competance }
                            </Badge>
                        )
                    })}                                                                               
                </div>               

                </div>               
                
            </div>
                    
          </div>
         
      );
    }
  }
  export default Experiences;
