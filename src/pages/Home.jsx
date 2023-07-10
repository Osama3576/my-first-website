import Footer from '../components/Footer';
import MyIntro from '../components/MyIntro';
import PageNav from '../components/PageNav';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Home() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <meta
            name="description"
            content="Home Page of code & I here you can find courses about development and much much more"
          />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
        </Helmet>
        <PageNav />
        <MyIntro />

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Home;
