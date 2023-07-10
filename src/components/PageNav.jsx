/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import style from './BoxIcons.module.css';
import { useEffect, useRef, useState } from 'react';
function PageNav() {
  const [title, setTitle] = useState('Code & I');
  const navbar = useRef(null);
  const menuIcon = useRef(null);
  useEffect(() => {
    function classback() {
      navbar.current.classList.toggle('active');
      menuIcon.current.classList.toggle('bx-x');
      console.log('clicked');
    }

    const iconElement = menuIcon.current;

    iconElement.addEventListener('click', classback);

    return () => {
      iconElement.removeEventListener('click', classback);
    };
  }, [menuIcon]);

  /////////////////////////functionsssss for changing title
  // function handleHomeClick() {
  //   setTitle('Code & I | Home');
  // }
  // function handleBlogClick() {
  //   setTitle('Blog Code & I');
  // }

  // function handleCoursesClick() {
  //   setTitle('Courses of Code & I');
  // }
  // function handleAboutClick() {
  //   setTitle('About Code & I');
  // }
  // function handleContactClick() {
  //   setTitle('Contact Us Code & I');
  // }
  // function handleLoginClick() {
  //   setTitle('Login Code & I');
  // }
  // function handleSignupClick() {
  //   setTitle('Sign Up Code & I');
  // }

  // useEffect(
  //   function () {
  //     document.title = `${title}`;
  //     return () => {
  //       document.title = 'Code & I';
  //     };
  //   },
  //   [title]
  // );
  return (
    <nav className={styles.nav_con}>
      <NavLink to="/" className={styles.logo}>
        CODE & I
      </NavLink>
      <div
        ref={menuIcon}
        className={`${style.bx} bx-menu`}
        id={styles.menu_icon}
      >
        <span className={styles.animate}></span>
      </div>
      <ul className={styles.ul_container} ref={navbar}>
        <li>
          <NavLink className={styles.nav_btn} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className={styles.nav_btn} to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.nav_btn} to="/courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.nav_btn} to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.nav_btn} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={styles.ctaLink}>
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
