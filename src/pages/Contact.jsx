import { Helmet } from 'react-helmet';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';

function Contact() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
      </Helmet>
      <PageNav />
      <ContactContent />
      <Footer />
    </div>
  );
}

export default Contact;
