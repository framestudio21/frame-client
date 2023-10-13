import React from "react";
import dynamic from "next/dynamic";
import {
  BsFillChatSquareTextFill,
  BsFillChatSquareQuoteFill,
  BsImages,
  BsCardHeading,
  BsPatchPlus
} from "react-icons/bs";
import { LuListTodo } from "react-icons/lu";
import { FaListAlt, FaListUl } from "react-icons/fa";

import styles from "./styles/notenavbar.module.css";
export default dynamic(() => Promise.resolve(Notenavbar), { ssr: false });
function Notenavbar() {
  return (
    <>
      <div className={styles.notenavbarbody}>
            <button className={styles.plusicon}>
            <BsPatchPlus className={styles.icon} />
          </button>
        <div className={styles.iconsection}>
          <button className={styles.icons}>
            <BsFillChatSquareTextFill className={styles.icon} />
          </button>
          <button className={styles.icons}>
            <BsFillChatSquareQuoteFill className={styles.icon} />
          </button>
          <button className={styles.icons}>
            <BsImages className={styles.icon} />
          </button>
          <button className={styles.icons}>
            <BsCardHeading className={styles.icon} />
          </button>
          <button className={styles.icons}>
            <FaListUl className={styles.icon} />
          </button>
          <button className={styles.icons}>
            <FaListAlt className={styles.icon} />
          </button>
        </div>
      </div>
    </>
  );
}
