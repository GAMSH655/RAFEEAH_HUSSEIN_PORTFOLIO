import './Projects.css'

import Calculator from '../../assets/face.png'
import Link from '../../assets/akar-icons_link-chain.png'
import GithubP from '../../assets/akar-icons_github-fill.png'
import { FaGithub , FaLink } from 'react-icons/fa'

export default function Projects(){
    const projectArry=[
        {
            projectImg: "Calculator",
            GithubLink:"https://herdeyhorlarh.github.io/myCalculator/",
            livelink : "https://github.com/herdeyhorlarh/myCalculator",
            projectIcon: "Link",
            githubIcon: "GithubP "
        }
    ]
    return(
        <>
            <h3 className='s-h1'> Projects </h3>
            {/* <p className='s-p'>  Things I’ve built so far </p> */}
              
              <div className="projectContainer">
                 <div className="projectBox">
                     <img src={Calculator} alt="" className='projectImg' />
                     <br />
                    <h2 className='card-paragraph'>Tech stack : HTML , JavaScript, CSS</h2>
                    <a href="https://herdeyhorlarh.github.io/myCalculator/" className="cardLink">github <FaGithub className='iconLink'/> </a>
                     <a href="https://github.com/herdeyhorlarh/myCalculator" className="cardLink"> live <FaLink  className='iconLink'/> </a>
                 </div>
                 <div className="projectBox">
                     <img src={Calculator} alt="" className='projectImg' />
                     <br />
                    <h2 className='card-paragraph'>Tech stack : HTML , JavaScript, CSS</h2>
                    <a href="https://herdeyhorlarh.github.io/myCalculator/" className="cardLink">github <FaGithub className='iconLink'/> </a>
                     <a href="https://github.com/herdeyhorlarh/myCalculator" className="cardLink"> live <FaLink  className='iconLink'/> </a>
                 </div>
                 <div className="projectBox">
                     <img src={Calculator} alt="" className='projectImg' />
                     <br />
                    <h2 className='card-paragraph'>Tech stack : HTML , JavaScript, CSS</h2>
                    <a href="https://herdeyhorlarh.github.io/myCalculator/" className="cardLink">github <FaGithub className='iconLink'/> </a>
                     <a href="https://github.com/herdeyhorlarh/myCalculator" className="cardLink"> live <FaLink  className='iconLink'/> </a>
                 </div>
              </div>
    
         
        </>
    )
}