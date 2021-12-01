import React from "react";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Head from "next/head";

function battlecpe() {
  const BATTLE_CPE_DATA = {
    p1: "BATTLE CPE is a project I did in Practicum for Computer Engineering class at university. In this course, the content is about personal computer components and installation of modern operating systems, maintenance, and program development on modern operating systems. Programming at the hardware level Basic electronic circuit design and assembly tools The process of creating printed circuit boards basic electronic circuit assembly.",
    p2: "BATTLE CPE is 2D multi-direction shooter video game for 2-4 players and players. The player will take the role of a tank driver The rule of the game is to destroy the opposing tanks. When the side who scores the KILL points according to the game set will be the winner.",
    p3: "The hardware part is to create Joysticks to connect to the software, we use Microcontroller (At-mega 328p) as controller and use C language to program the firmware to the Microcontroller. JoyStricks simulates keyboard keys to control movements in the game.",
    p4: "As for Software, we used Game Engine (Construct 2) to develop this game. Construct is an HTML5-based 2D video game engine It is aimed primarily at non-programmers allowing quick creation of games through visual programming. After the development is complete, we deploy it on Google Firebase.",
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/logoNav.png" />
        <link rel="apple-touch-icon" href="/logoNav.png" />
        <title>Projects | BATTLE CPE</title>
      </Head>

      <Header></Header>
      <div className="projects-wrapper">
        <div className="head-projects">
          <h1>BATTLE CPE</h1>
          <a
            href="https://battle-cpe.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              name="btn-live-demo"
              className="btn-live-demo"
            >
              Live Demo
            </button>
          </a>
        </div>

        <div className="intro-projects">
          <div className="case_info">
            <h4>Idea</h4>
            <p>{BATTLE_CPE_DATA.p2}</p>
            <h4>Core Technologies</h4>
            <ul>
              <li>Construct 2</li>
              <li>C language for Microcontroller</li>
              <li>Google Firebase</li>
            </ul>
            <h4>Link & Resources</h4>
            <ul>
              <li>
                <a
                  href="https://battle-cpe.firebaseapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="https://ecourse.cpe.ku.ac.th/tpm/project/practicum-61s#group-7"
                  target="_blank"
                  rel="noreferrer"
                >
                  01204223 Practicum for Computer Engineering
                </a>
              </li>
            </ul>
          </div>
          <div className="case-pic">
            <img src="/images/battle_cpe_gif.gif" alt="pj_pic" />
          </div>
        </div>

        <section className="details-container">
          <div className="img-con">
            <img src="/images/battle_cpe_4.jpg" alt="pj_pic" />
          </div>
          <div className="text-con">
            <h2>About</h2>
            <p>{BATTLE_CPE_DATA.p1}</p>
          </div>
        </section>

        <section className="details-container">
          <div className="text-con">
            <h2>Hardware</h2>
            <p>{BATTLE_CPE_DATA.p3}</p>
          </div>
          <div className="img-con">
            <img src="/images/battle_cpe_5.jpg" alt="pj_pic" />
          </div>
        </section>

        <section className="details-container">
          <div className="img-con">
            <img src="/images/battle_cpe_1.png" alt="pj_pic" />
          </div>
          <div className="text-con">
            <h2>Software</h2>
            <p>{BATTLE_CPE_DATA.p4}</p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default battlecpe;
