import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import LoginContent from '../components/LoginContent';
import PageNav from '../components/PageNav';

function Login() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <PageNav />
      <LoginContent />
      <Footer />
    </div>
  );
}

export default Login;
