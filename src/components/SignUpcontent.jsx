/* eslint-disable react/no-unknown-property */
import styles from './SignUpcontent.module.css';
function SignUpcontent() {
  return (
    <div className={styles.main_con}>
      <form name="signup" className={styles.login_con} netlify>
        <div className={styles.heading_con}>
          <h1>Create your account</h1>
        </div>
        <div className={styles.user_input}>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="username"
            id="username"
          />
        </div>
        {/* <div className={styles.user_Pass}>
          <label htmlFor="password">Username</label>
          <input type="password" placeholder="password" id="password" />
        </div> */}
        <button type="submit" className={styles.login_btn}>
          Create an account
        </button>
      </form>
    </div>
  );
}

export default SignUpcontent;
