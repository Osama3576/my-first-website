/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './BlogsConandBlogs.module.css';
// import storage from '../../Poststorage/Posts';
import { NavLink } from 'react-router-dom';
function BlogCard({ searchedPosts }) {
  return (
    <>
      {searchedPosts.map((cv, i) => {
        return (
          <div className={styles.card} key={i}>
            <img className={styles.card_img} src={cv.url} alt={cv.title}></img>
            <p className={styles.card_date}>Date Created {cv.newdate}</p>
            <h1 className={styles.card_heading}>{cv.title}</h1>
            <p className={styles.card_para}>{cv.post.slice(0, 171)}....</p>
            <NavLink
              to={`/blogpost/${cv.title.replace(/\s/g, '-')}/`}
              className={styles.readmore_btn}
            >
              Read more
            </NavLink>
          </div>
        );
      })}
    </>
  );
}

export default BlogCard;
// cv.title.replace(/\s/g, '-')
