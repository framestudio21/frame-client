import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import Notenavbar from "./component/notenavbar";
import Adminnavbar from "../../components/adminnavbar";
import styles from "./styles/home.module.css";

export default dynamic(() => Promise.resolve(Home), { ssr: false });
function Home() {
  const data = [
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
    {
      src: "https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "JA ICCHEE TAI - 2023",
      description:
        "The fluidity and versatility of watercolors makes it uniquely suited to capturing different moods. Watercolors are full of life and very colorful. It not only adds a sense of artistry to a space but also makes it feel warm and homely. As application of watercolors is a hand crafted technique, it is very personal. The frames are thus created using watercolors as a primary medium with few digital elements to fit perfectly with our modern world. These frames are designed to transform the complete experience of a space by adding beauty and life.",
    },
  ];

  return (
    <>
      <Adminnavbar />
      <Notenavbar />
      <div className={styles.mainbody}>


     {data.map((item) => {
      return (
        <>
           <div className={styles.cardbody}>
          <div className={styles.cardimage}>
            <Image
              src={item.src}
              className={styles.image}
              width={0}
              height={0}
              alt="gsjgbjsdb"
            />
          </div>
          <div className={styles.cardtext}>
            <div className={styles.heading}>{item.title}</div>
            <div className={styles.paragraph}>
              {item.description}
            </div>
          </div>
          <div className={styles.cardbtn}>
            <button className={styles.updatebtn}>Update</button>
            <button className={styles.deletebtn}>delete</button>
          </div>
        </div>
        </>
      )
     })}


      </div>
    </>
  );
}


{/* <div className={styles.cardbody}>
          <div className={styles.cardimage}>
            <Image
              src={"https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              className={styles.image}
              width={0}
              height={0}
              alt="gsjgbjsdb"
            />
          </div>
          <div className={styles.cardtext}>
            <div className={styles.heading}>ja icchee tai - 2023</div>
            <div className={styles.paragraph}>
              The fluidity and versatility of watercolors makes it uniquely
              suited to capturing different moods. Watercolors are full of life
              and very colorful. It not only adds a sense of artistry to a space
              but also makes it feel warm and homely. As application of
              watercolors is a hand crafted technique, it is very personal. The
              frames are thus created using watercolors as a primary medium with
              few digital elements to fit perfectly with our modern world. These
              frames are designed to transform the complete experience of a
              space by adding beauty and life.
            </div>
          </div>
          <div className={styles.cardbtn}>
            <button className={styles.updatebtn}>Update</button>
            <button className={styles.deletebtn}>delete</button>
          </div>
        </div> */}