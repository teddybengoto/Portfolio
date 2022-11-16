import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase,faGears,faGraduationCap, faHandshakeAngle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

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
          
          case 'service':
            return <FontAwesomeIcon
                      icon={faHandshakeAngle}
                      size="lg"
                      style={{ color: 'white' }}
                    />

          case 'about':
            return <FontAwesomeIcon
                      icon={faQuestionCircle}
                      size="lg"
                      style={{ color: 'white' }}
                    />

          default:
            return '';

        }
    
      }
      return (
          <div className="d-flex justify-content-center align-items-center pt-4">
                <div className="icon d-flex justify-content-center align-items-center me-4  ">
                  {
                  getIcon(this.props.type) 
                  }
                </div>
                             
               <h2 className="text-white">{this.props.title}</h2>
          </div>
         
      );
    }
  }
  export default Subtitle;
