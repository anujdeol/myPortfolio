import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
const Footer = () => {
  return (
    <footer>
      <h4>Developed by anujDeol</h4>
      <div className='footerLinks'>
        <a href="https://github.com/anujdeol" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/anuj-deol" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:anujdeol007@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer