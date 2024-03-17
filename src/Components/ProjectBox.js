import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    CottageBookingApp: {
      desc:
        "Built a robust backend server with Node.js, Express, and Mongoose, utilizing RESTful APIs and MVC architecture for organized code flow. Integrated with React Client web for dynamic data rendering, enhancing user interaction. Managed MongoDB databases with MongoDB Compass, establishing connections using Mongoose. Implemented security features like nodemailer for email management and JWT authentication for session maintenance and user authentication.",
      github: "https://github.com/anujdeol/CottageBookingApp.git",
    },
    MovieFlex: {
      desc:
        "MovieFlex is a sleek web application revolutionizing online movie management portal. Featuring login/register functionality, secure authentication and authorization system with encrypted passwords (JWT token and Bycrypt), it ensures user data safety. Powered by Handlebars and Bootstrap on the frontend and Node.js, Express.js, and MongoDB on the backend, MovieFlex offers a seamless user experience. Its RESTful Web APIs efficiently handle data and populate movie information. Additionally, robust session management guarantees uninterrupted user access (using client-session, cookie).",
      github: "https://github.com/anujdeol/Node.js-MovieFlex-WebProject.git",
    },
    EcomJava: {
      desc:
        "Developed a dynamic E-commerce website using Java, Servlets, and JSP pages. Implemented backend logic, database connectivity, and business logic using Java and Hibernate ORM framework. Designed and created frontend user interfaces with JSP pages for product catalog, shopping cart, and order processing." ,
      github: "https://github.com/anujdeol/ecomProject-anujDeol-Java.git",
    },
    OtherProjects: {
      desc:
        "Explore additional mini projects on my GitHub account. i.e, OAuth 2.0, SpringBoot etc",
      github: "https://github.com/anujdeol",
    }
  };

  const project = desc[projectName];

  if (!project) {
    return null; 
  }

  const { desc: projectDesc, github: projectGithub } = project;
  const showGithubButton = projectGithub ? "block" : "none";

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{projectDesc}</p>
        <br />
        {showGithubButton === "block" && (
          <a href={projectGithub} target="_blank">
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
