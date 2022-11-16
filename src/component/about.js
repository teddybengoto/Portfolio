import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import photoProfil from "../img/profil.webp"



const About = (abouts)=>{

    console.log("abouts: ",abouts.abouts);

    return(
            <div className="d-flex flex-column justify-content-around align-items-center shadow w-75 mb-5 ">
              <Image className="profilImg me-5 ms-3" src={photoProfil} alt="photo profil Teddy BENGOTO"/>
              <div className="w-75 p-2 shadow ms-4 me-3 mt-3 mb-3 rounded text-white ">
              {
                    abouts.abouts.abouts.map((about,i)=>{

                        return ( <p key={i} >
                           {about} </p>)
                    })
                    
                }
              </div>
              <div className="d-flexd w-75 p-2 my-4 align-items-center justify-content-center rounded shadow text-white">

                <div className="me-2" >
                    <FontAwesomeIcon
                    icon={faPhone}
                    ize="lg"
                    className="text-green"
                    />
                    <span  >&nbsp;&nbsp; {abouts.abouts.phone} </span> 
                </div>
                <div className="me-2">
                    <FontAwesomeIcon
                    icon={faEnvelope}
                    ize="lg"
                    className="text-green"
                    />
                    <span>&nbsp;&nbsp; {abouts.abouts.mail}</span> 
                </div>
                <div >
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        ize="lg"
                        className="text-green"
                    />
                    <span >&nbsp;&nbsp;{abouts.abouts.adresse} </span>
                </div> 

                </div>

            </div>
    
    )

}

export default About;

{
        
    /* <div className="d-flex flex-column justify-content-between shadow mb-4  ">
        <div className="d-flex align-items-center justify-content-between  ">
     
        <Image className="profilImg" src={photoProfil} alt="photo profil Teddy BENGOTO"/>

            <div className="text-white w-50">
                {
                    abouts.abouts.map((about,i)=>{

                        return ( <p key={i} >
                           {about} </p>)
                    })
                    
                }
               
            </div>
        

        </div>
       

            </div>*/}