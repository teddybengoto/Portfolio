import { Image } from "react-bootstrap";
import photoProfil from "../img/profil.webp"



const About = (abouts)=>{

    return(
        <div className="d-flex justify-content-around align-items-center shadow w-75 mb-5 ">
            <Image className="profilImg me-5 ms-3" src={photoProfil} alt="photo profil Teddy BENGOTO"/>
            <div className="w-75 p-2 shadow ms-4 me-3 mt-3 mb-3 rounded text-white ">
                {
                abouts.abouts.map((about,i)=>{

                    return ( <p key={i} >
                        {about} </p>)
                })
                
            }
            </div>

        </div>
    
    )

}

export default About;
