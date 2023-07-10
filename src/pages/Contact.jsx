import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';

function Contact() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Contact Us</title>
        </Helmet>
        <PageNav />
        <ContactContent />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Contact;
