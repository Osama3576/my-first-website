import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import SignUpcontent from '../components/authentication/SignUpcontent';

function Signup() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Unlock the power of coding at codeiwebs.com. Sign up for free and embark on a transformative coding journey. Gain access to our comprehensive courses, interactive learning resources, and a thriving community of passionate coders. Start your coding adventure today and unleash your full potential. Sign up now and join the codeiwebs.com community!"
          />
          <meta
            name="keywords"
            content="coding excellence,sign up, comprehensive coding courses, beginner-friendly tutorials, advanced programming techniques, coding journey, community, creativity, and technology"
          />
          <title>
            Join Our Thriving Coding Community | Sign Up at CodeiWebs
          </title>
        </Helmet>
        <PageNav />
        <SignUpcontent />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Signup;
