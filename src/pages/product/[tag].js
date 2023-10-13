import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import moment from "moment";

import { BsArrowBarLeft, BsArrowRightCircleFill } from "react-icons/bs";

import styles from "../../styles/tag.module.css";
import Navbar from "../../components/navbar";
import Popup from "../../components/popup";

export default dynamic(() => Promise.resolve(Tag), { ssr: false });
function Tag() {
  const router = useRouter();
  const { tag } = router.query;
  const [data, setData] = useState([]);

  // copy image reference data
  const [pop, setPop] = useState(null);
  setTimeout(() => setPop(null), 3000);

  // if(tag != "business" || tag != "ad" ) return router.push("/404")

  useEffect(() => {
    if (!router.isReady) return;
    fetch(process.env.NEXT_PUBLIC_API_URL + "/home")
      .then((a) => a.json())
      .then((d) => setData(d));
  }, [tag, router.isReady]);



  return (
    <>
      <Head>
        <title>FRAME STUDIO - CATEGORY</title>
        <meta
          name="description"
          content="Varities of Graphics or Website Design Products show case in the category list wise"
        />
      </Head>
      <Navbar />
      <div className={styles.mainbody}>
        <button onClick={() => router.back()} className={styles.closebtn}>
          <BsArrowBarLeft className={styles.leftarrow} />
          Back
        </button>
        <Popup text={pop} />
        {data
          .filter(function (item) {
            return (
              item.tag1 == tag ||
              item.tag2 == tag ||
              item.tag3 == tag ||
              item.tag4 == tag ||
              item.tag5 == tag
            );
          })
          .map((item) => {
            const date = new Date(item.createdate).toDateString()
            return (
              <div className={styles.product} key={item._id}>
                {item.thumbnail && <div className={styles.leftside}>
                  <Image className={styles.image} src={item.thumbnail} width={0} height={0} alt={item.name} />
                  <div className={styles.text}>
                                    <BsArrowRightCircleFill
                                      className={styles.leftarrow}
                                    />
                                    <br/>
                                    {item.name}
                                  </div>
              </div>}
                <div className={styles.rightside}>
                <Link href={`/${item.designtype}/${item._id}`}>
                  <div className={styles.title}>{item.name}</div>
                </Link>
                <div className={styles.subtitle}>
                  {item.author && (
                    <>
                      <p>by</p>
                      <Link href="/about">
                        <div className={styles.creator}>{item.author}</div>
                      </Link>
                      <span>:</span>
                    </>
                  )}
                  {item.createdate && (
                    // <div className={styles.createtime}>{item.createdate}</div>
                    <div className={styles.createtime}>{date}</div>
                  )}
                </div>
                <div className={styles.createtype}>
                  <p>A</p>
                  {item.tag1 && (
                    <Link href={`/product/${item.tag1}`}>{item.tag1},</Link>
                  )}
                  {item.tag2 && (
                    <Link href={`/product/${item.tag2}`}>{item.tag2},</Link>
                  )}
                  {item.tag3 && (
                    <Link href={`/product/${item.tag3}`}>{item.tag3},</Link>
                  )}
                  {item.tag4 && (
                    <Link href={`/product/${item.tag4}`}>{item.tag4},</Link>
                  )}
                  {item.tag5 && (
                    <Link href={`/product/${item.tag5}`}>{item.tag5}</Link>
                  )}
                  <p>design</p>
                </div>
                {item.text1 && <div className={styles.text}>{item.text1}</div>}

                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
