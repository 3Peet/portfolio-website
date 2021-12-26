import React from "react";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Head from "next/head";

function crwn() {
  const CRWN_DATA = {
    p1: "This project uses React to build a front-end, Redux to manage states, and Firebase to create an authentication system and store user data into a database.",
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/logoNav.png" />
        <link rel="apple-touch-icon" href="/logoNav.png" />
        <title>Projects | Crwns Clothing</title>
      </Head>

      <Header></Header>
      <div className="projects-wrapper">
        <div className="head-projects">
          <h1>Crwns Clothing</h1>
          <a
            href="https://crwn-clothing-3peet.vercel.app/"
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
            <h4>About</h4>
            <p>
              Crwns Clothing is a fashion website store built with React and
              Redux. I learned the basics of using React and Redux from{" "}
              <a
                className="link"
                href="https://udemy.com/course/complete-react-developer-zero-to-mastery/"
                target="_blank"
                rel="noreferrer"
              >
                a course on Udemy
              </a>{" "}
              and I built this website based on what I learned.
            </p>
            <h4>Core Technologies</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Firebase</li>
            </ul>
            <h4>Link & Resources</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/3Peet/crwn-clothing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Complete React Developer (w/ Redux, Hooks, GraphQL)
                </a>
              </li>
            </ul>
          </div>
          <div className="case-pic">
            <img src="/images/crwn_pj_1.png" alt="pj_pic" />
          </div>
        </div>

        <section className="details-container">
          <div className="img-con">
            <img src="/images/react-redux-firebase.jpeg" alt="pj_pic" />
          </div>
          <div className="text-con">
            <h2>About</h2>
            <p>{CRWN_DATA.p1}</p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default crwn;
