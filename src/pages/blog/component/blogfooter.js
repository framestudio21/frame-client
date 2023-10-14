import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import $ from "jquery";
import {
  BiLogoGmail,
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoBehance,
} from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { BsGlobe, BsYoutube, BsDribbble, BsTwitter } from "react-icons/bs";
import { BiUpArrow } from "react-icons/bi";

import logo from "../../../image/spacelogowhite.svg";
import styles from "./style/blogfooter.module.css";
export default dynamic(() => Promise.resolve(Blogfooter), { ssr: false });

const Blogfooter = () => {

  // auto year update
  $(document).ready(function () {
    var year = new Date().getFullYear();
    $("#year").text(year);
  });

  return (
    <>
      <div className={styles.blogfootermainbody}>
        <div className={styles.blogfootertopsection}>
          <div className={styles.coloum1}>
            <Image
              src={logo}
              className={styles.logo}
              width={0}
              height={0}
              alt="frame-logo"
            />
            <div className={styles.paragraph}>
              we are a group of people, work as a visual designer and website
              developer based in kolkata, india. we are passionate about making
              detailed, interative and created designs, regardless of the
              medium, we are working with. we are passionate with other topics
              that interest us.
            </div>
            <div className={styles.socialicnons}>
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
              <Link href="https://framestudio.in/" className={styles.icons}>
                <BsGlobe className={styles.icon} />
              </Link>
              <Link href="#" className={styles.icons}>
                <BsYoutube className={styles.icon} />
              </Link>
            </div>
          </div>
          <div className={styles.coloum2}>
            <div className={styles.text}>
              subscribe
              <br />
              <span>and get 10% discount</span>
            </div>
            <div className={styles.subscribeform}>
              <form>
                <input
                  type="email"
                  placeholder="enter your email"
                  name="subscribeemail"
                />
                <button type="submit">subscribe</button>
              </form>
            </div>
          </div>
          <div className={styles.coloum3}>
            <div className={styles.menusection}>
              <div className={styles.menuheader}>menu</div>
              <div className={styles.menulist}>
                <Link href="#">
                  <div className={styles.menu}>Home</div>
                </Link>
                <Link href="#">
                  <div className={styles.menu}>graphic design</div>
                </Link>
                <Link href="#">
                  <div className={styles.menu}>website design</div>
                </Link>
                <Link href="#">
                  <div className={styles.menu}>ai art</div>
                </Link>
                <Link href="#">
                  <div className={styles.menu}>digital art</div>
                </Link>
                <Link href="#">
                  <div className={styles.menu}>photography</div>
                </Link>
                <Link href="#">
                  <div className={styles.menu}>blog</div>
                </Link>
              </div>
            </div>
            <div className={styles.informationsection}>
              <div className={styles.informationheader}>information</div>
              <div className={styles.informationlist}>
                <Link href="#">
                  <div className={styles.information}>about us</div>
                </Link>
                <Link href="#">
                  <div className={styles.information}>services</div>
                </Link>
                <Link href="#">
                  <div className={styles.information}>pricing</div>
                </Link>
                <Link href="#">
                  <div className={styles.information}>contact</div>
                </Link>
                <Link href="#">
                  <div className={styles.information}>support center</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogfooterbottomsection}>
            <div className={styles.leftside}>powered by frame studio</div>
            <div className={styles.centerside}><BiUpArrow/><div className={styles.text}>go on top</div></div>
            <div className={styles.rightside}>@ all right reserved by frame studio, {" "} <span id="year"></span></div>
        </div>
      </div>
    </>
  );
}