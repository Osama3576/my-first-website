import styles from './SignUpcontent.module.css';
function SignUpcontent() {
  return (
    <div className={styles.main_con}>
      <div className={styles.login_con}>
        <div className={styles.heading_con}>
          <h1>Create your account</h1>
        </div>
        <div className={styles.user_input}>
          <label htmlFor="username">Email</label>
          <input type="email" placeholder="Email" id="username" />
        </div>
        {/* <div className={styles.user_Pass}>
          <label htmlFor="password">Username</label>
          <input type="password" placeholder="password" id="password" />
        </div> */}
        <button type="submit" className={styles.login_btn}>
          Create an account
        </button>
      </div>
    </div>
  );
}

export default SignUpcontent;
