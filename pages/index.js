import Header from "/components/Header";
import Banner from "/components/Banner";
import About from "/components/About";
import Projects from "/components/Projects";
import Contact from "/components/Contact";
import Footer from "/components/Footer";

import Head from "next/head";

function App() {
  return (
    <div id="top">
      <Head>
        <link rel="icon" href="/logoNav.png" />
        <link rel="apple-touch-icon" href="/logoNav.png" />
        <title>Thanakrit Naprasert - Frontend Developer</title>
      </Head>

      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
