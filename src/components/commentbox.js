import React, { useState, useEffect } from "react";

import styles from "./styles/commentbox.module.css";
export default function Commentbox() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
     { showModal && 
      <div className={styles.commentboxmainbody}>
      <div className={styles.commentboxheader}>
        tell us about, what you think !
      </div>
      <form className={styles.commentboxform}>
        <p className={styles.text}>
          your email address will not be publish. required fields are marked
          *.
        </p>
        <div className={styles.massagesection}>
          <textarea
            className={styles.textarea}
            type="text"
            name="comment"
            placeholder="enter your comment . . ."
          />
        </div>
        <div className={styles.namesection}>
          <input
            type="text"
            className={styles.inputfield}
            name="firstname"
            placeholder="enter your fisrt name *"
          />
          <input
            type="text"
            className={styles.inputfield}
            name="lastname"
            placeholder="enter your last name *"
          />
        </div>
        <div className={styles.namesection}>
          <input
            type="email"
            className={styles.inputfield}
            name="email"
            placeholder="enter your email *"
          />
                    <input
            type="text"
            className={styles.inputfield}
            name="reference"
            placeholder="enter your image reference"
          />
        </div>
        <div className={styles.buttonsection}>
          <button className={styles.submitbtn} type="submit">
            post comment
          </button>
          {/* <button onClick={() => setShowModal(false)} className={styles.resetbtn}>no thanks</button> */}
        </div>
      </form>
    </div>
     }
    </>
  );
}
