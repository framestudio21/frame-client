import { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaPinterest,
} from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsArrowRightCircleFill } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles/cardcarousel.module.css";

export default function CardCarousel() {
  //   slider varriable settings
  var settings = {
    dots: false,
    // className: "center",
    // centerPadding: "60px",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    pauseOnHover: true,
    focusOnSelect: true,
    initialSlide: 0,
    arrows: false,
    swipeToSlide: true,
    // afterChange: function(index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  //   data fetching function
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/graphic";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data))
      .catch(() => router.push("/404"));
  }, []);

  return (
    <>
      <div className={styles.cardcarouselmainbody}>
        <div className={styles.carouselheader}>Related Work</div>
        <div className={styles.carouselbody}>
          <Slider {...settings} className={styles.sliderbody}>
            {imgs.map((item) => {
              // product creation date
              const date = new Date(item.createdate).toDateString();

              return (
                <>
                  <div className={styles.cardbody} key={item._id}>
                    <div className={styles.imagesection}>
                     <div className={styles.imagebody}>
                     <Image
                        src={item.thumbnail}
                        width={0}
                        height={0}
                        className={styles.image}
                        alt="item.name"
                        optimized="true"
                      />
                      <Link href={`/${item.designtype}/${item._id}`}>
                      <button
                        className={styles.hovertext}
                      >
                        <BsArrowRightCircleFill className={styles.icon} />
                        <p>{item.name}</p>
                      </button>
                      </Link>
                     </div>
                    </div>
                    <div className={styles.descriptionsection}>
                      <div className={styles.datetagsection}>
                        <div className={styles.date}>{date}</div>
                        <div className={styles.tag}>
                          <Link href={`/product/${item.tag1}`}>typography</Link>
                        </div>
                      </div>
                      <div className={styles.cardheader}>{item.name}</div>
                      <div className={styles.cardtext}>{item.text1}</div>
                      <div className={styles.cardbar}></div>
                      <div className={styles.iconlinksection}>
                        <div className={styles.socialicons}>
                          <Link href="#" className={styles.icons}>
                            <FaFacebookF className={styles.icon} />
                          </Link>
                          <Link href="#" className={styles.icons}>
                            <FaInstagram className={styles.icon} />
                          </Link>
                          <Link href="#" className={styles.icons}>
                            <FaPinterest className={styles.icon} />
                          </Link>
                        </div>
                          <Link href={`/${item.designtype}/${item._id}`} className={styles.readmore}>
                            read more
                            <IoIosArrowDroprightCircle
                              className={styles.icon}
                            />
                          </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

{
  /* <div className={styles.projectcardcarousaltitle}>Related Works</div>
      <div>
        <Slider {...settings} className={styles.slider}>
          {imgs.map((item) => {
            return (
              <>
                <Link href={`/${item.designtype}/${item._id}`}>
                  <div className={styles.cardbody} key={item._id}>
                    {item.thumbnail && (
                      <div className={styles.top}>
                        <Image
                          src={item.thumbnail}
                          className={styles.cardimage}
                          alt={item.name}
                          pr="true"
                          priority="true"
                          width={0}
                          height={0}
                        />
                        <div className={styles.text}>
                          <BsArrowRightCircleFill
                            className={styles.leftarrow}
                          />
                        </div>
                        <div className={styles.bottom}>
                          <div className={styles.cardtitle}>{item.name}</div>
                          <div className={styles.cardtext}>{item.text1}</div>
                          <div className={styles.cardlink}>
                            <button>read more . . .</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </>
            );
          })}
        </Slider>
      </div> */
}
