import React, { useState } from "react";
import defaultImage from "../img/DefaultProject.webp"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Project =(project) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

             
      return (
        <>
            <div className="bg-blue">
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}

                >
                    <Modal.Header closeButton >
                    <Modal.Title className="text-green">{project.project.title}</Modal.Title>
                    {
                        !project.project.state?
                        <span className="text-danger ms-2"> Ce site est actuellement en maintenance </span>
                        : ""
                    }
                    
                    </Modal.Header>
                    <Modal.Body className="bg-blue text-white">
                    {project.project.description}
                    </Modal.Body>
                    {
                         project.project.features?
                        <Modal.Body className="bg-blue text-white">
                            <h2 className="text-green">Fonctionalités</h2>
                            <ul>
                                {
                                    project.project.features.map((feature,i)=>{
                                        return <li key={i}> {feature} </li>
                                    })    

                                }
                            
                            </ul>
                        
                        
                        </Modal.Body>: " "
                    }
                    <Modal.Footer className="bg-blue">

                    
                    {
                        project.project.urlTest?
                        <Button bg="primary" >
                            <a 
                                href={ project.project.urlTest} 
                                target="_blank"
                                className="d-flex align-items-center justify-content-center text-decoration-none text-white"
                                
                                >
                                Tester
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    size={"xs"}
                                    className="ms-1"
                                />
                                </a>
                        </Button>
                         : " "

                    }

                    {
                        project.project.urlCode?
                        <Button bg="primary" >
                            <a 
                                href={ project.project.urlCode} 
                                target="_blank"
                                className="d-flex align-items-center justify-content-center text-decoration-none text-white"
                                
                                >
                                Code
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    size={"xs"}
                                    className="ms-1"
                                />
                                </a>
                        </Button>
                         : " "

                    }

                    </Modal.Footer>
                </Modal>
            </div>
        
            <div className="text-white mx-2 px-2 my-2 w-25 text-black shadow rounded d-flex flex-column align-items-center justify-content-center project ">
                <Image
                    className="img w-75 mt-2"  
                    alt={project.project.title}      
                    src={project.project.image?require("../img/"+project.project.image):defaultImage}
                />
                <div className="w-80"> 
                    <h2 className="text-green"> {project.project.title} </h2>
                    <p>  {project.project.description}</p>
                </div>
                <div className="mb-2 d-flex justify-content-center align-items-center ">
                    <a onClick={handleShow}> savoir plus</a>
                </div>      
            </div>       
        </>
         
      );
    }
  export default Project;
