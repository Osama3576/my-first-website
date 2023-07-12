import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';

function About() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta
            name="keywords"
            content="codeiwebs,HTML, CSS, Coding courses,Free coding classes,Programming tutorials,Learn coding online,Web development training"
          ></meta>
          <meta
            name="description"
            content="Unlock the world of coding with codeiwebs.com! Our platform offers free, comprehensive coding courses designed to empower individuals at every skill level. Learn and master coding languages with our extensive tutorials and resources. Join our thriving community today to gain in-demand skills and excel in the world of programming. Start your coding journey with codeiwebs.com and unleash your potential!"
          ></meta>
          <title>Discover Our Coding Journey | About CodeiWebs</title>
        </Helmet>
        <PageNav />
        <AboutContent />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default About;
