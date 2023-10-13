import React from 'react'
import dynamic from 'next/dynamic';
import $ from "jquery"
import { BiLeftArrowCircle } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';

import {
    BsFillChatSquareTextFill,
    BsFillChatSquareQuoteFill,
    BsImages,
    BsCardHeading,
    BsPatchPlus
  } from "react-icons/bs";
  import { LuListTodo } from "react-icons/lu";
  import { FaListAlt, FaListUl } from "react-icons/fa";

import styles from "./styles/project.module.css"

import Notenavbar from "./component/notenavbar"
import Adminnavbar from "../../components/adminnavbar"

export default dynamic(() => Promise.resolve(Project), { ssr: false });
function Project() {

    // append function by jquery

    var $newdiv = $( "<div className={styles.textarea}><textarea className={styles.textareainputfield} placeholder='enter your text' /><button><AiFillCloseCircle /></button></div>" ),
        newdiv2 = document.createElement( "div" ),
        existingdiv1 = document.getElementById( "newaddeddiv" );

    $(document).ready(function(){
        $ ('#textbtn').click(function(){
            $("#newaddeddiv").append($newdiv, [ newdiv2, existingdiv1 ])
        })
    })

  return (
    <>
    <Adminnavbar/>
    <main className={styles.projectmainbody}>
        <button className={styles.closebtn}>
            <BiLeftArrowCircle/> back
        </button>
    <div className={styles.maindiv}>
    <div className={styles.headertext}>Project Upload Section</div>


    <div className={styles.selecttype}>
        <div className={styles.text}>Select type to upload product, design or photography</div>
        <select className={styles.selectsection}>
            <option selected className={styles.selecttypeoption}>select type</option>
            <option className={styles.selecttypeoption}>graphic design</option>
            <option className={styles.selecttypeoption}>website design</option>
            <option className={styles.selecttypeoption}>Digital art</option>
            <option className={styles.selecttypeoption}>ai art</option>
            <option className={styles.selecttypeoption}>photography</option>
            <option className={styles.selecttypeoption}>blog</option>
        </select>
    </div>

         {/* graphic upload form */}
       {/* <form className={styles.formdiv}>
            <div className={styles.header}>Graphic Design Upload Form</div>
            <div className={styles.mandatoryinputdiv}>
                <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input type='text' placeholder='enter project title' name='title' className={styles.inputfield} />
                    <input type='text' placeholder='enter project thumbnail link' name='thumbnail' className={styles.inputfield} />
                    <input type='date' name='date' className={styles.inputfield} />
                    <select id="input-select" name="tag1" className={styles.inputfield}>
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
                    <select id="input-select" name="tag2" className={styles.inputfield}>
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
                    <select id="input-select" name="tag3" className={styles.inputfield}>
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
                <input type='text' placeholder='enter project facebook link' name='facebooklink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project instagram link' name='instagramlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project pinterest link' name='pinterestlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project dribble link' name='dribblelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project twitter link' name='twitterlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project behance link' name='behancelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project drive link' name='drivelink' className={styles.inputfield} />
                </div>
            </div>

        <div className={styles.newaddinputdiv}>

            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your text' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your quote' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className={styles.imagearea}>
                <input type='text' className={styles.imageinputfield} placeholder='enter your image link' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

        </div>

        <div className={styles.btnsection}>
            <button type='submit' className={styles.submitbtn}>Submit</button>
            <button type='reset' className={styles.resetbtn}>reset</button>
        </div>

        </form> */}

         {/* website upload form
         <form className={styles.formdiv}>
            <div className={styles.header}>Website Design Upload Form</div>
            <div className={styles.mandatoryinputdiv}>
                <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input type='text' placeholder='enter project title' name='title' className={styles.inputfield} />
                    <input type='text' placeholder='enter project thumbnail link' name='thumbnail' className={styles.inputfield} />
                    <input type='date' name='date' className={styles.inputfield} />
                    <select id="input-select" name="tag1" className={styles.inputfield}>
                        <option value="">Select type</option>
                                  <option value="e-commercs">e-commerce site</option>
              <option value="business">business site</option>
              <option value="blog">blog site</option>
              <option value="portfolio">portfolio site</option>
              <option value="personal">personal site</option>
              <option value="informational">informational site</option>
              <option value="event">event site</option>
              <option value="nonprofit">nonprofit site</option>
              <option value="membership">membership site</option>
              <option value="online">online forum</option>
              <option value="other">other type site</option>
                    </select>
                </div>
                <div className={styles.divrightside}>
                <input type='text' placeholder='enter project facebook link' name='facebooklink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project instagram link' name='instagramlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project pinterest link' name='pinterestlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project dribble link' name='dribblelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project twitter link' name='twitterlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project behance link' name='behancelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project drive link' name='drivelink' className={styles.inputfield} />
                </div>
            </div>

        <div className={styles.newaddinputdiv}>

            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your text' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your quote' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className={styles.imagearea}>
                <input type='text' className={styles.imageinputfield} placeholder='enter your image link' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

        </div>

        <div className={styles.btnsection}>
            <button type='submit' className={styles.submitbtn}>Submit</button>
            <button type='reset' className={styles.resetbtn}>reset</button>
        </div>

        </form> */}

        {/* Digital Art upload form
         <form className={styles.formdiv}>
            <div className={styles.header}>Digital Art Design Upload Form</div>
            <div className={styles.mandatoryinputdiv}>
                <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input type='text' placeholder='enter project title' name='title' className={styles.inputfield} />
                    <input type='text' placeholder='project author' name='author' className={styles.inputfield} />
                    <input type='text' placeholder='enter project thumbnail link' name='thumbnail' className={styles.inputfield} />
                    <input type='date' name='date' className={styles.inputfield} />
                    <select id="input-select" name="tag1" className={styles.inputfield}>
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
                    <select id="input-select" name="ratio" className={styles.inputfield}>
                        <option value=" " selected>Select size image ratio</option>
                        <option value="425">ratio 1 : 1</option>
                        <option value="350">ratio 9 : 16</option>
                        <option value="500">ratio 16 : 9</option>
                    </select>
                </div>
                <div className={styles.divrightside}>
                <input type='text' placeholder='enter project facebook link' name='facebooklink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project instagram link' name='instagramlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project pinterest link' name='pinterestlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project dribble link' name='dribblelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project twitter link' name='twitterlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project behance link' name='behancelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project drive link' name='drivelink' className={styles.inputfield} />
                </div>
            </div>

        <div className={styles.newaddinputdiv}>
        <div className={styles.imagearea}>
                <input type='text' className={styles.imageinputfield} placeholder='enter your image link' />
            </div>
            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your text' />
            </div>
        </div>

        <div className={styles.btnsection}>
            <button type='submit' className={styles.submitbtn}>Submit</button>
            <button type='reset' className={styles.resetbtn}>reset</button>
        </div>

        </form> */}

        {/* Ai Art upload form
        <form className={styles.formdiv}>
            <div className={styles.header}>Ai Art Design Upload Form</div>
            <div className={styles.mandatoryinputdiv}>
                <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input type='text' placeholder='enter project title' name='title' className={styles.inputfield} />
                    <input type='text' placeholder='project author' name='author' className={styles.inputfield} />
                    <input type='text' placeholder='Ai Name' name='ainame' className={styles.inputfield} />
                    <input type='text' placeholder='enter project thumbnail link' name='thumbnail' className={styles.inputfield} />
                    <input type='date' name='date' className={styles.inputfield} />
                    <select id="input-select" name="tag1" className={styles.inputfield}>
                        <option value="" selected>Select type</option>
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
                    <select id="input-select" name="ratio" className={styles.inputfield}>
                        <option value=" " selected>Select size image ratio</option>
                        <option value="425">ratio 1 : 1</option>
                        <option value="350">ratio 9 : 16</option>
                        <option value="500">ratio 16 : 9</option>
                    </select>
                </div>
                <div className={styles.divrightside}>
                <input type='text' placeholder='enter project facebook link' name='facebooklink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project instagram link' name='instagramlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project pinterest link' name='pinterestlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project dribble link' name='dribblelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project twitter link' name='twitterlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project behance link' name='behancelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project drive link' name='drivelink' className={styles.inputfield} />
                </div>
            </div>

        <div className={styles.newaddinputdiv}>
        <div className={styles.imagearea}>
                <input type='text' className={styles.imageinputfield} placeholder='enter your image link' />
            </div>
            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your text' />
            </div>
        </div>

        <div className={styles.btnsection}>
            <button type='submit' className={styles.submitbtn}>Submit</button>
            <button type='reset' className={styles.resetbtn}>reset</button>
        </div>

        </form> */}

        {/* Photography upload form
        <form className={styles.formdiv}>
            <div className={styles.header}>Photography Upload Form</div>
            <div className={styles.mandatoryinputdiv}>
                <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input type='text' placeholder='enter project title' name='title' className={styles.inputfield} />
                    <input type='text' placeholder='project author' name='author' className={styles.inputfield} />
                    <input type='text' placeholder='enter project thumbnail link' name='thumbnail' className={styles.inputfield} />
                    <input type='date' name='date' className={styles.inputfield} />
                    <select id="input-select" name="ratio" className={styles.inputfield}>
                        <option value=" " selected>Select size image ratio</option>
                        <option value="425">ratio 1 : 1</option>
                        <option value="350">ratio 9 : 16</option>
                        <option value="500">ratio 16 : 9</option>
                    </select>
                </div>
                <div className={styles.divrightside}>
                <input type='text' placeholder='enter project facebook link' name='facebooklink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project instagram link' name='instagramlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project pinterest link' name='pinterestlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project dribble link' name='dribblelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project twitter link' name='twitterlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project behance link' name='behancelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project drive link' name='drivelink' className={styles.inputfield} />
                </div>
            </div>

        <div className={styles.newaddinputdiv}>
        <div className={styles.imagearea}>
                <input type='text' className={styles.imageinputfield} placeholder='enter your image link' />
            </div>
        </div>

        <div className={styles.btnsection}>
            <button type='submit' className={styles.submitbtn}>Submit</button>
            <button type='reset' className={styles.resetbtn}>reset</button>
        </div>

        </form> */}

       {/* Advertisement upload form
         <form className={styles.formdiv}>
            <div className={styles.header}>Advertisement Upload Form</div>
            <div className={styles.mandatoryinputdiv}>
                <div className={styles.divleftside}>
                    <input type='text' placeholder='enter project title' name='title' className={styles.inputfield} />
                    <input type='text' placeholder='project author' name='author' className={styles.inputfield} />
                    <input type='text' placeholder='enter project thumbnail link' name='thumbnail' className={styles.inputfield} />
               
                </div>
                <div className={styles.divrightside}>
                <input type='date' name='date' className={styles.inputfield} />
                <select id="input-select" name="ratio" className={styles.inputfield}>
                        <option value=" " selected>Select size image ratio</option>
                        <option value="425">ratio 1 : 1</option>
                        <option value="350">ratio 9 : 16</option>
                        <option value="500">ratio 16 : 9</option>
                    </select>
                    <select id="input-select" name="type" className={styles.inputfield}>
                        <option value=" " selected>Select advertisement type</option>
                        <option value="graphic">Graphic Design</option>
                        <option value="website">Website Design</option>
                        <option value="digitalart">Digital Art</option>
                        <option value="aiart">Ai Art</option>
                        <option value="photography">photography</option>
                    </select>
                </div>
            </div>

        <div className={styles.btnsection}>
            <button type='submit' className={styles.submitbtn}>Submit</button>
            <button type='reset' className={styles.resetbtn}>reset</button>
        </div>

        </form>  */}

        Blog upload form
        <form className={styles.formdiv}>
            <div className={styles.header}>Blog Upload Form</div>
            <div className={styles.mandatoryinputdiv}>
                <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input type='text' placeholder='enter project title' name='title' className={styles.inputfield} />
                    <input type='text' placeholder='project author' name='author' className={styles.inputfield} />
                    <input type='text' placeholder='enter project thumbnail link' name='thumbnail' className={styles.inputfield} />
                    <input type='date' name='date' className={styles.inputfield} />
                    <select id="input-select" name="tag" className={styles.inputfield}>
                        <option value="">Select type & tag</option>
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
                        <option value="e-commercs">e-commerce website</option>
              <option value="business">business website</option>
              <option value="blog">blog website</option>
              <option value="portfolio">portfolio website</option>
              <option value="personal">personal website</option>
              <option value="informational">informational website</option>
              <option value="event">event website</option>
              <option value="nonprofit">nonprofit website</option>
              <option value="membership">membership website</option>
              <option value="online">online forum website</option>
                    </select>
                </div>
                <div className={styles.divrightside}>
                <input type='text' placeholder='enter project facebook link' name='facebooklink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project instagram link' name='instagramlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project pinterest link' name='pinterestlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project dribble link' name='dribblelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project twitter link' name='twitterlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project behance link' name='behancelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project drive link' name='drivelink' className={styles.inputfield} />
                </div>
            </div>

        <div className={styles.newaddinputdiv} id="newaddeddiv">

        <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter blog description' />
            </div>

            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your text' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your quote' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className={styles.textarea}>
                <input type='text' className={styles.imageinputfield} placeholder='enter your image link' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

        </div>

        <div className={styles.btnsection}>
            <button type='submit' className={styles.submitbtn}>Submit</button>
            <button type='reset' className={styles.resetbtn}>reset</button>
        </div>

        </form>



    </div>

    <div className={styles.notenavbarbody}>
            <button className={styles.plusicon}>
            <BsPatchPlus className={styles.icon} />
          </button>
        <div className={styles.iconsection}>
          <button className={styles.icons} id='textbtn'>
            <BsFillChatSquareTextFill className={styles.icon} />
          </button>
          <button className={styles.icons} id='quotebtn'>
            <BsFillChatSquareQuoteFill className={styles.icon} />
          </button>
          <button className={styles.icons} id='imagebtn'>
            <BsImages className={styles.icon} />
          </button>
          <button className={styles.icons} id='headingbtn'>
            <BsCardHeading className={styles.icon} />
          </button>
          <button className={styles.icons} id='listbtn'>
            <FaListUl className={styles.icon} />
          </button>
          <button className={styles.icons} id='taskbtn'>
            <FaListAlt className={styles.icon} />
          </button>
        </div>
      </div>
    </main>
    </>
  )
}