import  '../css/css.css'
import Experiences from "../component/experianceCard";
import PageTitle from "../component/pageTitle";
import Subtitle from "../component/subtitle";
import Graduation   from "../component/graduationCard";
import Skills   from "../component/skills";
import SoftWare from '../component/software';
import ComplementInfo from '../component/complementInfo';

function Cv() {
   

    return (
        <div className="d-flex">
        <aside className="w-25">
            < ComplementInfo />      

        </aside>
        <section>
        <PageTitle/>
         {/*********************************************
         * 
         *     EXPERIENCES PROFESSIONNELLES
         * 
         **********************************************/}

        <Subtitle 
            type="experience"
            title="EXPERIENCES PROFESSIONNELLES"
        />
        <Experiences 
            title="ETUDIANT ENTREPRENEUR"
            dateStart="Mars 2020"
            dateEnd="Octobre 2021"
            experiences={["Réalisation du business plan",
                "Management de projet",
                "Développeur Back-End"]}
            competances={["Management project","nodeJS","React"]}
        />
        <Experiences 
            title="ETUDIANT ENTREPRENEUR"
            dateStart="Mars 2020"
            dateEnd="Octobre 2021"
            experiences={["Réalisation du business plan",
                "Management de projet",
                "Développeur Back-End"]}
            competances={["Management project","nodeJS","React"]}
        />

        {/*********************************************
         * 
         *     FORMATIONS
         * 
         **********************************************/}


        <Subtitle 
            type="formation"
            title="FORMATIONS"
        />
        <Graduation 
            title="DÉVELOPPEUR WEB JAVASCRIPT"
            dateStart="Mars 2022"
            dateEnd="Octobre 2022"
            school="Openclassrooms"
        />
        <Graduation 
            title="ÉCOLE D’INGÉNIEUR EN INFORMATIQUE INDUSTRIEL"
            dateStart="2017"
            dateEnd="2021"
            school="Polytech Tours (Tours)"
        />
        <Graduation 
            title="LICENCE PRO AUTOMATISME RÉSEAU ET TÉLÉMAINTENANCE"
            dateStart="2016"
            dateEnd="2017"
            school="IUT de l'Aisne (Cuffies-France)"
        />
        <Graduation 
            title="DUT GÉNIE ÉLECTRIQUE ET INFORMATIQUE INDUSTRIEL"
            dateStart="2014"
            dateEnd="2016"
            school="IUT de l'Aisne (Cuffies-France)"
        />

         {/*********************************************
         * 
         *     COMPÉTENCES
         * 
         **********************************************/}


        <Subtitle 
            type="competence"
            title="COMPÉTENCES"
        />

         <Skills
            title="LANGAGES INFORMATIQUES"
            skills=  {[{"skill":"HTLM","level":"3"},{"skill":"Css","level":"3"},{"skill":"JS","level":"4"},{"skill":"C#","level":"3"},{"skill":"PHP","level":"2"},{"skill":"C","level":"4"},{"skill":"C++","level":"2"}, {"skill":"SQL","level":"3"}]}     
         />
         <Skills
            title="LES PLUS"
            skills=  {[{"skill":"Node JS","level":"3"},{"skill":"React","level":"2"},{"skill":"Express","level":"4"},{"skill":"NPM","level":"4"},{"skill":"AJAX","level":"2"},{"skill":"JQuery","level":"2"},{"skill":"mongoBD","level":"2"}, {"skill":"SQL","Git":"4"}]}     
         />
         <SoftWare
         title="LES PLUS"
         skills={["Visual studio","Visual studio code" , "Insomnia"]}         
         />

        </section>
        

        </div>
    );
}

export default Cv;
