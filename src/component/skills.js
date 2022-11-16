import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';


class Skills extends React.Component {
    render() {

      const skills = this.props.skills;

      return (

          <div className="w-75 ms-4 me-3 mt-3 p-2 text-white shadow rounded">
              
            {

              skills.map((skill,i)=>{

                return (
                  <div  key={i}  className=" text-white">
                    <h3 className="">{skill.title}</h3>
                    <div className="d-flex flex-wrap  justify-content-between my-3">
                      {
                        skill.skills.map((skill,i)=>{

                          return(  
                            <div key={i} className=" shadow rounded">
                              <span>{skill.skill}</span>
                               <div> 
                                 <span className={skill.level>=1?"text-green me-1":"text-grey me-1"}> <FontAwesomeIcon icon={faCircle} size="2xs"/> </span>
                                 <span className={skill.level>=2?"text-green me-1":"text-grey me-1"}> <FontAwesomeIcon icon={faCircle} size="2xs"/> </span>
                                 <span className={skill.level>=3?"text-green me-1":"text-grey me-1"}> <FontAwesomeIcon icon={faCircle} size="2xs"/> </span>
                                 <span className={skill.level>=4?"text-green me-1":"text-grey me-1"}> <FontAwesomeIcon icon={faCircle} size="2xs"/> </span>
                                 <span className={skill.level>=5?"text-green me-1":"text-grey me-1"}> <FontAwesomeIcon icon={faCircle} size="2xs"/> </span>
                               </div>
                               
                            </div>)
                          
                        })
                        
                      }
                    </div>


                  </div>
                );
              })

            }
            </div>
                                                      
      );
    }
  }
  export default Skills;
