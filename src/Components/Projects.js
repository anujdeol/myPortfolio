import React from 'react';
import ProjectBox from './ProjectBox';
import CottageBookingImage from '../images/NewsletterImage.png';
import MovieFlexImage from '../images/WigglesImage.png';
import java from '../images/java.png';
import otherProjects from '../images/otherProject.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={MovieFlexImage} projectName="MovieFlex" />
        <ProjectBox projectPhoto={CottageBookingImage} projectName="CottageBookingApp" />
        <ProjectBox  projectPhoto={java} projectName="EcomJava" />
        <ProjectBox  projectPhoto={otherProjects} projectName="OtherProjects" />
      </div>
    </div>
  )
}

export default Projects;
