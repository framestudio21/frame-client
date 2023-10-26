import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/about.module.css";

import framestudiologo from "../image//frame-studio-1.svg";

import admin from "../image/people.png";

import Navbar from "../components/navbar";


export default dynamic(() => Promise.resolve(About), { ssr: false });
const About = () => {
  return (
    <>
    <Head>
      <title>FRAME STUDIO - ABOUT</title>
      <meta name="description" content="Error of 404"/>
    </Head>
      <Navbar/>
        <div className={styles.mainbody}>
                <Image
              className={styles.aboutlogo}
              src={framestudiologo}
              alt="Frame Studio Logo"
              loading="lazy"
              unoptimized
              width={300}
              height={150}
            />

          <div className={styles.paragraphsection}>
            <div className={styles.paragraphheader}>Visual designer</div>
            <div className={styles.paragraphtext}>
              <span className={styles.hello}>Hello !</span>
              <br />
              We are a group of people, work as a
              <span>visual designer and website developer</span> based in
              kolkata, India. We are passionate abou making detailed, interative
              and created designs, regardless of the medium, we are working
              with.
              <br />
              We are passionate with other topics that interest us.
            </div>
          </div>

          <div className={styles.paragraphheader}>About Us</div>

          <div className={styles.member}>
            <div className={styles.person}>
              <div className={styles.image}>
                <Image
                  className={styles.memberimg}
                  src={admin}
                  alt="Sumit"
                  width={0}
                  loading="lazy"
                />
              </div>
              <div className={styles.person1}>
                <p className={styles.name}>SUMIT KUMAR DUARY</p>
                <p className={styles.position}>OWNER & CREATOR</p>
                <br />
                <p className={styles.work}>
                  He professionally work as an Advocate. In passion work as a
                  Graphics Designer.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.member}>
            <div className={styles.person}>
              <div className={styles.image}>
                <Image
                  className={styles.memberimg}
                  src={admin}
                  alt="Gourav"
                  width={0}
                  loading="lazy"
                />
              </div>
              <div className={styles.person2}>
                <p className={styles.name}>GOURAV DUARY</p>
                <p className={styles.position}>CO-PARTNER</p>
                <br />
                <p className={styles.work}>
                  He professionally work as an Web Developer. In passion work as a
                  Graphics Designer.
                </p>
                <p className={styles.cvlink}>
                  <Link className="address" href="#">
                    <button>portfolio.com</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};
