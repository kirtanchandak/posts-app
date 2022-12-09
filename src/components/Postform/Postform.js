import React from "react";
import styles from "./Postform.module.scss";

function Postform() {
  return (
    <div>
      <form action="">
        <textarea className={styles.inputContent}></textarea>
        <button className={styles.addButton}>Add New Post</button>
      </form>
    </div>
  );
}

export default Postform;
