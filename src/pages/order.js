import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { GoShieldCheck } from "react-icons/go";

import Navbar from "../components/navbar";
import BackBtn from "../components/backbtn";
import Footer from "../components/footer";

import styles from "../styles/order.module.css";
import Link from "next/link";

const RefImgInput = (props) => {
  return (
    <input
      type="url"
      name="imagereference"
      placeholder={"enter your image reference url" + props.placeholder}
      className={styles.inputfield}
      style={{margin: "5px 0"}}
    />
  );
};

const AddOrderField = () => {
  return (
    <>
              <label className={styles.divheader}>order information</label>
<div className={styles.billingdiv}>
  <input
    type="text"
    name="designname"
    placeholder="enter your design name"
    className={styles.inputfield}
  />
  <select name="category" id="category-select" className={styles.inputfield}>
    <option value="">select the category</option>
    <option value="graphic">Graphic Design</option>
    <option value="website">Website Design</option>
    <option value="branding">Branding</option>
    <option value="logodesign">Logo Design</option>
    <option value="typography">Typograpgy</option>
    <option value="other">other matter</option>
  </select>

  {/* graphic option */}
  <div id="graphic-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
    <select name="tag" className={styles.inputfield} id="graphic">
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
    <select name="graphicratio" className={styles.inputfield} id="graphic">
      <option value="">select the graphic size ratio</option>
      <option value="1:1suqare">1:1 (square size)</option>
      <option value="9:16potrate">9:16 (potrate size)</option>
      <option value="16:9landscape">16:9 (landscape size)</option>
    </select>
   <div className={styles.fielddiv} id="graphic">
   <input
      type="number"
      name="width"
      placeholder="enter graphic/poster/banner width"
      className={styles.inputfield}
    />
    <input
      type="number"
      name="height"
      placeholder="enter graphic/poster/banner height"
      className={styles.inputfield}
    />
   </div>
   <select name="graphiclanguage" className={styles.inputfield} id="graphic">
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
      id="graphic"
    />
  </div>

  {/* website option */}
  <div id="website-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
    <select name="tag" className={styles.inputfield} id="website">
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
    />
  </div>

   {/* branding option */}
   <div id="branding-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
   <select name="brandinglanguage" className={styles.inputfield} id="branding">
      <option value="">select the branding language</option>
      <option value="english">english</option>
      <option value="bengali">bengali</option>
      <option value="other">other language</option>
    </select>
    <div className={styles.fielddiv}>
    <select name="brandinglogo" className={styles.inputfield} id="branding">
      <option value="">select logo include or not</option>
      <option value="yes">yes</option>
      <option value="no">no</option>
    </select>
    <select name="brandingpackeging" className={styles.inputfield} id="branding">
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
    />
  </div>

  {/* logo design option */}
  <div id="logodesign-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
   <select name="logolanguage" className={styles.inputfield} id="logodesign">
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
    />
  </div>

  {/* typography option */}
  <div id="typography-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
    <select name="typographyratio" className={styles.inputfield} id="typography">
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
    />
    <input
      type="number"
      name="height"
      placeholder="enter graphic/poster/banner height"
      className={styles.inputfield}
    />
   </div>
   <select name="typographylanguage" className={styles.inputfield} id="typography">
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
    />
  </div>

  {/* other option */}
  <div id="other-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
    <input
      type="text"
      name="projectref"
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
    placeholder="tell uabout it . . ."
  />
</div>
    </>
  )
}

