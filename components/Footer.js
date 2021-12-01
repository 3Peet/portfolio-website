import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-footer">
      <div className="footer">
        <div className="footer-icon">
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
        <div className="footer-text">
          <p>
            Made with ❤️ by <b>Thanakrit Naprasert </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
