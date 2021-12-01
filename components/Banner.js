import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useRive, useStateMachineInput } from "rive-react";

import { motion } from "framer-motion";
import Image from "next/image";

function Banner() {
  const STATE_MACHINE_NAME = "State Machine 1";
  const INPUT_NAME = "click";

  const { rive, RiveComponent } = useRive({
    src: "rive/boy_n_tree.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
    >
      <div className="banner" id="banner">
        <div className="text">
          <div className="intro-container">
            <div className="helloEmoji">
              <Image src="/helloEmoji.svg" alt="" layout="fill" />
            </div>
            <p className="intro-text"> Hello, I&apos;m</p>
          </div>

          <h1 className="name-text">THANAKRIT NAPRASERT</h1>

          <p className="detail-text">
            CREATIVE FRONT-END WEB DEVELOPER | EDUCATOR
          </p>

          <button
            type="button"
            name="btn-download-resume"
            className="btn-download-resume"
          >
            Download Resume
          </button>
          <br />
          <div className="social-icon-container">
            <a href="https://github.com/3Peet" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="github-icon social-icon"
                icon={faGithubSquare}
                size="lg"
              />
            </a>

            <a
              href="https://facebook.com/peet.99"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="facebook-icon social-icon"
                icon={faFacebookSquare}
                size="lg"
              />
            </a>

            <a
              href="https://twitter.com/mypeet096"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="linkin-icon social-icon"
                icon={faTwitterSquare}
                size="lg"
              />
            </a>
          </div>
        </div>

        <div className="animation-img">
          <RiveComponent onClick={() => onClickInput.fire()}></RiveComponent>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;
