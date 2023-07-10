/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { NavLink, Outlet } from 'react-router-dom';
import styles from './BlogPost.module.css';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';

function BlogPost({ storage }) {
  return (
    <div>
      <PageNav />
      <div className={styles.blogpost_con}>
        <Outlet className={styles.outlet} />
        <div className={styles.recentPost_con}>
          <h1>Recent Posts</h1>
          {storage.slice(-5).map((cv, i) => {
            return (
              <ul key={i} className={styles.ul_con}>
                <NavLink
                  to={`/blogpost/${cv.title.replace(/\s/g, '-')}/`}
                  className={styles.recePost}
                >
                  {cv.title}
                </NavLink>
              </ul>
            );
          })}
        </div>
        <div className={styles.coment_con}>
          <h1>Leave a Reply</h1>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form className={styles.form_con}>
            <div className={styles.user_input}>
              <label htmlFor="comment">Comment *</label>
              <textarea type="text" id="comment" name="comment" />
            </div>
            <div className={styles.user_Pass}>
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={styles.user_email}>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" />
            </div>
            <button type="submit" className={styles.comment_btn}>
              Post Comment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost;
