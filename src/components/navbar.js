import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

import styles from "./styles/navbar.module.css";

import { AiOutlineMenu } from "react-icons/ai";

import spaceframelogowhite from "../image/spacelogowhite.svg";

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

const Navbar = () => {

  // toggle button
  const [isShown, SetIsShown] = useState(false);
  const handleClick = () => {
    SetIsShown(!isShown);
  };

  // auto year update
  const year = new Date().getFullYear();

  return (
    <>
      <div>
        <nav className={styles.mainnavbody}>
          <div className={styles.sidenav}>
            <button
              className={styles.sidenavbtn}
              onClick={handleClick}
            >
              <AiOutlineMenu className={styles.sidenavbtnicon} />
            </button>
            <Link href="/about">
              <Image
                src={spaceframelogowhite}
                className={styles.mainlogo}
                alt="Logo"
                width={0}
                height={0}
                optimized
                id="mainlogo"
              />
            </Link>
          </div>

          {/* full display navbar */}
          <div
            className={styles.navbody}
            style={{ display: isShown ? "flex" : "none" }}
          >
                <button className={styles.topsectionbtn} onClick={handleClick}>
                  close
                </button>

              <div className={styles.middlesection}>
                <Link href="/" rel="follow" className={styles.navlist}>
                  <li>home</li>
                </Link>
                <Link href="/aiart" rel="follow" className={styles.navlist}>
                  <li>ai art</li>
                </Link>
                <Link
                  href="/digitalart"
                  rel="follow"
                  className={styles.navlist}
                >
                  <li>digital art</li>
                </Link>
                <Link
                  href="/photography"
                  rel="follow"
                  className={styles.navlist}
                >
                  <li>photography</li>
                </Link>
                <Link href="/blog" rel="follow" className={styles.navlist}>
                  <li>blog</li>
                </Link>
                <Link href="/about" rel="follow" className={styles.navlist}>
                  <li>about</li>
                </Link>
                <Link href="/contact" rel="follow" className={styles.navlist}>
                  <li>contact</li>
                </Link>
              </div>
              
              <div className={styles.bottomsection}>
                Powered by frame studio
                <br />@ all rights reserved by frame studio. {year}
              </div>
          </div>
        </nav>
      </div>
    </>
  );
};
