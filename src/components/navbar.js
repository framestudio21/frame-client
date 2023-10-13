import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import $ from "jquery";

import styles from "./styles/navbar.module.css";

import { AiOutlineMenu } from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoBehance,
} from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { BsGlobe, BsYoutube, BsDribbble, BsTwitter } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

import { MdDesignServices, MdAddAPhoto, MdContacts } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiAdobeindesign } from "react-icons/si";

import framestudiologo from "../image/frame-studio-2.svg";
import framelogo from "../image/frame-logo.svg";
import roundlogo from "../image/roundlogoblack.svg";

import spaceframelogowhite from "../image/spacelogowhite.svg";
import spaceframelogoblack from "../image/spacelogoblack.svg";

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

const Navbar = () => {
  // const [navbody, setNavBody] = useState("hideNav");

  // const click = () => {
  //   if (navbody == "hideNav") setNavBody("showNav");
  //   else setNavBody("hideNav");
  // };

  $(document).ready(function () {
    // Hide div by setting display to none
    $("#closebtn").click(function () {
      $("#navbody").hide("slow");
    });

    // Show div by removing inline display none style rule
    $("#sidenavbtn").click(function () {
      $("#navbody").show("slow");
    });

    // Toggle div display
    // $("#sidenavbtn").click(function () {
    //   $("#navbody").toggle("slow");
    // });

  });

  $(document).ready(function () {
    var year = new Date().getFullYear();
    $("#year").text(year);
  });

  return (
    <>
      <div>
        <nav className={styles.mainnavbody}>
          <div className={styles.sidenav}>
            <button
              className={styles.sidenavbtn}
              // onClick={click}
              id="sidenavbtn"
            >
              <AiOutlineMenu className={styles.sidenavbtnicon} />
            </button>
            <Link href="#">
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
            // id={navbody}
            id="navbody"
          >
            <div className={styles.navlist}>
              <div className={styles.leftside}>
                <div className={styles.topsection}>
                  <Link href="#">
                    <Image
                      src={spaceframelogoblack}
                      className={styles.navbodylogo}
                      alt="Logo"
                      width={0}
                      height={0}
                      unoptimized
                    />
                  </Link>
                </div>
                <div className={styles.middlesection}>
                  <div className={styles.middle1}>
                    <span className={styles.name}>Frame Studio</span>
                    <br />
                    Graphic Studio <br />
                    Howrah, Kolkata
                    <br />
                    West Bengal, India
                  </div>
                  <div className={styles.middle2}>
                    telephone : +91 6290985252
                    <br />
                    info.framestudio21@gmail.com
                  </div>
                  <div className={styles.middle3}>
                    <Link href="#" className={styles.icons}>
                      <BiLogoFacebook className={styles.icon} />
                    </Link>
                    <Link href="#" className={styles.icons}>
                      <BiLogoInstagramAlt className={styles.icon} />
                    </Link>
                    <Link href="#" className={styles.icons}>
                      <BsTwitter className={styles.icon} />
                    </Link>
                    <Link href="#" className={styles.icons}>
                      <BiLogoGmail className={styles.icon} />
                    </Link>
                    <Link href="#" className={styles.icons}>
                      <BiLogoBehance className={styles.icon} />
                    </Link>
                    <Link href="#" className={styles.icons}>
                      <FaPinterestP className={styles.icon} />
                    </Link>
                    <Link href="#" className={styles.icons}>
                      <BsDribbble className={styles.icon} />
                    </Link>
                    <Link
                      href="https://framestudio.in/"
                      className={styles.icons}
                    >
                      <BsGlobe className={styles.icon} />
                    </Link>
                    <Link href="#" className={styles.icons}>
                      <BsYoutube className={styles.icon} />
                    </Link>
                  </div>
                </div>
                <div className={styles.bottomsection}>
                  powered by frame studio
                </div>
              </div>
              <div className={styles.rightside}>
                <div className={styles.topsection}>
                  <button className={styles.closebtn} id="closebtn">
                    close
                    {/* <AiFillCloseCircle className={styles.icon} /> */}
                  </button>
                </div>
                <div className={styles.middlesection}>
                  <Link href="/" rel="follow" className={styles.navlist}>
                    <li>home</li>
                  </Link>
                  <Link href="/graphic" rel="follow" className={styles.navlist}>
                    <li>Graphic Design</li>
                  </Link>
                  <Link href="/website" rel="follow" className={styles.navlist}>
                    <li>Website Design</li>
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
                  @ all rights reserved by frame studio.{" "}
                  <span className={styles.year} id="year"></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

{
  /* <div>
      <nav className={styles.navbody}>
        <div className={styles.container}>
          <button className={styles.hamburger} onClick={click}>
            <GiHamburgerMenu />
          </button>
          <div className={styles.logo}>
            <Image
              src={framelogo}
              className={styles.mainlogo}
              alt="Logo"
              width={0}
              height={0}
              onEmptied
            />
          </div>
        </div>
        <div className={styles.navlist} id={display}>
          <div className={styles.navlogo}>
            <Image 
            src={framestudiologo}
            alt="Logo" width={220} height={100} loading='lazy' unoptimized />
          </div>
          <ul>
            <Link href="/" rel="follow">
              <li>
                <AiFillHome className={styles.navicon} />
                HOME
              </li>
            </Link>
            <Link href="/graphic" rel="follow">
              <li>
                <MdDesignServices className={styles.navicon} />
                GRAPHIC DESIGN
              </li>
            </Link>
            <Link href="/website" rel="follow">
              <li>
                <CgWebsite className={styles.navicon} />
                WEB DESIGN
              </li>
            </Link>
            <Link href="/digitalart" rel="follow">
              <li>
                <SiAdobeindesign className={styles.navicon} />
                DIGITAL ART
              </li>
            </Link>
            <Link href="/aiart" rel="follow">
              <li>
                <AiFillRobot className={styles.navicon} />
                AI ART
              </li>
            </Link>
            <Link href="/photography" rel="follow">
              <li>
                <MdAddAPhoto className={styles.navicon} />
                PHOTOGRAPHY
              </li>
            </Link>
            <Link href="/about" rel="follow">
              <li>
                <AiFillInfoCircle className={styles.navicon} />
                ABOUT
              </li>
            </Link>
            <Link href="/contact" rel="follow">
              <li>
                <MdContacts className={styles.navicon} />
                CONTACT
              </li>
            </Link>
          </ul>
          <style jsx>
            {`
              #showNav {
                display: block;
              }
              #hideNav {
                display: none;
              }
            `}
          </style>
        </div>
      </nav>
    </div> */
}
