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
            Hi there, my name is Anuj Deol, and I live in Toronto, Canada. I'm a
            Full Stack Developer with a strong academic and professional
            background. I hold a Bachelor's degree in Computer Science and have
            recently completed my Post-Graduate program in Information
            Technology Solutions at Humber College. With three years of
            industrial experience as a Software Developer, I’ve worked on
            designing and implementing innovative software solutions across
            various domains. I’m passionate about building scalable, efficient,
            and user-friendly applications while continuously learning and
            growing in the ever-evolving tech landscape.
            <br />
            <br />
            Programming Languages: <b>Java</b>, <b>JavaScript</b>, <b>SQL</b>,{" "}
            <b>Python</b> <br />
            Frameworks: <b>Node.js</b>, <b>Spring Boot</b>, <b>Django</b>,{" "}
            <b>React</b>, <b>Angular</b> <br />
            Database Management: <b>MongoDB</b>, <b>MySQL</b> <br />
            Backend Technologies:{" "}
            <b>
              AWS (Serverless framework, Lambda, S3 Buckets, API Gateway,
              CloudFront)
            </b>
            , <b>JWT Authentication</b>, <b>OAuth 2.0, Okta Auth0</b>,{" "}
            <b>Microservices</b> <br />
            Others: <b>Thymeleaf</b>, <b>Spring Data JPA</b>,{" "}
            <b>Spring Security</b>, <b>Hibernate</b>, <b>Spring Validation</b>,{" "}
            <b>MVC Architecture</b> <br />
          </p>{" "}
          <br></br>
          <p>
            <br></br>
            <h1>
              <b>EXPERIENCE</b>
            </h1>{" "}
            <br />
            <b>Software Developer Intern</b> <br />
            Fable | Jan 2024 - Present | Toronto, Canada <br />
            Technologies: Node.js, AWS (Serverless, Lambda, S3), MongoDB, Jest,
            Weebhook, Okta Auth0 Integration <br />
            <br />
            <b>Software Engineer</b> <br />
            Tata Consultancy Services (TCS) | Nov 2020 - July 2022 | Noida,
            India <br />
            Technologies: Java, Spring Boot, Hibernate, JUnit, RESTful web
            services and APIs, Spring Security, MVC Architecture, OAuth 2.0{" "}
            <br />
            <br></br>
            <b>Coding Instructor</b> <br />
            Code Ninjas | Sept 2024 - Present | Toronto, Canada <br />
            Technologies: Java, JavaScript, C# Unity, OOP Programming
            <br />
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
