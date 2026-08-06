import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      {/* <h2>Ritik</h2> */}
      <h3 className={styles.logo}>My Logo</h3>
      <h2>Welcome TO My Page..</h2>
      <button className={styles.btn}>Login</button>


    </div>
  )
}

export default Header
