import React from "react";

import resumeSvg from "../../assets/resume.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Resume</span> that empowers your success !
        </p>
        
        <p className={styles.heading}>
        Build your resume with <span>Precision !</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
