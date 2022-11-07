import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';


class Skills extends React.Component {
    render() {
                
      return (
          <div className="card  ms-4 me-3 mt-3 px-0 py-0">
              <div className="card-body">

                <h3 className="">{this.props.title}</h3>
                <div className="d-flex justify-content-between flex-wrap me-4">
                
                {
                  
                  this.props.skills.map((skill,i)=>{
                    return(
                      <div key={i}>
                        <span>{skill.skill}</span>
                        <div className="d-flex  justify-content-between w-25">
                          <FontAwesomeIcon icon={faCircle} size="2xs" className={skill.level>=1?"bg-green":"bg-grey"} />
                          <FontAwesomeIcon icon={faCircle} size="2xs" className={skill.level>=2?"bg-green":"bg-grey"} />
                          <FontAwesomeIcon icon={faCircle} size="2xs" className={skill.level>=3?"bg-green":"bg-grey"} />
                          <FontAwesomeIcon icon={faCircle} size="2xs" className={skill.level>=4?"bg-green":"bg-grey"} />
                          <FontAwesomeIcon icon={faCircle} size="2xs" className={skill.level>=5?"bg-green":"bg-grey"} />
                        </div>
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
  export default Skills;
