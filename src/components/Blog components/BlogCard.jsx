/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './BlogsConandBlogs.module.css';
// import storage from '../../Poststorage/Posts';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Spinner from '../Spinner/Spinner';
function BlogCard({ searchedPosts }) {
  // const [blogPosts, setBlogPosts] = useState(searchedPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //0

  // console.log(blogPosts);
  const currentPosts = searchedPosts.slice(indexOfFirstPost, indexOfLastPost); // 0 - 8 = 8

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      {currentPosts ? (
        <>
          {currentPosts.map((cv, i) => (
            <div key={cv.id} className={styles.card}>
              <img className={styles.card_img} src={cv.url} alt={cv.title} />
              <p className={styles.card_date}>
                Date Created {cv.newdate.slice(0, 10)}
              </p>
              <h1 className={styles.card_heading}>{cv.title}</h1>
              <p className={styles.card_para}>{cv.post.slice(0, 171)}....</p>
              <NavLink
                to={`/blogpost/${cv.title.replace(/\s/g, '-')}/`}
                className={styles.readmore_btn}
              >
                Read more
              </NavLink>
            </div>
          ))}
          <div className={styles.pageination_con_div}>
            <ReactPaginate
              onPageChange={paginate}
              pageCount={Math.ceil(searchedPosts.length / postsPerPage)}
              previousLabel={'Prev'}
              nextLabel={'Next'}
              containerClassName={`pagination ${styles.pagination}`}
              pageLinkClassName={'page-number'}
              previousLinkClassName={'page-number'}
              nextLinkClassName={'page-number'}
              activeLinkClassName={'active'}
            />
          </div>
        </>
      ) : (
        <h1>no post found</h1> //<Spinner />
      )}
    </>
  );
}

export default BlogCard;
// cv.title.replace(/\s/g, '-')
