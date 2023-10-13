import Navbar from "../components/navbar";

import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useRouter } from "next/router";

import styles from "../styles/home.module.css";

import { BsArrowBarLeft } from "react-icons/bs";

export default dynamic(() => Promise.resolve(Aiart), { ssr: false });

const Aiart = () => {
  const router = useRouter();

  // image view component
  const [data, setData] = useState({});
  const viewImage = (item) => {
    setData(item);
  };

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/aiart";
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
      <title>FRAME STUDIO - AiArt</title>
      <meta name="description" content="Varities of Ai Art Design and order item."/>
    </Head>
      <Navbar />
      <div className={styles.masonrymainbody}>
        {data.thumbnail && (
          <div className={styles.imagedisplaydiv} onClick={close}>
            <button name="close" onClick={close} className={styles.closebtn}>
              <BsArrowBarLeft className={styles.leftarrow} /> close
            </button>
            <Image
              src={data.thumbnail}
              className={styles.image}
              width={0}
              height={0}
              alt={data.name}
            />
          </div>
        )}

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
          <Masonry columnsCount={4}>
            {imgs.map((item) => {
              return (
                <div key={item._id}>
                  {item.thumbnail && (
                    <Image
                      src={item.thumbnail}
                      alt={item.name}
                      className={styles.aiartimage}
                      width={0}
                      height={0}
                      onClick={() => viewImage(item)}
                      loading="lazy"
                      unoptimized
                      // priority
                    />
                  )}
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
