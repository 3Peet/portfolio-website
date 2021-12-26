import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import Link from "next/link";

const projectsData = {
  battleCPE:
    "BATTLE CPE is 2D multi-direction shooter video game for 2-4 players and players. The player will take the role of a tank driver The rule of the game is to destroy the opposing tanks. When the side who scores the KILL points according to the game set will be the winner.",
  hydrolant:
    "HYDROPLANT is a project that makes growing vegetables very easy by controlling various factors of hydroponics plants that affect plant growth from sensor reading and processing fertilization, water control, and temperature control. And there is a web application to view real-time and historical sensor values, as well as manual-control and other functions.",
  controlCar:
    "This project is the development of a control car that can be controlled by hand. Using gloves to control as a signal to control the car The connection between the control car and the glove is use microcontroller in communication The working principle is Left-hand tilt to make the car turn left, right-hand tilt to make the car turn right, hand open to making the car move forward, and a clenched fist to stop the car.",
  ams: "This project is one that I developed during my internship. I developed an application about account management and the function that I have received is the work part is a further development from the existing project is to develop the system to be able to work on the website (Web-Application) and add Service management system, maintenance and system maintenance (MA Services).",
  crwns:
    "Crwns Clothing is a fashion website store built with React and Redux. The purpose of this project is to learn how React and Redux work in managing states and to practice coding HTML CSS.",
};

// Image size -> 600 x 337 px
const BATTLE_CPE_IMG = [
  {
    image: "/images/battle_cpe_gif.gif",
  },
  {
    image: "/images/battle_cpe_1.png",
  },
  {
    image: "/images/battle_cpe_2.png",
  },
];

const CTRL_CAR_WITH_HAND_IMG = [
  {
    image: "/images/ctrl_car_gif.gif",
  },
  {
    image: "/images/ctrl_car_pj_1.jpg",
  },
  {
    image: "/images/ctrl_car_pj_2.jpg",
  },
  {
    image: "/images/ctrl_car_pj_3.jpg",
  },
];

const HYDROPLANT_IMG = [
  {
    image: "/images/hydroplant_gif.gif",
  },
  {
    image: "/images/hydroplant_1.png",
  },
  {
    image: "/images/hydroplant_2.png",
  },
  {
    image: "/images/hydroplant_3.png",
  },
  {
    image: "/images/hydroplant_4.png",
  },
  {
    image: "/images/hydroplant_5.png",
  },
  {
    image: "/images/hydroplant_6.png",
  },
  {
    image: "/images/hydroplant_7.png",
  },
  {
    image: "/images/hydroplant_8.png",
  },
];

const ISC_INTERN_IMG = [
  {
    image: "/images/isc_stack.png",
  },
  {
    image: "/images/isc_1.png",
  },
  {
    image: "/images/isc_2.png",
  },
  {
    image: "/images/isc_3.png",
  },
  {
    image: "/images/isc_4.png",
  },
  {
    image: "/images/isc_5.png",
  },
];

const CRWNS_IMG = [
  {
    image: "/images/crwn_1.png",
  },
  {
    image: "/images/crwn_2.png",
  },
  {
    image: "/images/crwn_3.png",
  },
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="topic-projects">
        <h2>PROJECTS</h2>
      </div>
      <div className="project-content">
        <div className="text-project">
          <div className="text-container">
            <div className="topic-project">
              <h2>BATTLE CPE</h2>
            </div>
            <div className="details-project">
              <p>{projectsData.battleCPE}</p>
            </div>
          </div>
          <div className="btn-project">
            <Link
              href="https://battle-cpe.firebaseapp.com/"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Live Demo
              </button>
            </Link>

            <Link href="/projects/battlecpe" passHref>
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Case study
              </button>
            </Link>
          </div>
        </div>

        <ImageSlider slides={BATTLE_CPE_IMG}></ImageSlider>
      </div>

      <div className="project-content">
        <div className="text-project">
          <div className="text-container">
            <div className="topic-project">
              <h2>Control Car with Hands</h2>
            </div>
            <div className="details-project">
              <p>{projectsData.controlCar}</p>
            </div>
          </div>
          <div className="btn-project">
            <a
              href="https://github.com/Tauhoo/Control-Car-With-Hands.git"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Github
              </button>
            </a>
            <Link href="/projects/ctrl_car" passHref>
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Case Study
              </button>
            </Link>
          </div>
        </div>
        <ImageSlider slides={CTRL_CAR_WITH_HAND_IMG}></ImageSlider>
      </div>

      <div className="project-content">
        <div className="text-project">
          <div className="text-container">
            <div className="topic-project">
              <h2>HYDROPLANT</h2>
            </div>
            <div className="details-project">
              <p>{projectsData.hydrolant}</p>
            </div>
          </div>
          <div className="btn-project">
            <a
              href="https://github.com/3Peet/Hydroplant"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Github
              </button>
            </a>

            <Link href="/projects/hydroplant">
              <a>
                <button
                  type="button"
                  name="btn-live-demo"
                  className="btn-live-demo"
                >
                  Case Study
                </button>
              </a>
            </Link>
          </div>
        </div>
        <ImageSlider slides={HYDROPLANT_IMG}></ImageSlider>
      </div>

      <div className="project-content">
        <div className="text-project">
          <div className="text-container">
            <div className="topic-project">
              <h2>Accounting Management System</h2>
            </div>
            <div className="details-project">
              <p>{projectsData.ams}</p>
            </div>
          </div>
          <div className="btn-project">
            <Link href="/projects/ams" passHref>
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Case Study
              </button>
            </Link>
          </div>
        </div>

        <ImageSlider slides={ISC_INTERN_IMG}></ImageSlider>
      </div>

      <div className="project-content">
        <div className="text-project">
          <div className="text-container">
            <div className="topic-project">
              <h2>Crwns Clothing</h2>
            </div>
            <div className="details-project">
              <p>{projectsData.crwns}</p>
            </div>
          </div>

          <div className="btn-project">
            <Link
              href="https://crwn-clothing-3peet.vercel.app/"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Live Demo
              </button>
            </Link>
            <a
              href="https://github.com/3Peet/crwn-clothing"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Github
              </button>
            </a>
            <Link href="/projects/crwn" passHref>
              <button
                type="button"
                name="btn-live-demo"
                className="btn-live-demo"
              >
                Case Study
              </button>
            </Link>
          </div>
        </div>

        <ImageSlider slides={CRWNS_IMG}></ImageSlider>
      </div>
    </div>
  );
}

export default Projects;
