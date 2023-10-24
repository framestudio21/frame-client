import { useRouter } from "next/router";
import React, {useEffect} from "react";

import styles from "./styles/orderbox.module.css";

export default function Orderbox() {
    const router = useRouter();
    const handelInput = () => {
      router.push("/contact");
    };
  return (
    <>
      <div className={styles.orderboxmaindiv}>
        <div className={styles.text}>to make this type of design</div>
        <button onClick={handelInput} className={styles.orderbtn}>order now</button>
      </div>
    </>
  );
}