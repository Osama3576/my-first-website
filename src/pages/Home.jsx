import Footer from '../components/Footer';
import MyIntro from '../components/MyIntro';
import PageNav from '../components/PageNav';
import { Helmet } from 'react-helmet';
function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <PageNav />
      <MyIntro />

      <Footer />
    </div>
  );
}

export default Home;
