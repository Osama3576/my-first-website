import styles from './Footer.module.css';
import style from './BoxIcons.module.css';
function Footer() {
  return (
    <footer className={styles.footer_con}>
      <div className={styles.img_para_con}>
        <img className={styles.footer_img} src="logo.png"></img>
        <p>Copyright © 2022 codeiwebs.com</p>
      </div>
      <div className={styles.social_icons_con}>
        <i className={`${style.bx} bxl-facebook-square`}></i>
        <i className={`${style.bx} bxl-instagram`}></i>
        <i className={`${style.bx} bxl-twitter`}></i>
        <i className={`${style.bx} bxl-github`}></i>
      </div>
    </footer>
  );
}

export default Footer;
