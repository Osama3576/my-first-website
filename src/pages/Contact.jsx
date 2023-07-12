import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';

function Contact() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta
            name="keywords"
            content="codeiwebs,contact,coding-related inquiries,collaboration opportunities,coding courses,coding journey."
          ></meta>
          <meta
            name="description"
            content="Get in touch with us at codeiwebs.com! Contact our team for any coding-related inquiries, collaboration opportunities, or questions about our coding courses. We are here to assist you and provide expert guidance in your coding journey. Reach out to us today and discover how codeiwebs.com can help you unlock your coding potential."
          ></meta>
          <title>
            Get in Touch with Our Coding Experts | Contact CodeiWebs
          </title>
        </Helmet>
        <PageNav />
        <ContactContent />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Contact;
