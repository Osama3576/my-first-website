/* eslint-disable react/no-unescaped-entities */
import styles from './AboutContent.module.css';
function AboutContent() {
  return (
    <section className={styles.about}>
      <h2 className={styles.about_heading}>
        About <span>Me</span>
      </h2>
      <div className={styles.about_img}>
        <img src="myimg.jpg" alt="my-img" className={styles.my_img} />
        <span className={styles.circle_spin}></span>
      </div>
      <div className={styles.about_content}>
        <h3>Full Stack web-Developer!</h3>
        <p>
          Welcome to Our website, the online platform dedicated to the world of
          web development and coding. I'm Osama Shahbaz, a passionate full stack
          web developer with a mission to share my expertise and knowledge with
          fellow enthusiasts like you.<br></br> As a firm believer in the power
          of technology and its ability to transform ideas into reality, I
          embarked on my journey as a web developer to bring creativity,
          functionality, and innovation to the digital landscape. With years of
          experience in the field, I have honed my skills across various
          programming languages, frameworks, and technologies, enabling me to
          tackle diverse challenges and deliver exceptional results.<br></br> My
          goal is to provide you with a comprehensive resource hub where you can
          enhance your web development skills, expand your knowledge, and stay
          up to date with the latest industry trends. From front-end design and
          development to back-end programming and database management, I cover a
          wide range of topics to cater to both beginners and seasoned
          professionals.<br></br> Through engaging tutorials, insightful
          articles, and practical guides, I strive to make complex concepts more
          accessible and enjoyable. <br></br>I understand the importance of
          hands-on learning, which is why I emphasize real-world examples and
          encourage you to apply your skills through interactive projects.
          Whether you're building a personal website, developing a web
          application, or exploring the latest frameworks, "Code & I" is here to
          support you every step of the way. <br></br>In addition to the wealth
          of educational resources, "Code & I" fosters a vibrant community of
          learners and developers. I invite you to join our community forums,
          where you can connect with like-minded individuals, ask questions,
          seek advice, and share your own experiences. <br></br>Collaboration
          and knowledge exchange are the driving forces behind our community,
          and together, we can achieve greater heights in our web development
          journeys. As you explore "Code & I", you'll also have the opportunity
          to discover my personal portfolio, showcasing the projects I've worked
          on and the skills I've mastered. I believe that a strong portfolio is
          a testament to one's abilities, and I encourage you to draw
          inspiration from my work while cultivating your own unique style and
          expertise. <br></br>
          Thank you for visiting "Code & I". I am excited to be your guide on
          this exciting web development adventure. Let's embark on a journey of
          continuous learning, innovation, and growth together. Together, we can
          shape the future of the digital landscape. Feel free to reach out to
          me with any questions, suggestions, or collaboration opportunities.
          I'm here to assist you and make your web development experience an
          exceptional one. <br></br>
          <strong>Happy coding!</strong>
          <br></br>
          <strong>Osama Shahbaz</strong>
        </p>
      </div>
    </section>
  );
}

export default AboutContent;
