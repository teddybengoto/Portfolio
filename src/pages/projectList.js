import React from "react";
import Project from "../component/project";
import dataProjects from "../data/project.json";



const ProjectList =()=> {


      return (
          <div className="d-flex justify-content-center align-items-center flex-wrap  ms-4 mt-5 pt-4 ">
            {
              
              dataProjects.map((project,i)=>{
                return(
                  <Project 
                     key={i}
                     project={{...project}}

                  />
              )

            })
           }                         
          </div>
         
      );
    }

  export default ProjectList;
