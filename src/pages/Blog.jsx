/* eslint-disable no-unused-vars */
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
// import storage from '../Poststorage/Posts';
import styles from './Blog.module.css';
import BlogContentAll from '../components/Blog components/BlogContentAll';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/apiPosts';
import { useState } from 'react';

import ReactPaginate from 'react-paginate';
import Spinner from '../components/Spinner/Spinner';
// import { Outlet } from 'react-router-dom';

function Blog() {
  const { data: storage, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getPosts,
  });

  if (isLoading) return <Spinner />;

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
          <title>
            Insightful Coding Articles & Tech Trends | CodeiWebs Blog
          </title>
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
