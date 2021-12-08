import React from "react";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Head from "next/head";
import img from "next/image";

function ams() {
  const AMS_DATA = {
    p1: "This project is one that I developed during my internship. I developed an account management app consisting of two parts. The first is that I developed an app that works on mobiles app so that I make it can run on the web app with Flutter 2. Second, I developed more functions for the application like service management system, maintenance and system maintenance (MA Services).",
    p2: `This project consists of two parts: The first thing is to develop applications built from Flutter 1 to run on Flutter 2 and support web applications. The web can support responsive and work properly.`,
    p3: `And the second thing is the development of the Maintenance Management System (MA Services). There are three parts to this system: Maintenance and Maintenance Management System Information Generation, Maintenance Services Management System Status Monitoring, and Annual Summary Review with graph
      the development tools are Flutter 2, Spring Boot, MySQL.
      `,
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/logoNav.png" />
        <link rel="apple-touch-icon" href="/logoNav.png" />
        <title>Projects | Account Management System</title>
      </Head>

      <Header></Header>
      <div className="projects-wrapper">
        <div className="head-projects">
          <h1>Account Management System</h1>
        </div>

        <div className="intro-projects">
          <div className="case_info">
            <h4>About</h4>
            <p>
              This project is one that I developed during my internship at{" "}
              <a
                href="https://www.isc-intl.com/"
                target="_blank"
                rel="noreferrer"
                className="isc_link"
              >
                Innovation Software Consulting Co Ltd.{" "}
              </a>
              I developed an account management app with Flutter 2.
            </p>
            <h4>Core Technologies</h4>
            <ul>
              <li>Flutter 2</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
            </ul>
            <h4>Link & Resources</h4>
            <ul>
              <li>
                <a href="/intern.pdf" target="_blank" rel="noreferrer">
                  Documents
                </a>
              </li>
            </ul>
          </div>
          <div className="case-pic">
            <img src="/images/isc_0.png" alt="pj_pic" />
          </div>
        </div>

        <section className="details-container">
          <div className="img-con">
            <img src="/images/isc_1.png" alt="pj_pic" />
          </div>
          <div className="text-con">
            <h2>What I do ?</h2>
            <p>{AMS_DATA.p2}</p>
          </div>
        </section>

        <section className="details-container">
          <div className="text-con">
            <h2>MA Services</h2>
            <p>{AMS_DATA.p3}</p>
          </div>
          <div className="img-con">
            <img src="/images/isc_2.png" alt="pj_pic" />
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ams;
