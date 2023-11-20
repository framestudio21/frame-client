import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { GoShieldCheck } from "react-icons/go";

import Navbar from "../components/navbar";
import BackBtn from "../components/backbtn";
import Footer from "../components/footer";

import styles from "../styles/order.module.css";
import Link from "next/link";


export default dynamic(() => Promise.resolve(Order), { ssr: false });
const Order = () => {


  // function for new form image reference input field adding
  const [imgreffieldinputList, setImgRefFieldInputList] = useState([]);
  const [imgrefno, setImgRefNo] = useState(1);

  const RefImgInput = (props) => {
    return (
      <input
        type="text"
        placeholder={"enter your image reference url"}
        className={styles.inputfield}
        style={{ margin: "5px 0" }}
        name={"imagereference" + props.no}
        onChange={handleChange}
      />
    );
  };

  const onAddImgReftBtnClick = (e) => {
    if (imgrefno <= 4) {
      setInputs(...inputs)
      setImgRefNo(imgrefno + 1)
      setImgRefFieldInputList(
        imgreffieldinputList.concat(
          <RefImgInput
            key={imgreffieldinputList.length}
            no={imgrefno + 1}
          />
        )
      );
    }
  };


  // category to tag selection and field display div
  useEffect(() => {
    const selectElement = document.getElementById("category-select");
    const graphicSelectionDiv = document.getElementById("graphic-selection-div");
    const websiteSelectionDiv = document.getElementById("website-selection-div");
    const brandingSelectionDiv = document.getElementById("branding-selection-div");
    const logodesignSelectionDiv = document.getElementById("logodesign-selection-div");
    const typographySelectionDiv = document.getElementById("typography-selection-div");
    const otherSelectionDiv = document.getElementById("other-selection-div");

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "graphic") {
        graphicSelectionDiv.style.display = "flex";
        websiteSelectionDiv.style.display = "none";
        brandingSelectionDiv.style.display = "none";
        logodesignSelectionDiv.style.display = "none";
        typographySelectionDiv.style.display = "none";
        otherSelectionDiv.style.display = "none";
      } else if (event.target.value === "website") {
        graphicSelectionDiv.style.display = "none";
        websiteSelectionDiv.style.display = "flex";
        brandingSelectionDiv.style.display = "none";
        logodesignSelectionDiv.style.display = "none";
        typographySelectionDiv.style.display = "none";
        otherSelectionDiv.style.display = "none";
      }
      else if (event.target.value === "branding") {
        graphicSelectionDiv.style.display = "none";
        websiteSelectionDiv.style.display = "none";
        brandingSelectionDiv.style.display = "flex";
        logodesignSelectionDiv.style.display = "none";
        typographySelectionDiv.style.display = "none";
        otherSelectionDiv.style.display = "none";
      }
      else if (event.target.value === "logodesign") {
        graphicSelectionDiv.style.display = "none";
        websiteSelectionDiv.style.display = "none";
        brandingSelectionDiv.style.display = "none";
        logodesignSelectionDiv.style.display = "flex";
        typographySelectionDiv.style.display = "none";
        otherSelectionDiv.style.display = "none";
      }
      else if (event.target.value === "typography") {
        graphicSelectionDiv.style.display = "none";
        websiteSelectionDiv.style.display = "none";
        brandingSelectionDiv.style.display = "none";
        logodesignSelectionDiv.style.display = "none";
        typographySelectionDiv.style.display = "flex";
        otherSelectionDiv.style.display = "none";
      }
      else if (event.target.value === "other") {
        graphicSelectionDiv.style.display = "none";
        websiteSelectionDiv.style.display = "none";
        brandingSelectionDiv.style.display = "none";
        logodesignSelectionDiv.style.display = "none";
        typographySelectionDiv.style.display = "none";
        otherSelectionDiv.style.display = "flex";
      }
      else {
        graphicSelectionDiv.style.display = "none";
        websiteSelectionDiv.style.display = "none";
        brandingSelectionDiv.style.display = "none";
        logodesignSelectionDiv.style.display = "none";
        typographySelectionDiv.style.display = "none";
        otherSelectionDiv.style.display = "none";
      }
    })
  })

  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  console.log(inputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({})
  };

  return (
    <>
      <Navbar />
      <div className={styles.orderpagemainbody}>
        <BackBtn />
        <form
          onSubmit={handleSubmit}
          method="POST"
          className={styles.informationsection}
        >
          <label className={styles.divheader}>billing information</label>
          <div className={styles.billingdiv}>
            <div className={styles.fielddiv}>
              <input
                type="text"
                name="firstname"
                placeholder="enter your name"
                onChange={handleChange}
                className={styles.inputfield}
              />
              <input
                type="text"
                name="lastname"
                placeholder="enter your surname"
                onChange={handleChange}
                className={styles.inputfield}
              />
            </div>

            <div className={styles.fielddiv}>
              <input
                type="text"
                name="companyname"
                placeholder="enter your company name"
                onChange={handleChange}
                className={styles.inputfield}
              />
              <input
                type="number"
                name="phone"
                placeholder="enter your phone no"
                onChange={handleChange}
                className={styles.inputfield}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="enter your email"
              onChange={handleChange}
              className={styles.inputfield}
            />
            <input
              type="text"
              name="address"
              placeholder="enter your address"
              onChange={handleChange}
              className={styles.inputfield}
            />
          </div>

          <label className={styles.divheader}>order information</label>

          <div className={styles.billingdiv}>
            <input
              type="text"
              name="designname"
              placeholder="enter your design name"
              onChange={handleChange}
              className={styles.inputfield}
            />
            <select name="category" onChange={handleChange} id="category-select" className={styles.inputfield}>
              <option value="">select the category</option>
              <option value="graphic">Graphic Design</option>
              <option value="website">Website Design</option>
              <option value="branding">Branding</option>
              <option value="logodesign">Logo Design</option>
              <option value="typography">Typograpgy</option>
              <option value="other">other matter</option>
            </select>

            {/* graphic option */}
            <div id="graphic-selection-div" className={styles.selectiondiv} style={{ display: "none" }}>
              <select name="tag" onChange={handleChange} className={styles.inputfield} id="graphic">
                <option>select the graphic type</option>
                <option>visual identity</option>
                <option>advertisement</option>
                <option>publication</option>
                <option>motion graphic</option>
                <option>environmental graphic</option>
                <option>informational graphic</option>
                <option>illustration</option>
                <option>layout graphic</option>
                <option>packing</option>
                <option>other matter</option>
              </select>
              <select name="graphicratio" onChange={handleChange} className={styles.inputfield} id="graphic">
                <option value="">select the graphic size ratio</option>
                <option value="1:1suqare">1:1 (square size)</option>
                <option value="9:16potrate">9:16 (potrate size)</option>
                <option value="16:9landscape">16:9 (landscape size)</option>
              </select>
              <div className={styles.fielddiv} id="graphic">
                <input
                  type="number"
                  name="width"
                  onChange={handleChange}
                  placeholder="enter graphic/poster/banner width"
                  className={styles.inputfield}
                />
                <input
                  type="number"
                  name="height"
                  onChange={handleChange}
                  placeholder="enter graphic/poster/banner height"
                  className={styles.inputfield}
                />
              </div>
              <select name="graphiclanguage" onChange={handleChange} className={styles.inputfield} id="graphic">
                <option value="">select the graphic language</option>
                <option value="english">english</option>
                <option value="bengali">bengali</option>
                <option value="other">other language</option>
              </select>
              <input
                type="text"
                name="projectref"
                onChange={handleChange}
                placeholder="enter our project reference (if any)"
                className={styles.inputfield}
                id="graphic"
              />
            </div>

            {/* website option */}
            <div id="website-selection-div" className={styles.selectiondiv} style={{ display: "none" }}>
              <select name="tag" className={styles.inputfield} id="website" onChange={handleChange}>
                <option>select the website type</option>
                <option>e-commerce site</option>
                <option>business site</option>
                <option>portfolio site</option>
                <option>blog site</option>
                <option>event site</option>
                <option>personal site</option>
                <option>informational site</option>
                <option>non-profit site</option>
                <option>membership site</option>
                <option>online forum site</option>
                <option>other type site</option>
              </select>
              <input
                type="text"
                name="projectref"
                placeholder="enter our project reference (if any)"
                className={styles.inputfield}
                id="website"
                onChange={handleChange}
              />
            </div>

            {/* branding option */}
            <div id="branding-selection-div" className={styles.selectiondiv} style={{ display: "none" }}>
              <select name="brandinglanguage" className={styles.inputfield} id="branding" onChange={handleChange}>
                <option value="">select the branding language</option>
                <option value="english">english</option>
                <option value="bengali">bengali</option>
                <option value="other">other language</option>
              </select>
              <div className={styles.fielddiv}>
                <select name="brandinglogo" className={styles.inputfield} id="branding" onChange={handleChange}>
                  <option value="">select logo include or not</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
                <select name="brandingpackeging" className={styles.inputfield} id="branding" onChange={handleChange}>
                  <option value="">select full packeging include or not</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <input
                type="text"
                name="projectref"
                placeholder="enter our project reference (if any)"
                className={styles.inputfield}
                id="branding"
                onChange={handleChange}
              />
            </div>

            {/* logo design option */}
            <div id="logodesign-selection-div" className={styles.selectiondiv} style={{ display: "none" }}>
              <select name="logolanguage" className={styles.inputfield} id="logodesign" onChange={handleChange}>
                <option value="">select the logo language</option>
                <option value="english">english</option>
                <option value="bengali">bengali</option>
                <option value="other">other language</option>
              </select>
              <input
                type="text"
                name="projectref"
                placeholder="enter our project reference (if any)"
                className={styles.inputfield}
                id="logodesign"
                onChange={handleChange}
              />
            </div>

            {/* typography option */}
            <div id="typography-selection-div" className={styles.selectiondiv} style={{ display: "none" }}>
              <select name="typographyratio" className={styles.inputfield} id="typography" onChange={handleChange}>
                <option value="">select the graphic size ratio</option>
                <option value="1:1suqare">1:1 (square size)</option>
                <option value="9:16potrate">9:16 (potrate size)</option>
                <option value="16:9landscape">16:9 (landscape size)</option>
              </select>
              <div className={styles.fielddiv} id="typography">
                <input
                  type="number"
                  name="width"
                  placeholder="enter graphic/poster/banner width"
                  className={styles.inputfield}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="height"
                  placeholder="enter graphic/poster/banner height"
                  className={styles.inputfield}
                  onChange={handleChange}
                />
              </div>
              <select name="typographylanguage" className={styles.inputfield} id="typography" onChange={handleChange}>
                <option value="">select the graphic language</option>
                <option value="english">english</option>
                <option value="bengali">bengali</option>
                <option value="other">other language</option>
              </select>
              <input
                type="text"
                name="projectref"
                placeholder="enter our project reference (if any)"
                className={styles.inputfield}
                id="typography"
                onChange={handleChange}
              />
            </div>

            {/* other option */}
            <div id="other-selection-div" className={styles.selectiondiv} style={{ display: "none" }}>
              <input
                type="text"
                name="projectref"
                onChange={handleChange}
                placeholder="enter our project reference (if any)"
                className={styles.inputfield}
                id="other"
              />
            </div>

            <div className={styles.fielddiv}>
              <input
                type="url"
                name="imagereference"
                placeholder="enter your image reference url"
                className={styles.inputfield}
                onChange={handleChange}
              />
              <button
                onClick={() => onAddImgReftBtnClick()}
                className={styles.addrefbtn}
              >
                add url field
              </button>
            </div>

            <div className={styles.newreffielddiv}>{imgreffieldinputList}</div>

            <textarea
              className={styles.textareafield}
              name="description"
              placeholder="tell about it . . ."
              onChange={handleChange}
            />
          </div>

          <div className={styles.btnsection}>
            <button className={styles.submitbtn} type="submit">order now</button>
            <button className={styles.resetbtn} type="reset">reset</button>
          </div>

        </form>

        <div className={styles.pricesection}>
          <div className={styles.topsection}>
            <span className={styles.text}>order summery</span>
            <p className={styles.total}>
              total due :<span className={styles.amount} name="price" onChange={handleChange}> ₹ 4000.00/-</span>
              {/* <span>{inputs.price}</span> */}
            </p>
          </div>
          <div className={styles.bottomsection}>
            <GoShieldCheck className={styles.icon} />
            <div className={styles.text}>
              By placing this order, you agree to the terms and conditions.{" "}
              <br /> <br /> If you run into any issues while ordering,{" "}
              <Link href="/contact" className={styles.link}>
                please contact us immediately
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};