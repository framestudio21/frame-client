import { useRouter } from "next/router";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import styles from "../styles/contact.module.css";

import Navbar from "../components/navbar";

import { BsFillTelephoneFill } from "react-icons/bs";
import {
  BiLogoGmail,
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoBehance,
} from "react-icons/bi";
import { FaLocationArrow, FaPinterestP } from "react-icons/fa";

export default dynamic(() => Promise.resolve(Contactus), { ssr: false });
const Contactus = () => {

  const [inputs, setInputs] = useState({})
  const handleInputs = (e) =>{
    setInputs({...inputs, [e.target.name]:e.target.value})
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...inputs}),
    });
    setInputs({})
  }

  const reset = () =>{
    setInputs({})
  }

  return (
    <>
      <Navbar />
      <div className={styles.mainbody}>
        <div className={styles.leftside}>

          <div className={styles.contactinformation}>
            <div className={styles.text}>
              <div className={styles.heading}>contact information</div>
              <div className={styles.subtext}>
                i'll up the form and our Team will get back to you within 24
                hours.
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.information}>
                <BsFillTelephoneFill /> +91 6290985252
              </div>
              <div className={styles.information}>
                <BiLogoGmail /> info.framestudio21@gmail.com
              </div>
              <div className={styles.information}>
                <FaLocationArrow /> kolkata, india
              </div>
            </div>
          </div>

          <div className={styles.socialicondiv}>
            <div className={styles.icondiv}>
              <Link href="#">
                {" "}
                <BiLogoFacebook className={styles.facebook} />
              </Link>
            </div>
            <div className={styles.icondiv}>
              <Link href="#">
                <BiLogoGmail className={styles.gmail} />
              </Link>
            </div>
            <div className={styles.icondiv}>
              <Link href="#">
                <BiLogoInstagramAlt className={styles.instagram} />
              </Link>
            </div>
            <div className={styles.icondiv}>
              <Link href="#">
                <FaPinterestP className={styles.pintrest} />
              </Link>
            </div>
            <div className={styles.icondiv}>
              <Link href="#">
                <BiLogoBehance className={styles.behance} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.rightside}>
          <form className={styles.formdiv} method="post" onSubmit={handleSubmit}>
            <div className={styles.blocks}>
              <div className={styles.inputfield}>
                {/* <label>first name</label> */}
                <input type="text" onChange={handleInputs} value={inputs.firstname || ""} className={styles.textinput} name="firstname" placeholder="your first name"/>
              </div>
              <div className={styles.inputfield}>
                {/* <label>Last name</label> */}
                <input type="text" onChange={handleInputs} value={inputs.lastname || ""} className={styles.textinput} name="lastname" placeholder="your last name"/>
              </div>
            </div>
            <div className={styles.blocks}>
              <div className={styles.inputfield}>
                {/* <label>city</label> */}
                <input type="text"onChange={handleInputs} value={inputs.city || ""} className={styles.textinput} name="city" placeholder="your city"/>
              </div>
              <div className={styles.inputfield}>
                {/* <label>Phone</label> */}
                <input type="number" onChange={handleInputs} value={inputs.phone || ""} className={styles.textinput} name="phone" placeholder="your phone"/>
              </div>
            </div>
            <div className={styles.blocks}>
              <div className={styles.inputfield}>
                {/* <label>email</label> */}
                <input type="email" onChange={handleInputs} value={inputs.email || ""} className={styles.textinput} name="email" placeholder="your email"/>
              </div>
            </div>
            <div className={styles.blocks}>
              <div className={styles.inputfield}>
                {/* <label>subject</label> */}
                <input type="text" onChange={handleInputs} value={inputs.subject || ""} className={styles.textinput} name="subject" placeholder="subject"/>
              </div>
            </div>
            <div className={styles.radioblocks}>
                <div className={styles.radiolabel}>what the matter for your query ?</div>
              <div className={styles.inputfield}>
                <div className={styles.radiodiv}>
                <input type="radio" onChange={handleInputs} value={inputs.category || ""} id="graphic-design" value="graphicdesign" name="category"/>
                <label className={styles.radioinputlabel} htmlFor="graphicdesign">Graphic Design</label>
                </div>
                <div className={styles.radiodiv}>
                <input type="radio" onChange={handleInputs} value={inputs.category || ""} id="website-design" value="websitedesign" name="category"/>
                <label className={styles.radioinputlabel} htmlFor="websitedesign">Website Design</label>
                </div>
                <div className={styles.radiodiv}>
                <input type="radio" onChange={handleInputs} value={inputs.category || ""} id="logo-design" value="logodesign" name="category"/>
                <label className={styles.radioinputlabel} htmlFor="logodesign">Logo Design</label>
                </div>
                <div className={styles.radiodiv}>
                <input type="radio" onChange={handleInputs} value={inputs.category || ""} id="typography-design" value="typographydesign" name="category"/>
                <label className={styles.radioinputlabel} htmlFor="typographydesign">typography</label>
                </div>
                <div className={styles.radiodiv}>
                <input type="radio" onChange={handleInputs} value={inputs.category || ""} id="branding-design" value="brandingdesign" name="category"/>
                <label className={styles.radioinputlabel} htmlFor="brandingdesign">branding</label>
                </div>
                <div className={styles.radiodiv}>
                <input type="radio" onChange={handleInputs} value={inputs.category || ""} id="other-design" value="otherdesign" name="category"/>
                <label className={styles.radioinputlabel} htmlFor="otherdesign">other</label>
                </div>
              </div>
            </div>
            <div className={styles.blocks}>
              <div className={styles.inputfield}>
                {/* <label>massage</label> */}
                <textarea className={styles.textarea} onChange={handleInputs} value={inputs.message || ""} type="text" name="message" placeholder="tell us about it . . ."/>
              </div>
            </div>
            <div className={styles.btnblocks}>
                <button className={styles.sendbtn}>submit</button>
                <button className={styles.resetbtn} onClick={reset}>reset</button>
            </div>
          </form>
          <div className={styles.followlinks}>
            <div className={styles.text}>Follow us here</div>
            <div className={styles.links}>
              <div className={styles.link}>
                <Link href="#">FACEBOOK</Link>
              </div>
              <div className={styles.link}>
                <Link href="#">INSTAGRAM</Link>
              </div>
              <div className={styles.link}>
                <Link href="#">pintrest</Link>
              </div>
              <div className={styles.link}>
                <Link href="#">behance</Link>
              </div>
              <div className={styles.link}>
                <Link href="#">TWITTER</Link>
              </div>
              <div className={styles.link}>
                <Link href="#">YOUTUBE</Link>
              </div>
              <div className={styles.link}>
                <Link href="#">DRIBBLE</Link>
              </div>
              <div className={styles.link}>
                <Link href="#">website</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
