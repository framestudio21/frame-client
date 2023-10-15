import { FaRegCopy } from "react-icons/fa";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

import Popup from "../components/popup"

import styles from "./styles/copybtn.module.css";
export default function copybtn() {
  const router = useRouter();

    // copy image reference data
    const [pop, setPop] = useState(null);
    setTimeout(() => setPop(null), 3000);

  return (
    <>
      <button
        className={styles.copybtn}
        onClick={() => {
          navigator.clipboard.writeText(router.asPath);
          setPop("Copied to clipboard");
        }}
      >
        copy image refarence
        <FaRegCopy className={styles.rightcopy} />
      </button>
      <Popup text={pop} />
    </>
  );
}
