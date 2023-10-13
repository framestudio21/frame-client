import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";

import { BsArrowBarLeft } from "react-icons/bs";
import { AuthContext } from "../../components/context";

import styles from "../../styles/admin.module.css";

import logo from "../../image/frame-studio-2.svg";

export default dynamic(() => Promise.resolve(Admin), { ssr: false });
const Admin = () => {
  const router = useRouter();
  const handelInput = () => {
    router.push("/");
  };
  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pass,
      }),
    });
    const data = await res.json();
    if (data.status === 200) {
      alert(data.success);
      setIsAdmin("yes");
      router.push("/admin/home");
    } else if (data.status) {
      setIsAdmin("no");
      alert(data.failed);
    }
    setEmail("");
    setPass("");
  };

  const reset = () => {
    setEmail("");
    setPass("");
  };

  const { setIsAdmin } = useContext(AuthContext);
  return (
    <>
           <Head>
      <title>FRAME STUDIO - ADMIN</title>
      <meta name="description" content="It's a Admin Section"/>
    </Head>
      <div className={styles.mainbody}>
        <button onClick={handelInput} className={styles.closebtn}>
          <BsArrowBarLeft className={styles.leftarrow} /> Back{" "}
        </button>
        <div className={styles.loginform}>
          <Image
            src={logo}
            alt="frame-studio"
            loading="lazy"
            className={styles.logoimg}
            width={0}
            height={0}
          />
          <span>admin login</span>
          <form method="POST">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username@service.com"
            />
            <input
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="password"
            />
            <div className={styles.adminbtn}>
              <button type="submit" name="submit" onClick={loginUser}>
                submit
              </button>
              <button type="reset" name="rest" onClick={reset}>
                reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
