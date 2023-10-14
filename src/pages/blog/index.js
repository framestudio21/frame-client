import Navbar from "../../components/navbar"
import Blogfooter from "../../components/footer"

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import styles from "./style/bloghome.module.css"

import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsGlobe, BsTwitter } from "react-icons/bs";

export default dynamic(() => Promise.resolve(Blog), { ssr: false });
const Blog = () => {

// change color of like button
const [color, setColor] = useState("black")
const handlelikeClick = () => {
  setColor("red")
}
useEffect (() => {
  document.body.style.color = color
}, [color])

  return (
    <>
      <Head>
        <title>FRAME STUDIO - BLOG</title>
        <meta
          name="description"
          content="Varities of Digital Art Designs and order item."
        />
      </Head>
      <Navbar />
      <div className={styles.blogmainbody}>


        {/* blog card design */}
        {/* <div className={styles.blogcardbody}>
          <div className={styles.topsection}>
            <Image
              src="https://images.pexels.com/photos/5185446/pexels-photo-5185446.jpeg"
              alt="image"
              width={0}
              height={0}
              className={styles.blogcardimage}
              unoptimized
            />
            <Link href="#">
            <button className={styles.tagbtn}>Typography</button>
            </Link>
          </div>
          <div className={styles.middlesection}>
            <div className={styles.middle1}>
              <div className={styles.datesection}>wed sep 06 2023</div>
              <div className={styles.likesharesection}>
                <button onClick={handlelikeClick}><AiFillHeart/></button>
                <button><AiOutlineShareAlt/></button>
              </div>
            </div>
            <div className={styles.middle2title}>training manual</div>
            <div className={styles.middle3description}>The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls. This project looked at designing the first five sessions. These meetings will be conducted for adolescent girls in villages of Rajasthan to empower and support them. The content of the training manual includes a variety of topics ranging from uplifting the confidence of the girls to providing them sex education.</div>
          </div>
          <div className={styles.bottomsection}>
            <div className={styles.socialicon}>
              <Link href="#"><button className={styles.iconbtn}><BsFacebook/></button></Link>
              <Link href="#"><button className={styles.iconbtn}><BsInstagram/></button></Link>
              <Link href="#"><button className={styles.iconbtn}><BsTwitter/></button></Link>
              <Link href="https://framestudio.in/about"><button className={styles.iconbtn}><BsGlobe/></button></Link>
            </div>
            <Link href="#"><div className={styles.readmore}>read more</div></Link>
          </div>
        </div> */}

        {/* blog footer */}
        <Blogfooter/>
      </div>
    </>
  );
};
