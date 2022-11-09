import React from "react";
import profilPic from "../img/profil.webp"
import { FaGithubSquare,FaLinkedin } from "react-icons/fa";
import Image from 'react-bootstrap/Image'

class ComplementInfo extends React.Component {
    render() {
                
      return (
          <div className="">
              <div className="d-flex justify-content-around my-4">
                  <h2 className="text-white text-center">TEDDY BENGOTO</h2>
              </div>
              <div className="d-flex justify-content-around my-5">
                 <Image className="" src={profilPic} alt="photo profil Teddy BENGOTO" />
              </div>

              <div className=" ms-2 my-5">
                  <h3 className="text-white my-3">CONTACTS</h3>
                  <p><span  className="text-white">Tel :</span> 07 50 18 95 20 </p>
                  <p><span className="text-white">E-mail :</span> teddybengoto@gmail.com </p>
                  <p><span className="text-white">Adresse :</span> 3 Rue Jean Aubry, Tours France </p>  
              </div>

              <div className=" ms-2 ">
                  <h3 className="text-white my-3">CENTRES D’INTÉRÊTS ET AUTRES INFORMATIONS</h3>
                  <ul>
                        <li >Football </li>
                        <li >Documentaire </li>
                        <li >Nouvelles technologies </li>
                  </ul>

              </div>

              <div className=" ms-2">
                  <ul>
                        <li > <span className="fw-bold">Voyages : </span> Gabon, Espagne,
                                Belgique, Pays-Bas, Tunisie,
                                Irlande, Ghana. 
                        </li>
                        
                  </ul>

              </div>
              <p className="my-5"><span className="text-white fw-bold">Permis :</span> Oui </p>  

              <div className="d-flex justify-content-around w-50 my-5">
                 <a
                 href="https://www.linkedin.com/in/teddybengoto/"
                 target="_blank" 
                 rel="noreferrer"
                 > 
                    <FaLinkedin size="2em"/>
                 </a>

                 <a
                 href="https://github.com/teddybengoto"
                 target="_blank"
                 rel="noreferrer"
                 >
                    <FaGithubSquare size="2em"/>
                 </a>
                 
              </div> 
               
                             
          </div>
         
      );
    }
  }
  export default ComplementInfo;

