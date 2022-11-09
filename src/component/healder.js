import  '../css/css.css'
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Healder =()=> {
   

      const navigate = useNavigate();
      const [page, setpage]= useState(false);

      const handleClick =(e)=>{
        e.preventDefault();
        setpage(!page);
        //navigate("/project");
      }

      useEffect(()=>{
        page?navigate("/project"):navigate("/")
      },[page])

                
      return (

          <>
             <div  className="d-flex justify-content-centers align-items-center header mb-3"> 
              <Button 
                className="rounded-0 w-50 border-end "
                variant="secondary" 
                size='lg'
                active={!page}
                onClick={handleClick}
                >
                Cv
              </Button>
              <Button 
                className="rounded-0 w-50 border-start"
                variant="secondary" 
                size='lg'
                active={page}
                onClick={handleClick}
                >
                Projects
                

              </Button>
             

            </div>           
          </>
         
      );
  }
  export default Healder;


/*class Healder extends React.Component () {
   
    render() {
                
        return (<></>
            
           
        )
      }
}

export default Healder;*/
