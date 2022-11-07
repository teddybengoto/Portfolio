import React from "react";
import Project from "../component/project";


class ProjectList extends React.Component {

    render() {

      return (
          <div className="d-flex justify-content-center align-items-center flex-wrap  ms-4 mt-3 ">
            <Project 
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            competances={["HTML","CSS","Git"]}
            title="Oh My Food"
            link="https://teddybengoto.github.io/Ohmyfood/"
            image="Ohmyfood.webp"
            />
            <Project 
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            competances={["SEO","CSS","HTML"]}
            title="La Panthère"
            link="https://teddybengoto.github.io/P4LaPanth-re/"
            image="agence-la-panthere.webp"
            />
            <Project 
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            competances={["Management project","nodeJS","React"]}
            title="Groupomania"
            />
            <Project 
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            competances={["Management project","nodeJS","React"]}
            title="Groupomania"
            />                               
          </div>
         
      );
    }
  }
  export default ProjectList;
