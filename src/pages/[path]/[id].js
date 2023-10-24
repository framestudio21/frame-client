import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import {
  BsArrowBarLeft,
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaTwitterSquare, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillFacebook } from "react-icons/ai";

import { FaFacebook, FaInstagram, FaPinterest, FaDribbble, FaTwitter, FaBehance, FaGoogle } from "react-icons/fa";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

import styles from "../../styles/id.module.css";
import Navbar from "../../components/navbar";
import Orderbox from "../../components/orderbox"
import Footer from "../../components/footer"
import BackBtn from "../../components/backbtn"
import CopyBtn from "../../components/copybtn"
import CardCarousel from "../../components/cardcarousel"
import Commentbox from "../../components/commentbox";

export default dynamic(() => Promise.resolve(Id), { ssr: false });
function Id() {
  const router = useRouter();
  const { path, id } = router.query;
  const [data, setData] = useState([]);
  const [imgs, setImgs] = useState([]);

  // image view component
  const [imgdata, setImgData] = useState({});
  const viewImage = (item) => {
    setImgData(item);
  };

  // close button
  const close = () => {
    setImgData({});
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}/${id}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(() => router.push("/404"));
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`)
      .then((res) => res.json())
      .then((d) => setImgs(d));
  }, [id, path, router.isReady]);


  
  // handle popup
  // const [showModal, setShowModal] = useState(false)
  // useEffect(() => {
  //   setShowModal(true)
  // }, [])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 20000); // Change this to the number of milliseconds you want to wait
  // }, []);


  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  //   speed: 500,
  //   pauseOnHover: true,
  //   focusOnSelect: true,
  //   initialSlide: 0,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1240,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 1120,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //         infinite: true,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <Head>
        <title>FRAME STUDIO - PRODUCTS</title>
        <meta
          name="description"
          content="Varities of Graphics or Website Design Products and order item."
        />
      </Head>
      <Navbar />
      <div className={styles.mainbody}>
        {imgdata.imagelink && (
          <div className={styles.imagedisplaydiv} onClick={close}>
            <Image
              src={imgdata.imagelink}
              className={styles.image}
              width={0}
              height={0}
              alt={imgdata.name}
            />
          </div>
        )}
        {imgdata.imagelink1 && (
          <div className={styles.imagedisplaydiv} onClick={close}>
            <Image
              src={imgdata.imagelink1}
              className={styles.image}
              width={0}
              height={0}
              alt={imgdata.name}
            />
          </div>
        )}
        {imgdata.imagelink2 && (
          <div className={styles.imagedisplaydiv} onClick={close}>
            <Image
              src={imgdata.imagelink3}
              className={styles.image}
              width={0}
              height={0}
              alt={imgdata.name}
            />
          </div>
        )}
        {imgdata.imagelink3 && (
          <div className={styles.imagedisplaydiv} onClick={close}>
            <Image
              src={imgdata.imagelink3}
              className={styles.image}
              width={0}
              height={0}
              alt={imgdata.name}
            />
          </div>
        )}
        {imgdata.imagelink4 && (
          <div className={styles.imagedisplaydiv} onClick={close}>
            <Image
              src={imgdata.imagelink4}
              className={styles.image}
              width={0}
              height={0}
              alt={imgdata.name}
            />
          </div>
        )}
        {imgdata.imagelink5 && (
          <div className={styles.imagedisplaydiv} onClick={close}>
            <Image
              src={imgdata.imagelink5}
              className={styles.image}
              width={0}
              height={0}
              alt={imgdata.name}
            />
          </div>
        )}

        <div>
          {data.map((item) => {
                const date = new Date(item.createdate).toDateString()
            return (
              <>
                <BackBtn/>
                <CopyBtn/>
                <div style={{ textAlign: "center" }}>
                  {item.name && <div className={styles.title}>{item.name}</div>}
                  {item.author && (
                    <div className={styles.subtitle}>
                      <div className={styles.creator}>
                        <p>by</p>
                        <Link href="/about">{item.author}</Link>
                        <span>:</span>
                        <div className={styles.createtime}>
                          {date}
                        </div>
                      </div>
                      <div className={styles.createtype}>
                        <p>A</p>
                        {item.tag1 && <Link href={`/product/${item.tag1}`}>{item.tag1},</Link>}
                        {item.tag2 && <Link href={`/product/${item.tag2}`}>{item.tag2},</Link>}
                        {item.tag3 && <Link href={`/product/${item.tag3}`}>{item.tag3},</Link>}
                        {item.tag4 && <Link href={`/product/${item.tag4}`}>{item.tag4},</Link>}
                        {item.tag5 && <Link href={`/product/${item.tag5}`}>{item.tag5}</Link>}
                        <p>design</p>
                      </div>
                    </div>
                  )}
                        <div className={styles.sociallink}>
                      {item.facebooklink && (
                        <Link href={item.facebooklink}>
                          <AiFillFacebook className={styles.icons} />
                        </Link>
                      )}
                      {item.instagramlink && (
                        <Link href={item.instagramlink}>
                          <RiInstagramFill className={styles.icons} />
                        </Link>
                      )}
                      {item.twitterlink && (
                        <Link href={item.twitterlink}>
                          <FaTwitterSquare className={styles.icons} />
                        </Link>
                      )}
                      {item.githublink && (
                        <Link href={item.githublink}>
                          <FaGithub className={styles.icons} />
                        </Link>
                      )}
                    </div>
                  {item.text1 && (
                    <p className={styles.projectparagraph}>{item.text1}</p>
                  )}
                  {item.imagelink && (
                    <Image
                      className={styles.imagefile}
                      src={item.imagelink}
                      alt={item.name}
                      width={0}
                      height={0}
                      loading="lazy"
                      onClick={() => viewImage(item)}
                    />
                  )}
                  {item.text2 && (
                    <p className={styles.projectparagraph}>{item.text2}</p>
                  )}
                  {item.imagelink1 && (
                    <Image
                      className={styles.imagefile}
                      src={item.imagelink1}
                      alt={item.name}
                      width={0}
                      height={0}
                      loading="lazy"
                      onClick={() => viewImage(item)}
                    />
                  )}
                  {item.text3 && (
                    <p className={styles.projectparagraph}>{item.text3}</p>
                  )}
                  {item.imagelink2 && (
                    <Image
                      className={styles.imagefile}
                      src={item.imagelink2}
                      alt={item.name}
                      width={0}
                      height={0}
                      loading="lazy"
                      onClick={() => viewImage(item)}
                    />
                  )}
                  {item.imagelink3 && (
                    <Image
                      className={styles.imagefile}
                      src={item.imagelink3}
                      alt={item.name}
                      width={0}
                      height={0}
                      loading="lazy"
                      onClick={() => viewImage(item)}
                    />
                  )}
                  {item.imagelink4 && (
                    <Image
                      className={styles.imagefile}
                      src={item.imagelink4}
                      alt={item.name}
                      width={0}
                      height={0}
                      loading="lazy"
                      onClick={() => viewImage(item)}
                    />
                  )}
                  {item.imagelink5 && (
                    <Image
                      className={styles.imagefile}
                      src={item.imagelink5}
                      alt={item.name}
                      width={0}
                      height={0}
                      loading="lazy"
                      onClick={() => viewImage(item)}
                    />
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* next and previour button and social media link section */}
      <div className={styles.nextbackmaindiv}>
                    <div className={styles.nextbackbar}></div>
                    <div className={styles.nextbackelement}>
                      <div className={styles.nextbacklink}>
                        <Link href="#" className={styles.nextbackbutton}><IoMdArrowDropleftCircle className={styles.icon}/>previous</Link>
                        <span>:</span>
                        <Link href="#" className={styles.nextbackbutton}>next<IoMdArrowDroprightCircle className={styles.icon}/></Link>
                      </div>
                      <div className={styles.sociallink}>
                        <Link href="#" className={styles.icons}>
                            <FaFacebook className={styles.icon}/>
                        </Link>
                        <Link href="#" className={styles.icons}>
                            <FaInstagram className={styles.icon}/>
                        </Link>
                        <Link href="#" className={styles.icons}>
                            <FaPinterest className={styles.icon}/>
                        </Link>
                        <Link href="#" className={styles.icons}>
                            <FaDribbble className={styles.icon}/>
                        </Link>
                        <Link href="#" className={styles.icons}>
                            <FaTwitter className={styles.icon}/>
                        </Link>
                        <Link href="#" className={styles.icons}>
                            <FaBehance className={styles.icon}/>
                        </Link>
                        <Link href="#" className={styles.icons}>
                            <FaGoogle className={styles.icon}/>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.nextbackbar}></div>
                  </div>
                  <Orderbox/>
      <CardCarousel/>
          {/* {showModal && <Commentbox/>} */}
          <Commentbox/>
      <Footer/>

    </>
  );
}
