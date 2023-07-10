import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';

function About() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>About Us</title>
        </Helmet>
        <PageNav />
        <AboutContent />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default About;
