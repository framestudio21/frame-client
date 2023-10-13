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



export default dynamic(() => Promise.resolve(Graphic), { ssr: false });
function Graphic () {

    const router = useRouter()
  
    const { path } = router.query
    const [data, setData] = useState([])

    // useEffect(()=>{
    //     if(!router.isReady) return;
    //     fetch(`http://localhost:5000/${path}`).then((res)=>res.json()).then((d)=>setData(d)).catch(() => window.location.replace("http://localhost:3000/404"))
    //   },[router.isReady])

      // useEffect(()=>{
      //   if(!router.isReady) return;
      //   fetch(`http://localhost:5000/graphic`).then((res)=>res.json()).then((d)=>setData(d)).catch(() => window.location.replace("http://localhost:3000/404"))
      // },[router.isReady])

      useEffect(() => {
        const url = process.env.NEXT_PUBLIC_API_URL+"/graphic";
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch(() => router.push("/404"))
      }, []);

  return (
    <>
       <Head>
      <title>FRAME STUDIO - GRAPHIC</title>
      <meta name="description" content="Varities of Graphics Design and order item."/>
    </Head>
      <Navbar />
      <Advertisement/>
      <div className={styles.mainbody}>
        {data.map((item) => {
          return (
            <div key={item._id}>
                <Link
            href={`/graphic/${item._id}`}
            title={item.name}
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
