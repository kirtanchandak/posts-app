import React from "react";
import styles from "./Bio.module.scss";

function Bio({ photo, name, tagline, role }) {
  return (
    <div className={styles.bio}>
      <div className={styles.bioImage}>
        <img src={photo} alt={`Image of ${name}`} />
      </div>
      <div className={styles.bioContent}>
        <p className={styles.bioName}>{name}</p>
        <p className={styles.bioTagline}>{tagline}</p>
        <p className={styles.bioRole}>{role}</p>
      </div>
    </div>
  );
}

export default Bio;
