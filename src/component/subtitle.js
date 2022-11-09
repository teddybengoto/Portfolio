import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase,faGears,faGraduationCap } from '@fortawesome/free-solid-svg-icons';


class Subtitle extends React.Component {

    render() {

      let getIcon= (type)=>{

        switch (type) {

          case 'experience':
            return <FontAwesomeIcon
            icon={faBriefcase}
            size="lg"
            style={{ color: 'white' }}
           />

          case 'competence':
          return <FontAwesomeIcon 
                icon={faGears}
                size="lg"
                style={{ color: 'white' }}
           />

          case 'formation':
          return <FontAwesomeIcon 
                    icon={faGraduationCap}
                    size="lg"
                    style={{ color: 'white' }}
                 />
                    
          default:
            return '';

        }
    
      }
      return (
          <div className="d-flex justify-content-start align-items-center  ms-4 mt-3 ">
                <div className="icon rounded-circle bg-blue d-flex justify-content-center align-items-center me-2">
                  {
                  getIcon(this.props.type) 
                  }
                </div>
                             
               <h2>{this.props.title}</h2>
          </div>
         
      );
    }
  }
  export default Subtitle;
