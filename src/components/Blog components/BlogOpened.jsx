/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styles from './BlogOpened.module.css';

function BlogOpened({ currentPost }) {
  return (
    <div className={styles.blog_open_con}>
      <h1 className={styles.title}>{currentPost.title}</h1>
      <p className={styles.date}>by codewebs at :{currentPost.newdate}</p>
      <img src={`../../${currentPost.url}`} alt={currentPost.title} />
      <p className={styles.post_para}>{currentPost.post}</p>
    </div>
  );
}

export default BlogOpened;
