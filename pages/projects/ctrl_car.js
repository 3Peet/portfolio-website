import React from "react";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Head from "next/head";

function ctrl_car() {
  const CTRL_CAR_DATA = {
    p1: "This project is the development of a control car that can be controlled by hand. Using gloves to control as a signal to control the car The connection between the control car and the glove is use microcontroller in communication",
    p2: `Control Car With Hands is a project I did in the Embedded Systems class at university. In this course, the content is about Embedded microcontrollers, embedded programs, real-time operating systems, low-power computing, reliable system design, design methodologies, tool support, embedded multiprocessors, networked embedded systems, interfacing and mixed-signal systems.`,
    p3: `At present there are many devices that can control the movement in long distances or wireless movement. So there are more people interested in it. Which most of those devices are drone, remote control car, pilotless aircraft, etc. And we are interested in making a remote control car. The Embedded System course is set to use 4 boards to develop devices for communication. And then we study and learn the equipment regarding all parts of vehicles. In the end, we concluded that we would cut off the joystick, and we replace the joystick with hand control. In the car we will be equipped accessory for each devices can communicate with each other, And enhance the safety performance of the car.`,
    p4: `Use hands gesture to control the car instead of a joystick.
      
  
      The left hand is used to control the car's direction by The 3D tilting sensor on the glove. When you slop the left hand to the right, The car will turn right. And turn left when slop to the left.
      
      Forward and stop the car by opening and closing the palm of the right hand. The action can be detected by the light sensor on the right hand.
      
      The car can stop automatically when it encounters obstacles. the barrier can be caught by Ultrasonic Sensor. The system will stop the car when obstacles are too close.. `,
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/logoNav.png" />
        <link rel="apple-touch-icon" href="/logoNav.png" />
        <title>Projects | Control Car With Hands</title>
      </Head>

      <Header></Header>
      <div className="projects-wrapper">
        <div className="head-projects">
          <h1>Control Car With Hands</h1>
        </div>

        <div className="intro-projects">
          <div className="case_info">
            <h4>Idea</h4>
            <p>{CTRL_CAR_DATA.p1}</p>
            <h4>Core Technologies</h4>
            <ul>
              <li>NodeMCU ESP-32S</li>
              <li>PyUSB</li>
            </ul>
            <h4>Link & Resources</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/Tauhoo/Control-Car-With-Hands"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://ecourse.cpe.ku.ac.th/tpm/project/embedded-62s#group-14"
                  target="_blank"
                  rel="noreferrer"
                >
                  01204322 Embedded Systems
                </a>
              </li>
            </ul>
          </div>
          <div className="case-pic">
            <img src="/images/ctrl_car_gif.gif" alt="pj_pic" />
          </div>
        </div>

        <section className="details-container">
          <div className="img-con">
            <img src="/images/ctrl_car_pj_4.jpg" alt="pj_pic" />
          </div>
          <div className="text-con">
            <h2>About</h2>
            <p>{CTRL_CAR_DATA.p2}</p>
          </div>
        </section>

        <section className="details-container">
          <div className="text-con">
            <h2>Desciption</h2>
            <p>{CTRL_CAR_DATA.p3}</p>
          </div>
          <div className="img-con">
            <img src="/images/ctrl_car_pj_5.jpg" alt="pj_pic" />
          </div>
        </section>

        <section className="details-container">
          <div className="img-con">
            <img src="/images/ctrl_car_pj_6.jpg" alt="pj_pic" />
          </div>
          <div className="text-con">
            <h2>Features</h2>
            <p>Use hands gesture to control the car instead of a joystick.</p>
            <ul>
              <li>
                The left hand is used to control the car`&apos;`s direction by
                The 3D tilting sensor on the glove. When you slop the left hand
                to the right, The car will turn right. And turn left when slop
                to the left.
              </li>
              <li>
                Forward and stop the car by opening and closing the palm of the
                right hand. The action can be detected by the light sensor on
                the right hand.
              </li>
              <li>
                The car can stop automatically when it encounters obstacles. the
                barrier can be caught by Ultrasonic Sensor. The system will stop
                the car when obstacles are too close.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ctrl_car;
