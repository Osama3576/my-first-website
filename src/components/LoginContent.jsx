/* eslint-disable no-unused-vars */
import styles from './LoginContent.module.css';
function LoginContent() {
  return (
    <div className={styles.main_con}>
      <div className={styles.login_con}>
        <div className={styles.heading_con}>
          <h1>Login here</h1>
        </div>
        <div className={styles.user_input}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" id="username" />
        </div>
        <div className={styles.user_Pass}>
          <label htmlFor="password">Username</label>
          <input type="password" placeholder="password" id="password" />
        </div>
        <button type="submit" className={styles.login_btn}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginContent;
