import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '../components/Footer';
import LoginContent from '../components/LoginContent';
import PageNav from '../components/PageNav';

function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <PageNav />
        <LoginContent />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Login;
