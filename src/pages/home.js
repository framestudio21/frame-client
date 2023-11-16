import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Head from "next/head";

import { BsArrowRightCircleFill } from "react-icons/bs";

import styles from "../styles/home.module.css";

import Navbar from "../components/navbar";
import Feedbackpopup from "../components/feedbackpopup";
import Footer from "../components/tagfooter";
import Preloader from "../components/preloader";
import Orderconfirm from "../components/orderconfirmpop";
import TaptoTopbtn from "../components/taptotopbtn"

export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/home";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data))
      .catch(() => router.push("/404"));
  }, []);

  return (
    <>
      <Head>
        <title>FRAME STUDIO</title>
        <meta name="description" content="Graphics Design, Website Desing" />
        <script type="application/ld+json">
          [
          {`
      "@context": "https://framestudio.in/",
      "@type": "ImageObject",
      "contentUrl": "https://framestudio.in/home",
      "license": "https://framestudio.in/license",
      "acquireLicensePage": "https://framestudio.in",
      "creditText": "Graphic Design, Website Design",
      "creator": {
        "@type": "Persons",
        "name": "Sumit Kumar Duary & Gourav Duary"
       }
      "copyrightNotice": "Frame Studio"
    `}
          ]
        </script>
      </Head>
      <Navbar />
      {/* <Preloader/> */}
      <Orderconfirm/>
      {/* <Feedbackpopup/> */}
      {/* <Footer/> */}

      <div className={styles.mainbody}>
        {imgs.map((item) => {
          return (
            <div key={item._id}>
              {item.thumbnail && (
                <Link href={`/${item.designtype}/${item._id}`}>
                  <div className={styles.imagebody}>
                    <Image
                      src={item.thumbnail}
                      className={styles.image}
                      alt={item.name}
                      width={0}
                      height={0}
                    />
                    <div className={styles.text}>
                      <BsArrowRightCircleFill />
                      <br />
                      <p>{item.name}</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
        <TaptoTopbtn/>
      </div>
    </>
  );
};
