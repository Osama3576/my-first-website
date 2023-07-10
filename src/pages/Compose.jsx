/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import styles from './Compose.module.css';
import storage from '../Poststorage/Posts';
console.log(storage);
function Compose() {
  //   const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newdate = day + '/' + month + '/' + year;

  //   function onAddPost(postcontent) {
  //     setPosts([postcontent, ...posts]);
  //   }
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!url || !title || !post) return;
    const postAllFields = {
      url,
      title,
      post,
      newdate,
    };
    storage.push(postAllFields);

    setPost('');
    setTitle('');
    setUrl('');
    console.log(storage);
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
          <button type="submit" className={styles.addPost_btn}>
            Add Post
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Compose;
