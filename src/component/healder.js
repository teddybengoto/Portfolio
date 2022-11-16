import  '../css/css.css'
import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Healder =()=> {
   

      const navigate = useNavigate();
      const [page, setpage]= useState(false);

      const handleClick =(e)=>{
        e.preventDefault();
        setpage(!page);

      }

      useEffect(()=>{
        page?navigate("/project"):navigate("/")
      },[page])

                
      return (

          <div >
             <div  className="d-flexd justify-content-center align-items-center header  rounded-5 fixed-top"> 
              
             <Navbar collapseOnSelect expand="lg" variant="light">
                <Container  >
                  <Navbar.Brand  className='text-white ms-1' >Teddy BENGOTO</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="me-auto text-white">
                  <Nav.Link className='text-white bold' onClick={handleClick}> {!page?"Projects":'Accueil'}</Nav.Link>
                    {
                    !page?
                      <>
                        <Nav.Link className='text-white bold' href="#presentation">Présentation</Nav.Link>
                        <Nav.Link className='text-white bold' href ="#experience">Experience</Nav.Link>
                        <Nav.Link className='text-white bold' href="#formation">Formation</Nav.Link>
                        <Nav.Link className='text-white bold' href="#competences">Compétences</Nav.Link>
                        <Nav.Link className='text-white bold' href="#offer">Service</Nav.Link>
                      </>
                    :""
                    }

                  </Nav>
                  </Navbar.Collapse>
                  <Navbar.Brand  className='text-white ms-1' href="https://drive.google.com/file/d/1_EPRHhTuGaNYz9iBgIa2ijihf4rYQuxe/view?usp=sharing">
                    Cv
                    <FontAwesomeIcon icon={faDownload} size="2xs"  />
                    
                  </Navbar.Brand>
                </Container>
             </Navbar>            

            </div>           
          </div>
         
      );
  }
  export default Healder;

