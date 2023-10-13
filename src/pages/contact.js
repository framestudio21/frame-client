import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { BsArrowBarLeft } from "react-icons/bs";

import Navbar from "../components/navbar";
import Popup from '../components/popup'

import styles from "../styles/contact.module.css";

export default dynamic(() => Promise.resolve(contact), { ssr: false });

const contact = () => {
  //close btn function
  const router = useRouter();

  // drop down list code jquery
  useEffect(() => {
    const selectElement = document.getElementById("input-select");
    const graphicInputDiv = document.getElementById("graphic-input-div");
    const webInputDiv = document.getElementById("web-input-div");

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "graphic") {
        graphicInputDiv.style.display = "block";
        webInputDiv.style.display = "none";
      } else if (event.target.value === "web") {
        webInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
      } else {
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
      }
    });
  });

  const [formData, setFormData] = useState({});
  const [pop, setPop] = useState(null);

  const prevLoc = document.referrer;
  console.log(prevLoc);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const reset = () => {
    setFormData({});
  };

  // const PostData = async (e) => {
async function PostData (e){
    e.preventDefault();
    const {
      name,
      email,
      imagereference,
      subject,
      designtype,
      designfor,
      description,
    } = formData;
    if(!name ||
      !email ||
      !designtype ||
      !designfor ||
      !description) {
        setPop("fill all the field")
      }
      else{
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        imagereference,
        subject,
        designtype,
        designfor,
        description,
      }),
    });
    setPop('Thank you for giving us pleasure with a new project')
    setFormData({})}
    setTimeout(()=>setPop(),3000)
  };

  return (
    <>
      <Head>
        <title>FRAME STUDIO - CONTACT</title>
        <meta
          name="description"
          content="Contact with the Frame Studio Team to make design for varities items in matter of Graphic Design, Website Design, Digital Art, Ai Art etc."
        />
      </Head>
      <Navbar />

      <div className={styles.mainbody}>
        <button onClick={() => router.back()} className={styles.closebtn}>
          <BsArrowBarLeft className={styles.leftarrow} /> back
        </button>

        <div className={styles.contactbody}>
          <div className={styles.popupbox}><Popup text={pop}/></div>
          <div className={styles.contactform}>
            <div className={styles.title}>
              contact.com
              <p>get in touch with us</p>
            </div>
            <div className={styles.form}>
              <form method="POST">
                <div className={styles.inputfield}>
                  <label className={styles.formlabel}>
                    Name :<span>*</span>
                  </label>
                  <input
                    className={styles.formfield}
                    name="name"
                    type={"text"}
                    value={formData.name || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.inputfield}>
                  <label className={styles.formlabel}>
                    Email :<span>*</span>
                  </label>
                  <input
                    className={styles.formfield}
                    type={"email"}
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.inputfield}>
                  <label className={styles.formlabel}>Image Reference :</label>
                  <input
                    className={styles.formfield}
                    type={"text"}
                    name="imagereference"
                    value={formData.imagereference || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.inputfield}>
                  <label htmlFor="input-select" className={styles.formlabel}>
                    Choose design :<span>*</span>
                  </label>
                  <select
                    className={styles.formfield}
                    id="input-select"
                    name="designtype"
                    value={formData.designtype || ""}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="graphic">Graphic desing</option>
                    <option value="web">web developing</option>
                  </select>
                </div>
                <div id="graphic-input-div" className={styles.inputfield}>
                  <label htmlFor="graphic-input" className={styles.formlabel}>
                    Graphics Design for : *
                  </label>
                  <select
                    className={styles.formfield}
                    name="designfor"
                    id="graphic-input"
                    value={formData.designfor || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an option</option>
                    <option value="logo">Logo Design</option>
                    <option value="Visual identity graphic design">
                      Visual identity graphic design
                    </option>
                    <option value="Marketing & advertising graphic design">
                      Marketing & advertising graphic design
                    </option>
                    <option value="Publication graphic design">
                      Publication graphic design
                    </option>
                    <option value="Packaging graphic design (Branding)">
                      Packaging graphic design (Branding)
                    </option>
                    <option value="Motion graphic design">
                      Motion graphic design
                    </option>
                    <option value="Environmental graphic design">
                      Environmental graphic design
                    </option>
                    <option value="Any other Matter">Any other Matter</option>
                  </select>
                  <style jsx>{`
                    #graphic-input-div {
                      display: none;
                    }
                  `}</style>
                </div>

                <div id="web-input-div" className={styles.inputfield}>
                  <label htmlFor="web-input" className={styles.formlabel}>
                    Web Design for : *
                  </label>
                  <select
                    className={styles.formfield}
                    name="designfor"
                    id="web-input"
                    value={formData.designfor || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an option</option>
                    <option value="E-commerce Site">E-commerce Site</option>
                    <option value="Business Site">Business Site</option>
                    <option value="Blog Website">Blog Website</option>
                    <option value="Portfolio Site">Portfolio Site</option>
                    <option value="Personal WebSite">Personal WebSite</option>
                    <option value="Event WebSite">Event WebSite</option>
                    <option value="NonProfit Website">NonProfit Website</option>
                    <option value="Informational WebSite">
                      Informational WebSite
                    </option>
                    <option value="Membership WebSite">
                      Membership WebSite
                    </option>
                    <option value="Online Forum">Online Forum</option>
                    <option value="Any Other Matter">Any Other Matter</option>
                  </select>
                  <style jsx>{`
                    #web-input-div {
                      display: none;
                    }
                  `}</style>
                </div>

                <div className={styles.inputfield}>
                  <label className={styles.formlabel}>Describe : *</label>
                  <textarea
                    className={styles.formfield}
                    name="description"
                    value={formData.description || ""}
                    onChange={handleInputChange}
                    required={true}
                  />
                </div>
                <div className={styles.formbutton}>
                  <input
                    className={styles.submit}
                    type="submit"
                    value="Submit"
                    onClick={PostData}
                  />
                  <input
                    className={styles.reset}
                    type="reset"
                    value="reset"
                    onClick={reset}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
