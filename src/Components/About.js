import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi there, my name is <b>Anuj Deol</b> and I am from Toronto, Canada.
            I'm a<b> Backend developer</b> and a final year college student
            pursuing <b>Information Technology Solutions @ Humber College</b>.{" "}
            <br />
            <br />
            Programming Languages: <b>Java</b>, <b>JavaScript</b>, <b>SQL</b>{" "}
            <br />
            Frameworks: <b>Node.js</b>, <b>Spring Boot</b>, <b>Express.js</b>,{" "}
            <b>React</b> <br />
            Database Management: <b>MongoDB</b>, <b>MySQL</b> <br />
            Backend Technologies: <b>AWS (Serverless framework, Lambda, S3 Buckets)</b>,{" "}
            <b>JWT Authentication</b>, <b>OAuth</b>, <b>Microservices</b> <br />
            Tools: <b>JIRA</b>, <b>Postman</b>, <b>Git/GitHub</b>,{" "}
            <b>Confluence</b>, <b>Visual Studio Code</b>, <b>IntelliJ IDEA</b>,{" "}
            <b>Eclipse</b>, <b>SpringToolSuit4</b>, <b>MongoDB Compass</b>,{" "}
            <b>Figma</b> <br />
            Others: <b>Thymeleaf</b>, <b>Spring Data JPA</b>,{" "}
            <b>Spring Security</b>, <b>Hibernate</b>, <b>Spring Validation</b>,{" "}
            <b>MVC Architecture</b> <br />
            <br />
            I’m excited to join a team that’s innovative and committed to
            advancing technology. <br />
          </p>{" "}
          <br></br>
          <p>
            <br></br>
            <h1><b>EXPERIENCE</b></h1> <br />
            <b>Software Developer Intern</b> <br />
            Fable | Jan 2024 - Present | Toronto, Canada <br />
            Technologies: Node.js, AWS (Serverless, Lambda, S3), MongoDB, Jest, Weebhook, Auth0 {" "}
            <br />
            <br />
            <b>Software Engineer</b> <br />
            Tata Consultancy Services (TCS) | Nov 2020 - July 2022 | Noida,
            India <br />
            Technologies: Java, Spring Boot, Hibernate, JUnit, RESTful web services and APIs, Spring Security, MVC Architecture, OAuth 2.0 <br />
          </p>
          <br />
          <b>Additionally,</b> I have a keen interest in exploring new
          technologies. <br />
          <br />
          <p>
            Furthermore, beyond coding, I love <b>travelling</b> to explore the
            world and <b>bike riding</b> to escape the infinite loops of coding!
            🌍🚴‍♂️🏍️🏔️
          </p>
        
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Technologies</h1>
      <div className="skills">
        <Skills skill="Node" />
        <Skills skill="SpringBoot" />
        <Skills skill="Express" />
        <Skills skill="React" />
        <Skills skill="MongoDb" />
        <Skills skill="AWS" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Postman" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
        <Skills skill="Java" />
      </div>
    </>
  );
};

export default About;
