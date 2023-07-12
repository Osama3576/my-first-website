/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import styles from './BlogsConandBlogs.module.css';
// import storage from '../../Poststorage/Posts';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../../services/apiPosts';
import Spinner from '../Spinner/Spinner';

function BlogSearchbar({ searchQuery, setSearchQuery, searchedPosts }) {
  const { data: storage, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getPosts,
  });
  if (isLoading) return <Spinner />;
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
        <div className={styles.recentPost_ul}>
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
      </div>
    </>
  );
}

export default BlogSearchbar;
