import React from 'react'
import dynamic from 'next/dynamic';

import styles from "../styles/order.module.css"
export default dynamic(() => Promise.resolve(Order), { ssr: false });
function Order() {
  return (
    <div>order</div>
  )
}