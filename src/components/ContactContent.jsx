/* eslint-disable react/no-unescaped-entities */
import styles from './ContactContent.module.css';
function ContactContent() {
  return (
    <div className={styles.main_con}>
      <section className={styles.contact} id="contact">
        <h2 className={styles.about_heading}>
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className={styles.input_box}>
            <div className={styles.input_field}>
              <input type="text" placeholder="Full Name" required />
              <span className={styles.focus}></span>
            </div>
            <div className={styles.input_field}>
              <input type="email" placeholder="Email Adress" required />
              <span className={styles.focus}></span>
            </div>
          </div>
          <div className={styles.input_box}>
            <div className={styles.input_field}>
              <input type="number" placeholder="Mobile Number" required />
              <span className={styles.focus}></span>
            </div>
            <div className={styles.input_field}>
              <input type="email" placeholder="Email Subject" required />
              <span className={styles.focus}></span>
            </div>
          </div>

          <div className={styles.textarea_field}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your message"
              required
            ></textarea>
            {/* <span className={styles.focus}></span> */}
          </div>

          <div className={`${styles.btn_box} btns`}>
            <button className={styles.btn}>Submit</button>
          </div>
        </form>
      </section>
      <div className={styles.para_con}>
        <h1>Let's talk about everything.</h1>
        <p>
          We would love to hear from you! At "Code&Iweb", we value your
          feedback, inquiries, and collaboration opportunities. Please don't
          hesitate to reach out to us using the contact form.
        </p>
      </div>
    </div>
  );
}

export default ContactContent;