export default dynamic(() => Promise.resolve(Order), { ssr: false });
const Order = () => {


  // function fot new form image reference input field adding
  const [imgreffieldinputList, setImgRefFieldInputList] = useState([]);
  const [imgrefno, setImgRefNo] = useState(1);

  const onAddImgReftBtnClick = () => {
    setImgRefNo(imgrefno + 1);
    setImgRefFieldInputList(
      imgreffieldinputList.concat(
        <RefImgInput
          key={imgreffieldinputList.length}
          placeholder={` ${imgrefno}`}
        />
      )
    );
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


  // function for new order field
  const [addorderinputList, setAddOrderInputList] = useState([]);

  const onAddNewOrderBtnClick = () => {
    setAddOrderInputList(
      addorderinputList.concat(
        <AddOrderField
          key={addorderinputList.length}
        />
      )
    );
  };


  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const web = [
    "select a type",
    "e-commerce",
    "business",
    "portfolio",
    "blog",
    "event",
    "personal",
    "informational",
  ];
  const graphics = [
    "select a type",
    "visual",
    "advertisement",
    "publication",
    "motion",
    "environmental",
    "illustration",
    "informational",
    "layout",
    "packing",
    "branding",
  ];
  const banner = ["select a language", "bengali", "english"];
  const typography = ["select a language", "bengali", "english"];

  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (inputs.category == "graphics") {
      switch (inputs.tag) {
        case "visual":
          setPrice(299);
          break;
        case "advertisement":
          setPrice(399);
          break;
        case "publication":
          setPrice(499);
          break;
        case "motion":
          setPrice(599);
          break;
        case "environmental":
          setPrice(699);
          break;
        default:
          setPrice(0);
          break;
      }
    }
  }, [inputs.tag]);

  console.log(inputs);

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
                className={styles.inputfield}
              />
              <input
                type="text"
                name="lastname"
                placeholder="enter your surname"
                className={styles.inputfield}
              />
            </div>

            <div className={styles.fielddiv}>
              <input
                type="text"
                name="companyname"
                placeholder="enter your company name"
                className={styles.inputfield}
              />
              <input
                type="number"
                name="phone"
                placeholder="enter your phone no"
                className={styles.inputfield}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className={styles.inputfield}
            />
            <input
              type="text"
              name="address"
              placeholder="enter your address"
              className={styles.inputfield}
            />
          </div>

          <label className={styles.divheader}>order information</label>

          <div className={styles.billingdiv}>
            <input
              type="text"
              name="designname"
              placeholder="enter your design name"
              className={styles.inputfield}
            />
            <select name="category" id="category-select" className={styles.inputfield}>
              <option value="">select the category</option>
              <option value="graphic">Graphic Design</option>
              <option value="website">Website Design</option>
              <option value="branding">Branding</option>
              <option value="logodesign">Logo Design</option>
              <option value="typography">Typograpgy</option>
              <option value="other">other matter</option>
            </select>

            {/* graphic option */}
            <div id="graphic-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
              <select name="tag" className={styles.inputfield} id="graphic">
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
              <select name="graphicratio" className={styles.inputfield} id="graphic">
                <option value="">select the graphic size ratio</option>
                <option value="1:1suqare">1:1 (square size)</option>
                <option value="9:16potrate">9:16 (potrate size)</option>
                <option value="16:9landscape">16:9 (landscape size)</option>
              </select>
             <div className={styles.fielddiv} id="graphic">
             <input
                type="number"
                name="width"
                placeholder="enter graphic/poster/banner width"
                className={styles.inputfield}
              />
              <input
                type="number"
                name="height"
                placeholder="enter graphic/poster/banner height"
                className={styles.inputfield}
              />
             </div>
             <select name="graphiclanguage" className={styles.inputfield} id="graphic">
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
                id="graphic"
              />
            </div>

            {/* website option */}
            <div id="website-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
              <select name="tag" className={styles.inputfield} id="website">
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
              />
            </div>

             {/* branding option */}
             <div id="branding-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
             <select name="brandinglanguage" className={styles.inputfield} id="branding">
                <option value="">select the branding language</option>
                <option value="english">english</option>
                <option value="bengali">bengali</option>
                <option value="other">other language</option>
              </select>
              <div className={styles.fielddiv}>
              <select name="brandinglogo" className={styles.inputfield} id="branding">
                <option value="">select logo include or not</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
              <select name="brandingpackeging" className={styles.inputfield} id="branding">
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
              />
            </div>

            {/* logo design option */}
            <div id="logodesign-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
             <select name="logolanguage" className={styles.inputfield} id="logodesign">
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
              />
            </div>

            {/* typography option */}
            <div id="typography-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
              <select name="typographyratio" className={styles.inputfield} id="typography">
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
              />
              <input
                type="number"
                name="height"
                placeholder="enter graphic/poster/banner height"
                className={styles.inputfield}
              />
             </div>
             <select name="typographylanguage" className={styles.inputfield} id="typography">
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
              />
            </div>

            {/* other option */}
            <div id="other-selection-div" className={styles.selectiondiv} style={{display: "none"}}>
              <input
                type="text"
                name="projectref"
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
              placeholder="tell uabout it . . ."
            />
          </div>

          {AddOrderField}

          <div className={styles.btnsection}>
            <button className={styles.submitbtn} type="submit">order now</button>
            <button className={styles.resetbtn} type="reset">reset</button>
          </div>

          <div className={styles.addmorebtnsection}>
            <p className={styles.text}>to add another order</p>
            <button onClick={() => onAddNewOrderBtnClick()} className={styles.addmorebtn}>add order</button>
          </div>
        </form>

        <div className={styles.pricesection}>
          <div className={styles.topsection}>
            <span className={styles.text}>order summery</span>
            <p className={styles.total}>
              total due :<span className={styles.amount}> ₹ 4000.00/-</span>
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

