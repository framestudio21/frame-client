import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../../components/context";

import Navbar from "../../components/adminnavbar";
import styles from "../../styles/upload.module.css";

export default dynamic(() => Promise.resolve(Upload), { ssr: false });
const Upload = () => {


  const router = useRouter()

  const logout = () => {
    router.push("/admin");
  }

  const {isAdmin} = useContext(AuthContext)
  if (isAdmin == "no" || !isAdmin) 
  return (
  <>
 <div className="restrictedmainbody">
 <div className="restrictedbody">
 <h1 className="restrictedbodyh1">Restricted Web Page</h1>
  <button onClick={()=>logout()} className="restrictedbodybtn" >Refresh</button>
 </div>
 </div>
  </>
  )

  // drop down list code usestate
  useEffect(() => {
    const selectElement = document.getElementById("input-select");
    const graphicInputDiv = document.getElementById("graphic-input-div");
    const webInputDiv = document.getElementById("web-input-div");
    const artInputDiv = document.getElementById("digitalart-input-div");
    const aiartInputDiv = document.getElementById("aiart-input-div");
    const photographyInputDiv = document.getElementById("photography-input-div");
    const advertisementInputDiv = document.getElementById("advertisement-input-div");

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "graphic") {
        graphicInputDiv.style.display = "block";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        aiartInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      } else if (event.target.value === "website") {
        webInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        aiartInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      } else if (event.target.value === "digitalart") {
        artInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        aiartInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      } else if (event.target.value === "photography") {
        photographyInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        aiartInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      } else if (event.target.value === "advertisement") {
        advertisementInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        aiartInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
      } else if (event.target.value === "aiart") {
        aiartInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
      } else {
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        aiartInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      }
    });
  });

  const [formData, setFormData] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {
      designtype,
      name,
      text1,
      text2,
      text3,
      thumbnail,
      imagelink,
      imagelink1,
      imagelink2,
      imagelink3,
      imagelink4,
      imagelink5,
      height,
      width,
      author,
      tag1,
      tag2,
      tag3,
      tag4,
      tag5,
      createdate,
      facebooklink,
        twitterlink,
        instagramlink,
        githublink
    } = formData;
    
    await fetch(process.env.NEXT_PUBLIC_API_URL+"/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        designtype,
        name,
        text1,
        text2,
        text3,
        thumbnail,
        imagelink,
        imagelink1,
        imagelink2,
        imagelink3,
        imagelink4,
        imagelink5,
        height,
        width,
        author,
        tag1,
        tag2,
        tag3,
        tag4,
        tag5,
        createdate,
      facebooklink,
        twitterlink,
        instagramlink,
        githublink  
      }),
    })


    setFormData({
      designtype
    });
  };

  
  const PostAdvertisementData = async (e) => {
    e.preventDefault();

    const {
      designtype,
      name,
      thumbnail
    } = formData;
    
    await fetch(process.env.NEXT_PUBLIC_API_URL+"/advertisement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        designtype,
        name,
        thumbnail
      }),
    })


    setFormData({
      designtype
    });
  };

  const reset = () => {
    setFormData({})
  }

  return (
    <>
      <Navbar />

      <div className={styles.mainbody}>
        <form method="POST">
          <div className={styles.forminput}>
            <label htmlFor="input-select" className={styles.formlabel}>
              Choose design :
            </label>
            <select
              id="input-select"
              name="designtype"
              value={formData.designtype}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="graphic">Graphic desing</option>
              <option value="website">web Design</option>
              <option value="digitalart">Digital Art</option>
              <option value="aiart">AI Art</option>
              <option value="photography">Photography</option>
              <option value="advertisement">advertisement</option>
            </select>
          </div>

          {/* graphic project input div */}
          <div className={styles.mainforminput} id="graphic-input-div">
            <div className={styles.forminput} id="graphic">
              <label className={styles.formheadlabel}>
                Graphic Project Upload
              </label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
               <label htmlFor="input-select" className={styles.formlabel}>author name :</label>
            <select
              id="input-select"
              name="author"
              value={formData.author || ""}
              onChange={handleInputChange}
              required
            >
              <option value="">Select creator</option>
              <option value="sumit kumar duary">Sumit Kumar Duary</option>
              <option value="gourav duary">Gourav Duary</option>
            </select>
            <label htmlFor="input-select" className={styles.formlabel}>design tag :</label>
            <select
              id="input-select"
              name="tag1"
              value={formData.tag1 || ""}
              onChange={handleInputChange}
              required
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
              value={formData.tag2 || ""}
              onChange={handleInputChange}
              required
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
              value={formData.tag3 || ""}
              onChange={handleInputChange}
              required
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
              name="tag4"
              value={formData.tag4 || ""}
              onChange={handleInputChange}
              required
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
              name="tag5"
              value={formData.tag5 || ""}
              onChange={handleInputChange}
              required
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
            <label className={styles.formlabel}>created date :</label>
              <input
                name="createdate"
                type={"date"}
                value={formData.createdate || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>text area 1 :</label>
              <textarea
                name="text1"
                value={formData.text1 || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>text area 2 :</label>
              <textarea
                name="text2"
                value={formData.text2 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>text area 3 :</label>
              <textarea
                name="text3"
                value={formData.text3 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>thumbnail image :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="imagelink"
                type={"text"}
                value={formData.imagelink || ""}
                onChange={handleInputChange}
                required
              />
              <input
                name="imagelink1"
                type={"text"}
                value={formData.imagelink1 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink2"
                type={"text"}
                value={formData.imagelink2 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink3"
                type={"text"}
                value={formData.imagelink3 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink4"
                type={"text"}
                value={formData.imagelink4 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink5"
                type={"text"}
                value={formData.imagelink5 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>facebook link :</label>
              <input
                name="facebooklink"
                type={"text"}
                value={formData.facebooklink || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>twitter link :</label>
              <input
                name="twitterlink"
                type={"text"}
                value={formData.twitterlink || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>instagram link :</label>
              <input
                name="instagramlink"
                type={"text"}
                value={formData.instagramlink || ""}
                onChange={handleInputChange}
              />
              <input type="submit" onClick={PostData} />
              <input type="reset" onClick={reset} />
            </div>
            <style jsx>{`
              #graphic-input-div {
                display: none;
              }
            `}</style>
          </div>

          {/* web project input div */}
          <div className={styles.mainfrominput} id="web-input-div">
            <div className={styles.forminput} id="website">
              <label className={styles.formheadlabel}>
                Website Project Upload
              </label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
               <label htmlFor="input-select" className={styles.formlabel}>author name :</label>
            <select
              id="input-select"
              name="author"
              value={formData.author || ""}
              onChange={handleInputChange}
              required
            >
              <option value="">Select creator</option>
              <option value="sumit kumar duary">Sumit Kumar Duary</option>
              <option value="gourav duary">Gourav Duary</option>
            </select>
            <label htmlFor="input-select" className={styles.formlabel}>design tag :</label>
            <select
              id="input-select"
              name="tag1"
              value={formData.tag1 || ""}
              onChange={handleInputChange}
              required
            >
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
            <label className={styles.formlabel}>created date :</label>
              <input
                name="createdate"
                type={"date"}
                value={formData.createdate || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>text area 1 :</label>
              <textarea
                name="text1"
                value={formData.text1 || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>text area 2 :</label>
              <textarea
                name="text2"
                value={formData.text2 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>text area 3 :</label>
              <textarea
                name="text3"
                value={formData.text3 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>thumbnail image :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="imagelink"
                type={"text"}
                value={formData.imagelink || ""}
                onChange={handleInputChange}
                required
              />
              <input
                name="imagelink1"
                type={"text"}
                value={formData.imagelink1 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink2"
                type={"text"}
                value={formData.imagelink2 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink3"
                type={"text"}
                value={formData.imagelink3 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink4"
                type={"text"}
                value={formData.imagelink4 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink5"
                type={"text"}
                value={formData.imagelink5 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>facebook link :</label>
              <input
                name="facebooklink"
                type={"text"}
                value={formData.facebooklink || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>twitter link :</label>
              <input
                name="twitterlink"
                type={"text"}
                value={formData.twitterlink || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>instagram link :</label>
              <input
                name="instagramlink"
                type={"text"}
                value={formData.instagramlink || ""}
                onChange={handleInputChange}
              />
               <label className={styles.formlabel}>github link :</label>
              <input
                name="githublink"
                type={"text"}
                value={formData.githublink || ""}
                onChange={handleInputChange}
              />
              <input type="submit" onClick={PostData} />
              <input type="reset" onClick={reset} />
            </div>
            <style jsx>{`
              #web-input-div {
                display: none;
              }
            `}</style>
          </div>

          {/* digital art project input div */}
          <div className={styles.mainfrominput} id="digitalart-input-div">
            <div className={styles.forminput} id="digitalart">
              <label className={styles.formheadlabel}>
                Digital Art Project Upload
              </label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image width :</label>
              <input
                name="width"
                type={"text"}
                value={formData.width || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image height :</label>
              <input
                name="height"
                type={"text"}
                value={formData.height || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <input type="submit" onClick={PostData} />
              <input type="reset" onClick={reset} />
            </div>
            <style jsx>{`
              #digitalart-input-div {
                display: none;
              }
            `}</style>
          </div>

          {/* Ai art project input div */}
          <div className={styles.mainfrominput} id="aiart-input-div">
            <div className={styles.forminput} id="aiart">
              <label className={styles.formheadlabel}>
                Ai Art Project Upload
              </label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <input type="submit" onClick={PostData} />
              <input type="reset" onClick={reset} />
            </div>
            <style jsx>{`
              #aiart-input-div {
                display: none;
              }
            `}</style>
          </div>

          {/* photograhy project input div */}
          <div className={styles.mainfrominput} id="photography-input-div">
            <div className={styles.forminput} id="photography">
              <label className={styles.formheadlabel}>Photography Upload</label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>Image Author :</label>
              <input
                name="author"
                type={"text"}
                value={formData.author || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image width :</label>
              <input
                name="width"
                type={"text"}
                value={formData.width || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image height :</label>
              <input
                name="height"
                type={"text"}
                value={formData.height || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <input type="submit" onClick={PostData} />
              <input type="reset" onClick={reset} />
            </div>
            <style jsx>{`
              #photography-input-div {
                display: none;
              }
            `}</style>
          </div>


       {/* Advertisement project input div */}
       <div className={styles.mainfrominput} id="advertisement-input-div">
            <div className={styles.forminput} id="advertisement">
              <label className={styles.formheadlabel}>Advertisement Upload</label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <input type="submit" onClick={PostAdvertisementData} />
              <input type="reset" onClick={reset} />
            </div>
            <style jsx>{`
              #advertisement-input-div {
                display: none;
              }
            `}</style>
          </div>
        </form>
      </div>
    </>
  );
};
