import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import SignUpcontent from '../components/SignUpcontent';

function Signup() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign up</title>
      </Helmet>
      <PageNav />
      <SignUpcontent />
      <Footer />
    </div>
  );
}

export default Signup;
