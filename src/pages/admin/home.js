import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { BsArrowRightCircleFill } from "react-icons/bs"

import styles from "../../styles/home.module.css"

import Adminnavbar from "../../components/adminnavbar";
import { AuthContext } from "../../components/context";
import Preloader from "../../components/preloader"



export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {

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

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL+"/home";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data));
  }, []);

  return (
    <>
      <Adminnavbar/>
      <Preloader/>

      <div className={styles.mainbody}>
        {imgs.map((item) => {
          return (
            <div key={item._id}>
              {item.thumbnail && 
              <div className={styles.imagebody}>
              <Link
                href={`/${item.designtype}/${item._id}`}
              
              >
                  <Image
                    src={item.thumbnail}
                    className={styles.image}
                    alt={item.name}
                    width={0}
                    height={0}
                  />
                  <div className={styles.text}>
                <BsArrowRightCircleFill/>
                <br />
                <p>{item.name}</p>
              </div>
              </Link>
            </div>
              }
            </div>
          )
        })}
      </div>
    </>
  );
};
