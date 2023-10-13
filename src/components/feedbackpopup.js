import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";

import { AiFillCloseCircle } from "react-icons/ai";

import styles from "./styles/feedbackpop.module.css";

import framelogo from "../image//frame-studio-2.svg";

import Link from "next/link";

export default dynamic(() => Promise.resolve(Feedbackpopup), { ssr: false });
const Feedbackpopup = () => {

  const router = useRouter();
  const handelInput = () => {
    router.push("/feedback");
  };

  useEffect(() => {
    const btn = document.getElementById("closebutton");
    setTimeout(function () {
      document.getElementById("feedbackbodyid").style.display = "block";
    }, 1200);

    btn?.addEventListener("click", function () {
      document.getElementById("feedbackbodyid").style.display = "none";
    });
  }, []);

  return (
    <>
      <div
        className={styles.feedback}
        id="feedbackbodyid"
        style={{ display: "none" }}
      >
        <div className={styles.body}>
        <div className={styles.heading}>
          help us to improve your frame studio experiences.
        </div>
        <div className={styles.text}>
          Thank you for visiting our website. Colud we take a minutes for survey
          before you go to let us know how we're doing?
        </div>
        <div className={styles.feedbackbutton}>
            <button onClick={handelInput} className={styles.button}>Provide Feedback</button>
          <button id="closebutton" className={styles.button}>No Thanks</button>
        </div>
        <div className={styles.footer}>powered by Frame Studio</div>
        </div>
      </div>
    </>
  );
};
