import { Helmet } from 'react-helmet';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';

function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
      </Helmet>
      <PageNav />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
