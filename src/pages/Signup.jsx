import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import SignUpcontent from '../components/SignUpcontent';

function Signup() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign up</title>
        </Helmet>
        <PageNav />
        <SignUpcontent />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Signup;
