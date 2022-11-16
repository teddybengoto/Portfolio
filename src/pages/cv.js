import  '../css/css.css'

import Experiences from "../component/experianceCard";
import Subtitle from "../component/subtitle";
import Graduation   from "../component/graduationCard";
import Skills   from "../component/skills";
import SoftWare from '../component/software';

import dataExperiences from "../data/experience.json";
import graduations from '../data/graduation.json';
import skills from '../data/skills.json';
import contact from '../data/contact.json';
import About from '../component/about';
import Offer from '../component/offer';



function Cv() {
   
    return (
        <div className="mt-5 ">
            <section className="d-flex flex-column align-items-center justify-content-center pb-3 "

            id='presentation'
            >
             <Subtitle 
                    type="about"
                    title="À propos de moi"
                />
            <div className='d-flex justify-content-center align-items-center pt-4'>
                <About abouts={{...contact}}  />
            </div>

    
            </section>
            <section 
            className="d-flexd justify-content-center align-items-center pb-3 border-top border-bottom"
            id='experience'
            >

                {/*********************************************
                 * 
                 *     EXPERIENCES PROFESSIONNELLES
                 * 
                 **********************************************/}

                    <Subtitle 
                        type="experience"
                        title="EXPERIENCES PROFESSIONNELLES"
                    />
               
                <div className="d-flex flex-column justify-content-center align-items-center pt-4">
                {
                    dataExperiences.map((dataExperience,i)=>{
                        return(
                            <Experiences 
                               key={i}
                               dataExperiences={dataExperience}
                            />
                        )
                      }) 
                }

                </div>
                </section>

                <section
                    className="d-flexd justify-content-center align-items-center pb-3 bg-b border-bottom "
                    id='formation'
                >

               
                {/*********************************************
                 * 
                 *     Graduations
                 * 
                 **********************************************/}


                <Subtitle 
                    type="formation"
                    title="FORMATIONS"
                />
                <div className='d-flex flex-column justify-content-center align-items-center pt-4'>
                    
                    {
                        graduations.map((graduation,i)=>{
                           return( <Graduation
                                    key={i}
                                    graduation={graduation}
                                    />
                            );
                        })
                    }
                   
                </div>
                </section>

                {/*********************************************
                 * 
                 *     Skills
                 * 
                 **********************************************/}

                <section 
                   className="pb-3 border-bottom"
                   id='competences'>
                    <Subtitle 
                        type="competence"
                        title="COMPÉTENCES"
                    />
                    <div className="d-flex flex-column justify-content-center align-items-center pt-4">
    
                        <Skills 

                            skills = {skills}
                        
                        />
    
                        <SoftWare
                        title="LOGICIELS"
                        skills={["Visual studio","Visual studio code" , "Insomnia","Visual studio","Visual studio code" , "Insomnia"]}         
                        />
                    </div>
                    </section>
                    <section id='offer' className=' justify-content-center align-items-center border-bottom'>
                    <Subtitle 
                        type="service"
                        title="Ce que je propose"
                    />
                    <div className='d-flex justify-content-center align-items-center pt-4'>
                        <Offer offers={contact.offers} />
                    </div>
                </section>

        </div>
    );
}

export default Cv;
