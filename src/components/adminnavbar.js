import React from 'react'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { FaUserCircle } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { RiLogoutCircleLine } from 'react-icons/ri';

import { AuthContext } from "../components/context";
import styles from "./styles/navbar.module.css"

import logo from "../image/frame-logo.svg"

export default dynamic (() => Promise.resolve(navbar), {ssr: false})

const navbar = () => {

    const router = useRouter()
    const [display, setDisplay] = useState("hideNav");

    const click = () => {
      if (display == "hideNav") setDisplay("showNav");
      else setDisplay("hideNav");
    };

    const {setIsAdmin} = useContext(AuthContext)
    const logout = () => {
        setIsAdmin("no")
        router.push("/admin");
    }

    return (
        <div>
            <nav className={styles.navbody}>
                <div className={styles.container}>
                    <button className={styles.hamburger} onClick={click}>
                        <GiHamburgerMenu/>
                    </button>
                    <div className={styles.logo}>
                        <Image 
                        src={logo}
                        alt="Logo"
                        className={styles.mainlogo}
                        width={200}
                        height={40}
                        loading='lazy'
                        />
                    </div>
                    {/* <div className={styles.adminuser}>
                    <FaUserCircle className={styles.hamburger} />
                    </div> */}
                </div>
                <div className={styles.navlist} id={display}>
                    <ul>
                        <Link href="home"><li>HOME</li></Link>
                        <Link href="upload"><li>UPLOAD SECTION</li></Link>
                        <Link href="projectdata"><li>PROJECT DATA</li></Link>
                    <button  onClick={()=>logout()} ><li>
                        <RiLogoutCircleLine className='buttonicon' /> Logout</li>
                        </button>
                    </ul>
                    <style jsx>
            {`
                #showNav{
                    display: block;
                }
                #hideNav{
                    display: none;
                }
            `}
          </style>
                </div>
            </nav>
        </div>
    )
}
