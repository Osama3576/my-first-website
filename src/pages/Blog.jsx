import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import storage from '../Poststorage/Posts';
import styles from './Blog.module.css';
import BlogContentAll from '../components/Blog components/BlogContentAll';
// import { Outlet } from 'react-router-dom';

function Blog() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <PageNav />
        <div className={styles.blog_div_heading}>
          <h1>My Blogs ({storage.length})</h1>
        </div>

        <BlogContentAll />

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Blog;
