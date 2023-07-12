/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import style from './BoxIcons.module.css';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../services/apiAuth';
import Spinner from './Spinner/Spinner';
function PageNav() {
  const navbar = useRef(null);
  const menuIcon = useRef(null);
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUserData,
  });
  const isAuthenticated = user?.role === 'authenticated';

  useEffect(() => {
    function classback() {
      navbar.current.classList.toggle('activenav');
      menuIcon.current.classList.toggle('bx-x');
    }

    const iconElement = menuIcon.current;

    iconElement.addEventListener('click', classback);

    return () => {
      iconElement.removeEventListener('click', classback);
    };
  }, [menuIcon]);

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

        {!isAuthenticated ? (
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        ) : (
          ''
        )}

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
