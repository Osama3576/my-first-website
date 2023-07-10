/* eslint-disable react/prop-types */
import styles from './BlogsConandBlogs.module.css';
import storage from '../../Poststorage/Posts';
import { NavLink } from 'react-router-dom';

function BlogSearchbar({ searchQuery, setSearchQuery, searchedPosts }) {
  return (
    <>
      <div className={styles.search_con}>
        <input
          type="search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
        />
        <p>{searchedPosts.length} Posts Found</p>

        <h1>Recent Posts</h1>
        {storage.slice(-5).map((cv, i) => {
          return (
            <ul key={i}>
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
    </>
  );
}

export default BlogSearchbar;
