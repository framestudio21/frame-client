import styles from "./styles/footer.module.css"

import { RiCloseCircleLine } from "react-icons/ri"
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect } from "react"

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
const Footer = () => {

    useEffect (() => {
        const btn = document.getElementById('closebtn')

        setTimeout(function() {
            document.getElementById('footerbodyid').style.display = 'block';
          }, 5000)

          btn?.addEventListener("click",function(){document.getElementById('footerbodyid').style.display = 'none'})
    },[])

    return (
        <>
        <div className={styles.footermainbody} id="footerbodyid" 
        style={{display: "none"}} 
        >
            <div className={styles.footerbody}>
            <div className={styles.footertags}>
            <Link className={styles.tagitem} href={`/product/advertisement`}>advertisement</Link>
            <Link className={styles.tagitem} href={`/product/publication`}>publication</Link>
            <Link className={styles.tagitem} href={`/product/branding`}>branding</Link>
            <Link className={styles.tagitem} href={`/product/packaging`}>packaging</Link>
            <Link className={styles.tagitem} href={`/product/typography`}>typography</Link>
            <Link className={styles.tagitem} href={`/product/illustration`}>illustration</Link>
            </div>
            <div id="closebtn" >
                <button className={styles.closebtn}>
                <RiCloseCircleLine/>
                </button>
            </div>
            </div>
        </div>
        </>
    )
}
