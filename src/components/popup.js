import React from 'react'
import styles from '../styles/popup.module.css'
export default function popup(props) {
  return (
    <>
        { props.text &&
            <div className={styles.modal}>{props.text}</div>
        }
    </>
  )
}