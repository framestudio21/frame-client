import Navbar from "../components/navbar";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Gallery from "react-photo-gallery";
import ImageGallery from "react-image-gallery";
import PhotoAlbum from "react-photo-album";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import styles from "../styles/home.module.css";

import { BsArrowBarLeft } from "react-icons/bs";

export default dynamic(() => Promise.resolve(Galleryimg), { ssr: false });

const Galleryimg = () => {
  // image view component

  const [data, setData] = useState({});
  const viewImage = (item) => {
    setData(item);
  };

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/digitalart";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data))
      .catch(() => router.push("/404"));
  }, []);

  // close button

  const close = () => {
    setData({});
  };

  const photos = imgs.map((item) => {
    return {
      src: item.thumbnail,
      width: item.width,
      height: item.height,
      alt: item.name,
      Key: item._id,
    };
  });

  const images = imgs.map((item) => {
    return {
      original: item.thumbnail,
      thumbnail: item.thumbnail,
      // width: item.width,
      // height: item.height,
      alt: item.name,
      Key: item._id,
    };
  });

  return (
    <>
      <Head>
        <title>GALLERY</title>
        <meta
          name="description"
          content="Varities of Digital Art Designs and order item."
        />
      </Head>
      <Navbar />
      <div className={styles.gallerymainbody}>
        {/* <Gallery photos={photos} /> */}
        {/* <ImageGallery items={images} /> */}


        {/* <Zoom> */}
          <PhotoAlbum layout="columns" spacing={5} photos={photos} />
        {/* </Zoom> */}

        
        {/* <PhotoAlbum layout="rows" spacing={5} photos={photos} /> */}
      </div>
    </>
  );
};

// the width must be in the number of 5, 10, 15, 20, 25, 30 the height must be only 5. it's only in the gallery (react-photo-gallery)

// {data.thumbnail && (
//     <div className={styles.imagedisplaydiv} onClick={close}>
//       <button name="close" onClick={close} className={styles.closebtn}>
//         <BsArrowBarLeft className={styles.leftarrow} /> close
//       </button>

//       <Image
//         src={data.thumbnail}
//         className={styles.image}
//         width={data.width}
//         height={data.height}
//         alt={data.name}
//       />

//       {data.author && <p className={styles.imageauthor}>{item.author}</p>}
//     </div>
//   )}

{
  /* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 800: 3, 900: 5 }}>
          <Masonry columnsCount={5}>
            {imgs.map((item) => {
              return (
                <div key={item._id}>
                  {item.thumbnail && (
                    <Image
                      src={item.thumbnail}
                      alt={item.name}
                      className={styles.digitalartimage}
                      width={0}
                      height={item.height}
                      onClick={() => viewImage(item)}
                      // loading="lazy"
                      optimized
                      // priority
                    />
                  )}
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry> */
}
