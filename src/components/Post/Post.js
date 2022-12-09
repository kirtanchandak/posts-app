import React from "react";
import styles from "./Post.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

function Post({ content, date }) {
  return (
    <div>
      <p className={styles.postContent}>{content}</p>
      <ul className={styles.postMeta}>
        <li className={styles.postMetaData}>
          <AiFillHeart /> 34
        </li>
        <li className={styles.postMetaData}>
          <FaShareAlt />
          share
        </li>
        <li className={styles.postMetaData}>{date}</li>
      </ul>
    </div>
  );
}

export default Post;
