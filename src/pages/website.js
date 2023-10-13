import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
import { BsArrowRightCircleFill } from "react-icons/bs"

import Navbar from "../components/navbar";
import Advertisement from "../components/addvertisement"

import styles from "../styles/home.module.css";
import { useRouter } from "next/router";



export default dynamic(() => Promise.resolve(Website), { ssr: false });
function Website () {

    const router = useRouter()
  
    // const { path } = router.query
    const [data, setData] = useState([])

    useEffect(() => {
      const url = process.env.NEXT_PUBLIC_API_URL+"/website";
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch(() => router.push("/404"))
    }, []);

    // useEffect(()=>{
    //     if(!router.isReady) return;
    //     fetch(process.env.API_URL + "/website").then((res)=>res.json()).then((d)=>setData(d)).catch(() => router.push("/404"))
    //   },[router.isReady])

  return (
    <>
           <Head>
      <title>FRAME STUDIO - WEBSITE</title>
      <meta name="description" content="Varities of Websites Design and order item."/>
    </Head>
      <Navbar />
      <Advertisement/>
      <div className={styles.mainbody}>
        {data.map((item) => {
          return (
            <div key={item._id}>
                <Link
            href={`/website/${item._id}`}
            
          >
            <div className={styles.imagebody}>
              <Image
                src={item.thumbnail}
                className={styles.image}
                alt={item.name}
                width={0}
                height={0}
                unoptimized
                loading="lazy"
              />
              <div className={styles.text}>
                <BsArrowRightCircleFill/>
                <br />
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
            </div>
          )
          })}
      </div>
    </>
  );
};
