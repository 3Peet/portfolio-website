import "../styles/globals.css";
import "../styles/App.css";
import "../styles/Header.css";
import "../styles/Banner.css";
import "../styles/About.css";
import "../styles/Contact.css";
import "../styles/Footer.css";
import "../styles/Projects.css";
import "../styles/ProjectsPage.css";

//FontAwesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
