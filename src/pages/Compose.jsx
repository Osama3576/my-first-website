/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import styles from './Compose.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../services/apiPosts';
import { toast } from 'react-hot-toast';

// import storage from '../Poststorage/Posts';

function Compose() {
  //   const [posts, setPosts] = useState([]);

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const queryClient = useQueryClient();
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newdate = day + '/' + month + '/' + year;
  const { mutate, isLoading } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success('New Post added successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!url || !title || !post) return;
    const postAllFields = {
      url,
      title,
      post,
      newdate,
    };
    mutate(postAllFields);

    setPost('');
    setTitle('');
    setUrl('');
  };

  return (
    <div>
      <PageNav />
      <div className={styles.ComposeContainer}>
        <form onSubmit={handleSubmit} className={styles.posting_con}>
          <div className={styles.img_url_con}>
            <label htmlFor="url">Url Image</label>
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              type="text"
              id="url"
              placeholder="image url"
            />
          </div>
          <div className={styles.img_Title_con}>
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              id="title"
              placeholder="Post title"
            />
          </div>
          <div className={styles.img_Post_con}>
            <label htmlFor="post">Post</label>
            <textarea
              value={post}
              onChange={e => setPost(e.target.value)}
              type="text"
              id="post"
              placeholder="Post"
            />
          </div>
          <button
            type="submit"
            className={styles.addPost_btn}
            disabled={isLoading}
          >
            Add Post
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Compose;
