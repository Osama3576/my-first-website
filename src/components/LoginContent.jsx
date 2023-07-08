/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import styles from './LoginContent.module.css';
function LoginContent() {
  return (
    <div className={styles.main_con}>
      <form className={styles.login_con} name="login" netlify>
        <div className={styles.heading_con}>
          <h1>Login here</h1>
        </div>
        <div className={styles.user_input}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
          />
        </div>
        <div className={styles.user_Pass}>
          <label htmlFor="password">Username</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className={styles.login_btn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginContent;
