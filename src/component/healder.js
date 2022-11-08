import  '../css/css.css'
import React from "react";

class Healder extends React.Component {
    render() {
                
      return (

          <>
            <div className="header"> 
              <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand w-45 btn" href="/">
                    CV
                    </a>
                    <a className=" navbar-brand w-45 btn "  href="/project">
                    Projects
                    </a>
                </div>
              </nav>
            </div>
              
              
                             
          </>
         
      );
    }
  }
  export default Healder;


/*class Healder extends React.Component () {
   
    render() {
                
        return (<></>
            
           
        )
      }
}

export default Healder;*/
