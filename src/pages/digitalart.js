import Navbar from "../components/navbar";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import styles from "../styles/digitalart.module.css";

import {
  BsArrowBarLeft,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";
import {
  AiOutlineCloseCircle
} from "react-icons/ai";

export default dynamic(() => Promise.resolve(Digitalart), { ssr: false });

const Digitalart = () => {
  // image view component
  const [data, setData] = useState({});
  const viewImage = (item) => {
    setData(item);
  };

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/digitalart";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data))
      .catch(() => router.push("/404"));
  }, []);

  // close button

  const close = () => {
    setData({});
  };

  return (
    <>
           <Head>
      <title>FRAME STUDIO - DigitlaArt</title>
      <meta name="description" content="Varities of Digital Art Designs and order item."/>
    </Head>
      <Navbar />
      <div className={styles.digitalartmainbody}>
      {data.thumbnail && (
          <div className={styles.imagedisplaydiv} onClick={close}>

            <div className={styles.leftside}>
            <button name="previous" className={styles.btn}>
              <BsArrowLeftCircle className={styles.icon} />
            </button>
            </div>

            <Image
              src={data.thumbnail}
              className={styles.image}
              width={0}
              height={0}
              alt={data.name}
            />

            <div className={styles.rightside}>
            <button name="close" onClick={close} className={styles.closebtn}>
              <AiOutlineCloseCircle className={styles.icon} />
            </button> 
            <button name="previous" className={styles.btn}>
              <BsArrowRightCircle className={styles.icon} />
            </button>
            </div>
          </div>
        )}

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 800: 3, 1020: 4, 1280: 5 }}>
          <Masonry columnsCount={5}>
          {imgs.map((item) => {
              return (
                <>
                  {item.thumbnail && (
                    <div className={styles.imagebody}>
                      <Image
                        key={item._id}
                        src={item.thumbnail}
                        className={styles.image}
                        alt={item.name}
                        width={0}
                        height={item.height}
                        onClick={() => viewImage(item)}
                        // loading="lazy"
                        optimized
                        // priority
                      />
                      <button
                        className={styles.hovertext}
                        onClick={() => viewImage(item)}
                      >
                        <BsArrowRightCircleFill />
                        <p>{item.name}</p>
                      </button>
                    </div>
                  )}
                </>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
