import styles from "./styles/preloader.module.css";
import React, { useEffect, useState } from "react";


export default function Loadingscreen() {
  let [load, setLoad] = useState(0);
  useEffect(() => {
    const loading = setInterval(() => {
      load += 5;
      if (load > 100) {
        const preloader = document.querySelector("#preloader");
        preloader.style.visibility = "hidden";
        clearInterval(loading);
      }
      setLoad(load);
    }, 460);
  }, []);
  return (
    <>
      <div className={styles.loadingbody} id="preloader">
      <div className={styles.loader}>{load}%</div>
        <div className={styles.progress}>
          <div className={styles.color}></div>
        </div>
      </div>
    </>
  );
}
