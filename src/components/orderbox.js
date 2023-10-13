import { useRouter } from "next/router";
import React, {useEffect} from "react";

import styles from "./styles/orderbox.module.css";

export default function orderbox() {
    const router = useRouter();
    const handelInput = () => {
      router.push("/contact");
    };
    useEffect(() => {
        const btn = document.getElementById("closebutton");
        setTimeout(function () {
          document.getElementById("orderboxid").style.display = "block";
        }, 1200);
    
        btn?.addEventListener("click", function () {
          document.getElementById("orderboxid").style.display = "none";
        });
      }, []);
  return (
    <>
      <div className={styles.orderbox} id="orderboxid">
        <div className={styles.body}>
          <div className={styles.heading}>to make this type of design</div>
          <div className={styles.orderbutton}>
            <button  onClick={handelInput} className={styles.btn}>order now</button>
            <button id="closebutton" className={styles.btn}>no thanks</button>
          </div>
          <div className={styles.footer}>powered by frame studio</div>
        </div>
      </div>
    </>
  );
}
