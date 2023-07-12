/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { getComments } from '../../services/apiComment';
import styles from './BloguserCommnts.module.css';
import Spinner from '../Spinner/Spinner';
function BloguserCommnts() {
  //I you need data use this 👇
  const { data: comments, isLoading } = useQuery({
    queryKey: ['Bookings'],
    queryFn: getComments,
  });
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.user_coments_con}>
      <h1> Recent Comments</h1>
      {comments.slice(-5).map(cv => {
        return (
          <div className={styles.user_coment} key={cv.id}>
            <img src="https://edoqfgcdbafyjyoepeva.supabase.co/storage/v1/object/sign/posts/download.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3N0cy9kb3dubG9hZC5wbmciLCJpYXQiOjE2ODkwNzUyNzQsImV4cCI6MTcyMDYxMTI3NH0.dfkQ0Kmw9mZjUsIpp2aF8TSAtsXPyhR3l9fXw6EA4CU&t=2023-07-11T11%3A34%3A35.272Z"></img>
            <div className={styles.name_para}>
              <h2>
                {cv.name} <span>{cv.created_at.slice(0, 10)}</span>
              </h2>
              <p>{cv.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BloguserCommnts;
