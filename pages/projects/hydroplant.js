import React from "react";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Head from "next/head";
function hydroplant() {
  const HYDROPLANT_DATA = {
    p1: "HYDROPLANT is an IOT project that makes growing vegetables very easy by controlling various factors of hydroponics plants that affect plant growth from sensor reading and processing fertilization, water control, and temperature control. And there is a web application to view real-time and historical sensor values, as well as manual-control and other functions.",
    p2: `Nowadays, the cultivation of hydroponic vegetables is widely known because it is an exotic vegetable with the distinctive feature of not having to water the plant daily and easy to control environment suitable for growth. Control of devices through a network with the Internet of things, technology is more popular in agriculture. The organizer implemented the IoT technology to the environment control to suit the growth of hydroponic vegetables by using various microcontrollers and sensors to control the environment and then report the results to the web application and the system will analyze the growth of vegetables.`,
    p3: "As for Hardware, I have used 2 Microcontrollers which is ESP-32 and Arduino UNO 3 to read sensors such as EC, PH, air Temp, water Temp, water level, air humidity and controlling watering and fertilizing plants.",
    p4: "As for Software, I developed a Web Application to track the status of all sensors values and to monitor plant growth and data exchange between hardware and software using MQTT Protocol. Technologies used in web development include HTML, CSS, Javascript, NodeJs, Express, Socket.io, and Deploy on DigitalOcean (NGINX).",
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/logoNav.png" />
        <link rel="apple-touch-icon" href="/logoNav.png" />
        <title>Projects | Hydroplant</title>
      </Head>

      <Header></Header>
      <div className="projects-wrapper">
        <div className="head-projects">
          <h1>Hydroplant</h1>
        </div>

        <div className="intro-projects">
          <div className="case_info">
            <h4>Idea</h4>
            <p>{HYDROPLANT_DATA.p1}</p>
            <h4>Core Technologies</h4>
            <ul>
              <li>ESP-32 + Arduino UNO3</li>
              <li>MQTT</li>
              <li>Socket.io</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
            <h4>Link & Resources</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/3Peet/Hydroplant"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://ecourse.cpe.ku.ac.th/projar/project/details/1506/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Automated hydroponic system for vegetables green oak growth
                </a>
              </li>
            </ul>
          </div>
          <div className="case-pic">
            <img src="/images/hydroplant_gif.gif" alt="pj_pic" />
          </div>
        </div>

        <section className="details-container">
          <div className="img-con">
            <img src="/images/hydroplant_9.png" alt="pj_pic" />
          </div>
          <div className="text-con">
            <h2>About</h2>
            <p>{HYDROPLANT_DATA.p2}</p>
          </div>
        </section>

        <section className="details-container">
          <div className="text-con">
            <h2>Hardware</h2>
            <p>{HYDROPLANT_DATA.p3}</p>
          </div>
          <div className="img-con">
            <img src="/images/hydroplant_8.png" alt="pj_pic" />
          </div>
        </section>

        <section className="details-container">
          <div className="img-con">
            <img src="/images/hydroplant_10.png" alt="pj_pic" />
          </div>
          <div className="text-con">
            <h2>Software</h2>
            <p>{HYDROPLANT_DATA.p4}</p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default hydroplant;
