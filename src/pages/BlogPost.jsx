/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { NavLink, Outlet } from 'react-router-dom';
import styles from './BlogPost.module.css';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import BlogComment from '../components/Blog components/BlogComment';
import BloguserCommnts from '../components/Blog components/BloguserCommnts';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function BlogPost({ storage }) {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta
            name="keywords"
            content="codeiwebs,coding,technology,web development,tech trends,industry news,expert tips,coding skills"
          ></meta>
          <meta
            name="description"
            content="Explore the fascinating world of coding and technology through our insightful blog. Dive into engaging articles covering various coding languages, web development, tech trends, and more. Stay up-to-date with the latest industry news, expert tips, and tutorials that will sharpen your coding skills. Discover a wealth of knowledge to fuel your passion for coding and excel in the ever-evolving tech landscape."
          ></meta>
          <title>Blog posts | codeiwebs</title>
        </Helmet>
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
          <BlogComment />
          <BloguserCommnts />
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default BlogPost;