{
  /* <form className={styles.form} onSubmit={handleSubmit}>
    <h1 className={styles.heading}>Order box</h1>
    <div className={styles.customerDetails}>
      <h3 className={styles.secondaryHeading}>Billing Information</h3>
      <input
        type="text"
        name="name"
        value={"" || inputs.name}
        className={styles.input}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        value={"" || inputs.email}
        className={styles.input}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="number"
        value={"" || inputs.number}
        className={styles.input}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        type="text"
        name="company"
        value={"" || inputs.company}
        className={styles.input}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        type="text"
        name="address"
        value={"" || inputs.address}
        className={styles.input}
        onChange={handleChange}
        placeholder="Company Address"
      />
    </div>

    <div className={styles.orderDetails}>
      <h3 className={styles.secondaryHeading}>order details</h3>
      <input
        type="text"
        name="design"
        value={"" || inputs.design}
        className={styles.input}
        onChange={handleChange}
        placeholder="Design Name"
      />
      <input
        type="text"
        name="url"
        value={"" || inputs.url}
        className={styles.input}
        onChange={handleChange}
        placeholder="Referance URL"
      />
      <textarea
        type="text"
        name="details"
        value={"" || inputs.details}
        className={styles.input}
        onChange={handleChange}
        placeholder="Design Details"
      ></textarea>
      <select
        className={`${styles.input} ${styles.select}`}
        name="category"
        value={"" || inputs.category}
        onChange={handleChange}
      >
        <option className={styles.option} value="">
          select design category
        </option>
        <option className={styles.option} value="graphics">
          graphics
        </option>
        <option className={styles.option} value="website">
          website
        </option>
        <option className={styles.option} value="banner">
          banner
        </option>
        <option className={styles.option} value="logo design">
          logo design
        </option>
        <option className={styles.option} value="typography">
          typography
        </option>
      </select>
      <select
        className={`${styles.input} ${styles.select}`}
        name="tag"
        onChange={handleChange}
        disabled={!inputs.category}
      >
        {inputs.category == "website" &&
          web.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        {inputs.category == "graphics" &&
          graphics.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}

        {inputs.category == "banner" &&
          banner.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}

        {inputs.category == "logo design" &&
          web.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>

      <div className={styles.pricing}>Price: {price}/- only</div>
      <div className={styles.coupon}>
        <input
          type="text"
          className={styles.input}
          placeholder="Coupon Code"
        />
        <button>apply</button>
      </div>
      <button type="submit">Order Now</button>
    </div>
</form> */
}
