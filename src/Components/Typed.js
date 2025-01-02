import React from "react";
import Typewriter from "typewriter-effect";

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            "a Full Stack Software Developer",
            "Coding Instructor",
            "Splecialized in Backend and Cloud Technologies",
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
          effects: ["fadeIn", "typeOut", "fadeOut"],
        }}
      />
    </div>
  );
};

export default Typed;
