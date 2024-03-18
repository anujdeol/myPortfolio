import React from 'react';
import { FaGitAlt, FaReact, FaAws, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiSpring, SiSpringoot } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Bootstrap: <FaBootstrap />,
    Java: <FaJava />,
    SpringBoot: <SiSpring />,
    AWS: <FaAws/>,
    React: <FaReact/>,
    SpringBoot: <SiSpringboot/>
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  );
};

export default Skills;
