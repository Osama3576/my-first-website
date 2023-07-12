/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from './LoginContent.module.css';
import { login } from '../../services/apiAuth';
import { useLogin } from './useLogin';
import SpinnerMini from '../Spinner/SpinnerMini';
function LoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    mutate({ email, password });
    setEmail('');
    setPassword('');
  }
  return (
    <div className={styles.main_con}>
      <form
        onSubmit={handleSubmit}
        className={styles.login_con}
        name="login"
        netlify
      >
        <div className={styles.heading_con}>
          <h1>Login here</h1>
        </div>
        <div className={styles.user_input}>
          <label htmlFor="username">Username</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Username"
            id="username"
            name="username"
          />
        </div>
        <div className={styles.user_Pass}>
          <label htmlFor="password">Username</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className={styles.login_btn}>
          {!isLoading ? 'Login' : <SpinnerMini />}
        </button>
      </form>
    </div>
  );
}

export default LoginContent;
