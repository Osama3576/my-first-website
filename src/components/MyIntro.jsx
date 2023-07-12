/* eslint-disable react/no-unescaped-entities */
import styles from './MyIntro.module.css';
import { NavLink } from 'react-router-dom';
import style from './BoxIcons.module.css';
function MyIntro() {
  return (
    <section className={styles.home}>
      <div className={styles.home_content}>
        <h1>
          Hi,I'm <span>Osama</span>.
        </h1>

        <div className={styles.text_animate}>
          <h3>Full Stack web-Developer</h3>
        </div>
        <p>
          Welcome to Code & I, the ultimate destination for web development and
          coding enthusiasts! Whether you're a beginner venturing into the world
          of web development or an experienced coder looking to level up your
          skills, you've arrived at the right place.
        </p>
        <div className={styles.btn_box}>
          <NavLink to="/courses" className={styles.btn}>
            Free courses
          </NavLink>
          <NavLink to="/blog" className={styles.btn_trans}>
            Explore Blog
          </NavLink>
        </div>

        <div className={styles.home_sci}>
          <a target="blank" href="https://web.facebook.com/login/?_rdc=1&_rdr">
            <i className={`${style.bx} bxl-facebook-square`}></i>
          </a>
          <a href="#">
            <i className={`${style.bx} bxl-twitter`}></i>
          </a>
          <a href="#">
            <i className={`${style.bx} bxl-instagram`}></i>
          </a>
        </div>
      </div>

      <div className={styles.img_con}>
        <img src="home.jpg" alt="" className={styles.img__home} />
      </div>
    </section>
  );
}

export default MyIntro;
