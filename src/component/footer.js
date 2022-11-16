import { FaGithubSquare,FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className=" text-center text-lg-start mt-3 mb-0 ">
             <div className="d-flex justify-content-center w-100 my-5s mt-10rem   ">
                 <a
                    href="https://www.linkedin.com/in/teddybengoto/"
                    target="_blank" 
                    rel="noreferrer"
                    className="color-black text-black "
                 > 
                    <FaLinkedin size="2em" aria-label="Linkedin icon"/>
                 </a>

                 <a
                    href="https://github.com/teddybengoto"
                    target="_blank"
                    rel="noreferrer"
                    className="color-black text-black"
                 >
                    <FaGithubSquare size="2em" aria-label="Github icon"/>
                 </a>
                 
              </div>    
            <div className="text-center text-white py-3  ">Copyright © 2022 : Teddy BENGOTO</div>
        </footer>
    );
}

export default Footer;
