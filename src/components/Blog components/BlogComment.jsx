/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from '../../pages/BlogPost.module.css';
import { createComment } from '../../services/apiComment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
function BlogComment() {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { mutate, isLoading } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      toast.success('New Comment added successfully');
      queryClient.invalidateQueries({
        queryKey: ['Bookings'],
      });
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    const commmentData = {
      comment,
      name,
      email,
    };
    if (!commmentData) return;
    mutate(commmentData);
    setComment('');
    setName('');
    setEmail('');
  };
  return (
    <div className={styles.coment_con}>
      <h1>Leave a Reply</h1>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form onSubmit={handleSubmit} className={styles.form_con}>
        <div className={styles.user_input}>
          <label htmlFor="comment">Comment *</label>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            type="text"
            id="comment"
            name="comment"
            required
          />
        </div>
        <div className={styles.user_Pass}>
          <label htmlFor="name">Name *</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className={styles.user_email}>
          <label htmlFor="email">Email *</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <button
          type="submit"
          className={styles.comment_btn}
          disabled={isLoading}
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}

export default BlogComment;
