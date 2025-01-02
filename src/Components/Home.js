import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>ANUJ DEOL</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          As a dedicated <b>Full Stack Developer</b>, I aim to leverage my
          expertise in <b>backend technologies</b> like{" "}
          <b>Java, Spring Boot, and Node.js</b>, along with my proficiency in{" "}
          <b>cloud-based applications</b> and <b>distributed systems</b>, to
          drive the development of innovative and scalable software solutions.
          I’m eager to collaborate with a dynamic team, utilizing my strong
          problem-solving skills and hands-on experience in{" "}
          <b>API development</b>, <b>cloud infrastructure</b>, and{" "}
          <b>security integrations</b> to contribute to advancing cutting-edge
          technology.
          <br />
        </div>

        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
