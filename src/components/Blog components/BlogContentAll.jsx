/* eslint-disable no-unused-vars */
import styles from './BlogsConandBlogs.module.css';

import BlogCard from './BlogCard';
import BlogSearchbar from './BlogSearchbar';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../services/apiPosts';
import Spinner from '../Spinner/Spinner';
// import storage from '../../Poststorage/Posts';

function BlogContentAll() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: storage, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getPosts,
  });
  if (isLoading) return <Spinner />;

  const searchedPosts =
    searchQuery.length > 0
      ? storage.filter(post =>
          `${post.title} ${post.post}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : storage;

  return (
    <>
      <div className={styles.blog_main_con}>
        <BlogCard searchedPosts={searchedPosts} />
        <BlogSearchbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchedPosts={searchedPosts}
        />
      </div>
    </>
  );
}

export default BlogContentAll;
