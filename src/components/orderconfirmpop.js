import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles/orderconfirmpop.module.css";

import confettiicon from "../image/icon/Confetti.svg";

export default function orderconfirmpop() {
  return (
    <>
      <div className={styles.orderconfirmbody}>
        <div className={styles.topsection}>


          <div className={styles.icondiv}>
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <path
                d="M334.08 227.81C340.415 227.81 345.55 222.675 345.55 216.34C345.55 210.005 340.415 204.87 334.08 204.87C327.745 204.87 322.61 210.005 322.61 216.34C322.61 222.675 327.745 227.81 334.08 227.81Z"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M332.81 168.25C338.443 168.25 343.01 163.683 343.01 158.05C343.01 152.417 338.443 147.85 332.81 147.85C327.177 147.85 322.61 152.417 322.61 158.05C322.61 163.683 327.177 168.25 332.81 168.25Z"
                fill="#6A13FF"
              />
              <path
                d="M88.8301 134.87C94.7782 134.87 99.6001 130.048 99.6001 124.1C99.6001 118.152 94.7782 113.33 88.8301 113.33C82.882 113.33 78.0601 118.152 78.0601 124.1C78.0601 130.048 82.882 134.87 88.8301 134.87Z"
                fill="#6A13FF"
              />
              <path
                d="M162.16 86.5001C167.655 86.5001 172.11 82.0453 172.11 76.5501C172.11 71.0549 167.655 66.6001 162.16 66.6001C156.665 66.6001 152.21 71.0549 152.21 76.5501C152.21 82.0453 156.665 86.5001 162.16 86.5001Z"
                fill="#191919"
              />
              <path
                d="M182.34 164.36C186.305 164.36 189.52 161.145 189.52 157.18C189.52 153.215 186.305 150 182.34 150C178.375 150 175.16 153.215 175.16 157.18C175.16 161.145 178.375 164.36 182.34 164.36Z"
                fill="#191919"
              />
              <path
                d="M299.72 280.07C303.216 280.07 306.05 277.236 306.05 273.74C306.05 270.244 303.216 267.41 299.72 267.41C296.224 267.41 293.39 270.244 293.39 273.74C293.39 277.236 296.224 280.07 299.72 280.07Z"
                fill="#191919"
              />
              <path
                d="M265.02 305.62V321.94"
                stroke="#6A0BFF"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M256.86 313.78H273.18"
                stroke="#6A0BFF"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M221.14 105.78L209.6 117.32"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M209.6 105.78L221.14 117.32"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M182.34 206.58C190.74 206.17 199.06 209.12 207.62 201.11C220.71 188.85 208.15 175.44 221.24 163.18C234.33 150.92 246.89 164.33 259.98 152.07C273.07 139.81 260.51 126.4 273.6 114.14C286.69 101.88 299.25 115.29 312.34 103.03"
                stroke="#6A0BFF"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M243.63 48.6201C246.72 53.6801 245.13 60.2901 240.07 63.3801C235.01 66.4701 228.4 64.8801 225.31 59.8201"
                stroke="#6A0BFF"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M279.26 197.48C273.39 198.29 267.97 194.19 267.16 188.32C266.35 182.45 270.45 177.03 276.32 176.22"
                stroke="#6A0BFF"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M225.325 278.34C231.107 271.863 210.179 243.751 178.582 215.551C146.986 187.35 116.685 169.741 110.903 176.218C105.122 182.696 126.05 210.808 157.646 239.008C189.243 267.208 219.544 284.818 225.325 278.34Z"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M225.31 278.34L50.8799 358.62L110.9 176.22"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M99.5898 210.57C99.5898 210.57 111.96 219.34 133.74 218.1"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M88.6699 243.76C88.6699 243.76 123.48 270.25 175.16 255.5"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M75.7698 282.96C75.7698 282.96 117.44 320.15 187.59 295.14"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M63.1499 321.33C63.1499 321.33 80.1899 334.88 105.6 333.43"
                stroke="#191919"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M148.56 209.83C160.74 158.27 145.65 70.7101 54.3301 77.1001"
                stroke="#6A0BFF"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M197.19 253.24C202.66 247.77 209.76 243.18 217.93 239.61C261 220.81 333.41 230.79 349.13 293.44"
                stroke="#6A0BFF"
                stroke-width="12"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className={styles.header}>thanks for your order !</div>

          <div className={styles.paragraph1}>
            <p className={styles.text1}>thanks for placing order</p>
            <p className={styles.text2}>your order id no <span className={styles.ordernumber}>GD20230023</span></p>
           <p className={styles.text3}>we will send you a notification within 5 days when it's ready.</p>
           <p className={styles.text4}>we time to time connect with you for any queries.</p>
          </div>

          <div className={styles.paragraph2}>
            if you have any question or queries then feel free to get in contact us.
            {/* <br/> */}
            {/* <Link href="/contact">
            <button className={styles.contactbtn}>connect us</button>
            </Link> */}
          </div>

          {/* <div className={styles.paragraph3}>all the best,</div>        */}

        </div>
        <div className={styles.bottomsection}>
          <button className={styles.downloadbtn}>download pdf</button>
          <button className={styles.closebtn}>close</button>
        </div>
        <div className={styles.paragraph4}>powered by frame studio</div>
      </div>
    </>
  );
}
