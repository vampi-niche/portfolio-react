import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Systems Designer",
          "Full Stack Developer",
          "Security Thinker"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
