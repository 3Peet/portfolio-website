import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header" id="header">
      <div className="container">
        <nav className="menu-bar">
          <div className="group">
            <Link href="/">
              <div className="navLogo">
                <Image src="/logoNav.png" alt="logo" layout="fill" />
              </div>
            </Link>
          </div>

          <ul className={click ? "group menu active" : " group menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link href="/#top" passHref>
                <a className="nav-link nav-link-fade-up">HOME</a>
              </Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link href="/#about" passHref>
                <a className="nav-link nav-link-fade-up">ABOUT</a>
              </Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link href="/#projects" passHref>
                <a className="nav-link nav-link-fade-up">PROJECTS</a>
              </Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link href="/#contact" passHref>
                <a className="nav-link nav-link-fade-up">CONTACT</a>
              </Link>
            </li>
          </ul>

          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
