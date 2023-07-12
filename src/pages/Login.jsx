import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '../components/Footer';
import LoginContent from '../components/authentication/LoginContent';
import PageNav from '../components/PageNav';

function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta
            name="description"
            content="Access your coding journey with ease at codeiwebs.com. Login to your personalized account and dive into a world of coding excellence. Unlock exclusive resources, track your progress, and connect with a community of like-minded learners. Seamlessly continue your coding adventure and take your skills to new heights. Login now and embark on a transformative coding experience with codeiwebs.com."
          />
          <meta
            name="keywords"
            content="coding excellence, comprehensive coding courses, beginner-friendly tutorials, advanced programming techniques, coding journey, community, creativity, and technology"
          />
          <title>
            Access Your Personalized Coding Experience | CodeiWebs Login
          </title>
        </Helmet>
        <PageNav />
        <LoginContent />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Login;
