import './Navbar.css';

import Brand from  '../../assets/Rh-removebg-preview.png'
import { FaGithub , FaLinkedin , FaTwitter , FaWhatsapp ,FaBars , FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom"; 
import { useState } from 'react';

export default function Navbar(){
    const [open , setOpen] = useState(false)

    function HandleClick(){
        setOpen(!open);
    };
    return(
        <>
           <nav className='nav'>
                <div className='nav--item nav--brand'>
                    <img src={Brand} alt='logo'/>
                </div>

                <div className='nav--item nav--links'>
                
                <Link to="#">About</Link>

                <Link to="#">Tech Stacks</Link>

                <Link to="#">Projects</Link>

                <Link to="#">Contact</Link>
            
                    <a href='https://github.com/herdeyhorlarh'>
                     <FaGithub/>
                    </a>
                    <a href='https://x.com/rafee68691?t=aDVUAM0yWgiVArc0xj3oPg&s=09'>
                       <FaTwitter/>
                    </a>
                    <a href='#'>
                       <FaLinkedin/>
                    </a>

                    <a href='https://wa.me/qr/GPRMKDQZPNC2L1'>
                    <FaWhatsapp/>
                    </a>
                    </div>
                     <button className='open' onClick={HandleClick}>
                        {
                            open ?  <FaTimes/>  : <FaBars/>
                        }
                        </button>
                </nav>
           <nav className='mobileHeader'>
                {
                    open && (  <div className='mobileLink'>
                
                    <Link to="#" className='mobileLink'>About</Link>
    
                    <Link to="#" className='mobileLink'>Tech Stacks</Link>
    
                    <Link to="#"className='mobileLink'>Projects</Link>
    
                    <Link to="#" className='mobileLink'>Contact</Link>

                        <a href='https://github.com/herdeyhorlarh' className='mobilContLink'>
                          <FaGithub/>
                        </a>
                        <a href='https://x.com/rafee68691?t=aDVUAM0yWgiVArc0xj3oPg&s=09' className='mobilContLink'>
                        <FaTwitter/>
                        </a>
                        <a href='#' className='mobilContLink'>
                        <FaLinkedin/>
                        </a>
    
                        <a href='https://wa.me/qr/GPRMKDQZPNC2L1' className='mobilContLink'>
                         <FaWhatsapp/>
                        </a>
                        </div> )
                }

              
                </nav>
        
        </>
    )
}