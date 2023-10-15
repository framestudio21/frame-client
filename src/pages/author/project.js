import React from "react";
import Head from "next/head"
import dynamic from "next/dynamic";
import $ from "jquery";
import { BiLeftArrowCircle } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

import {
  BsFillChatSquareTextFill,
  BsFillChatSquareQuoteFill,
  BsImages,
  BsCardHeading,
  BsPatchPlus,
} from "react-icons/bs";
import { LuListTodo } from "react-icons/lu";
import { FaListAlt, FaListUl } from "react-icons/fa";

import styles from "./styles/project.module.css";

import Notenavbar from "./component/notenavbar";
import Adminnavbar from "../../components/adminnavbar";

import Backbtn from "../../components/backbtn";

export default dynamic(() => Promise.resolve(Project), { ssr: false });
const Project = () => {


    // let container = document.createElement("div")
    
    // $(document).ready(function(){
    //     $ ('#textbtn').click(function(){
    //         $("#descriptionarea").after($newdiv, [inputfield, deletebtn])
    //     })
    // })

    // let btn = document.querySelector('#submit')
    // let newdiv = document.createElement('div').classList.add("textarea"),
    //  inputfield = document.createElement('textarea').classList.add("textareainputfield"),
    //  deletebtn = document.createElement('button').classList.add("divclosebtn");
    // inputfield.after("deletebtn")
    // newdiv.appendChild("inputfield")
    
    // let insertField = () => {
    // btn.before("newdiv")
    // }

  return (
    <>

    <script>

  

    </script>
    
      <main className={styles.projectmainbody}>
        {/* <Backbtn /> */}
        <div className={styles.maindiv}>
          <div className={styles.headertext}>Project Upload Section</div>

          <div className={styles.selecttype}>
            <div className={styles.text}>
              Select type to upload product, design, blog, advertisement or
              photography
            </div>
            <select className={styles.selectsection}>
              <option selected className={styles.selecttypeoption}>
                select type
              </option>
              <option className={styles.selecttypeoption}>
                graphic design
              </option>
              <option className={styles.selecttypeoption}>
                website design
              </option>
              <option className={styles.selecttypeoption}>Digital art</option>
              <option className={styles.selecttypeoption}>ai art</option>
              <option className={styles.selecttypeoption}>photography</option>
              <option className={styles.selecttypeoption}>blog</option>
            </select>
          </div>

          {/* graphic upload form */}
          <form className={styles.formdiv}>
            <div className={styles.header}>Graphic Design Upload Form</div>
            <div className={styles.mandatoryinputdiv}>
              <div className={styles.divleftside}>
                <label className={styles.text}>the mandatory section</label>
                <input
                  type="text"
                  placeholder="enter project title"
                  name="title"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project thumbnail link"
                  name="thumbnail"
                  className={styles.inputfield}
                />
                <input type="date" name="date" className={styles.inputfield} />
                <select
                  id="input-select"
                  name="tag1"
                  className={styles.inputfield}
                >
                  <option value="">Select type</option>
                  <option value="logo">logo</option>
                  <option value="visualidentity">visual identity</option>
                  <option value="advertisement">advertisement</option>
                  <option value="publication">publication</option>
                  <option value="motion">motion</option>
                  <option value="environmental">environmental</option>
                  <option value="informational">informational</option>
                  <option value="branding">branding</option>
                  <option value="illustration">illustration</option>
                  <option value="layout">layout</option>
                  <option value="packaging">packaging</option>
                  <option value="typography">typography</option>
                </select>
                <select
                  id="input-select"
                  name="tag2"
                  className={styles.inputfield}
                >
                  <option value="">Select type</option>
                  <option value="logo">logo</option>
                  <option value="visualidentity">visual identity</option>
                  <option value="advertisement">advertisement</option>
                  <option value="publication">publication</option>
                  <option value="motion">motion</option>
                  <option value="environmental">environmental</option>
                  <option value="informational">informational</option>
                  <option value="branding">branding</option>
                  <option value="illustration">illustration</option>
                  <option value="layout">layout</option>
                  <option value="packaging">packaging</option>
                  <option value="typography">typography</option>
                </select>
                <select
                  id="input-select"
                  name="tag3"
                  className={styles.inputfield}
                >
                  <option value="">Select type</option>
                  <option value="logo">logo</option>
                  <option value="visualidentity">visual identity</option>
                  <option value="advertisement">advertisement</option>
                  <option value="publication">publication</option>
                  <option value="motion">motion</option>
                  <option value="environmental">environmental</option>
                  <option value="informational">informational</option>
                  <option value="branding">branding</option>
                  <option value="illustration">illustration</option>
                  <option value="layout">layout</option>
                  <option value="packaging">packaging</option>
                  <option value="typography">typography</option>
                </select>
              </div>
              <div className={styles.divrightside}>
                <label className={styles.text}>
                  the Social media Link section
                </label>
                <input
                  type="text"
                  placeholder="enter project facebook link"
                  name="facebooklink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project instagram link"
                  name="instagramlink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project pinterest link"
                  name="pinterestlink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project dribble link"
                  name="dribblelink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project twitter link"
                  name="twitterlink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project behance link"
                  name="behancelink"
                  className={styles.inputfield}
                />
                <input
                  type="text"
                  placeholder="enter project google drive link"
                  name="googledrivelink"
                  className={styles.inputfield}
                />
              </div>
            </div>

            <div className={styles.newaddinputdiv}>
              <div className={styles.descriptionarea} id="descriptionarea">
                <textarea
                  className={styles.textareainputfield}
                  placeholder="enter project description"
                />
              </div>

              <div className={styles.textarea}>
                <textarea
                  className={styles.textareainputfield}
                  placeholder="enter your quote"
                />
                <button className={styles.divclosebtn}>
                  <AiFillCloseCircle />
                </button>
              </div>

              <div className={styles.imagearea}>
                <input
                  type="text"
                  className={styles.imageinputfield}
                  placeholder="enter your image link"
                />
                <button className={styles.divclosebtn}>
                  <AiFillCloseCircle />
                </button>
              </div>
            </div>

            <div className={styles.btnsection}>
              <button type="submit" className={styles.submitbtn} id="submit">
                Submit
              </button>
              <button type="reset" className={styles.resetbtn}>
                reset
              </button>
            </div>
          </form>
        </div>

        {/* note button navbar */}
        <div className={styles.notenavbarbody}>
          <button className={styles.plusicon}>
            <BsPatchPlus className={styles.icon} />
          </button>
          <div className={styles.iconsection}>
            <button className={styles.icons} id="textbtn">
              <BsFillChatSquareTextFill className={styles.icon} />
            </button>
            <button className={styles.icons} id="quotebtn">
              <BsFillChatSquareQuoteFill className={styles.icon} />
            </button>
            <button className={styles.icons} id="imagebtn">
              <BsImages className={styles.icon} />
            </button>
            <button className={styles.icons} id="headingbtn">
              <BsCardHeading className={styles.icon} />
            </button>
            <button className={styles.icons} id="listbtn">
              <FaListUl className={styles.icon} />
            </button>
            <button className={styles.icons} id="taskbtn">
              <FaListAlt className={styles.icon} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

// style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}
// style={{minWidth: '96%', width: '100%', minHeight: '150px', maxHeight: '250px', padding: '15px 20px', borderRadius: '10px', border: '2px solid var(--charcoal-color)', letterSpacing: '2px'}}
