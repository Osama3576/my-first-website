/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import styles from './SignUpcontent.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUpUser } from '../../services/apiSignup';
import { toast } from 'react-hot-toast';
function SignUpcontent() {
  const [email, setEmail] = useState();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      toast.success('You signed up successfully');
      queryClient.invalidateQueries({
        queryKey: ['signup'],
      });
    },
    onError: error => {
      toast.error(error.message);
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    const signupData = { email };
    mutate(signupData);
    setEmail('');
  }
  return (
    <div className={styles.main_con}>
      <form
        onSubmit={handleSubmit}
        name="signup"
        className={styles.login_con}
        netlify
      >
        <div className={styles.heading_con}>
          <h1>Create your account</h1>
        </div>
        <div className={styles.user_input}>
          <label htmlFor="username">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            name="username"
            id="username"
            required
          />
        </div>
        {/* <div className={styles.user_Pass}>
          <label htmlFor="password">Username</label>
          <input type="password" placeholder="password" id="password" />
        </div> */}
        <button disabled={isLoading} type="submit" className={styles.login_btn}>
          Create an account
        </button>
      </form>
    </div>
  );
}

export default SignUpcontent;
