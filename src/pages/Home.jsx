/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
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
          <meta
            name="description"
            content="Welcome to codeiwebs.com, your gateway to coding excellence. Discover a world of limitless possibilities with our comprehensive coding courses and resources. From beginner-friendly tutorials to advanced programming techniques, we offer a wealth of knowledge to fuel your coding journey. Join our vibrant community, unleash your creativity, and shape the future of technology. Start coding today with codeiwebs.com and turn your dreams into reality."
          />
          <meta
            name="keywords"
            content="coding excellence, comprehensive coding courses, beginner-friendly tutorials, advanced programming techniques, coding journey, community, creativity, and technology"
          />
          <title>Unlock Limitless Coding Possibilities | CodeiWebs</title>
        </Helmet>
        <PageNav />
        <MyIntro />

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Home;
