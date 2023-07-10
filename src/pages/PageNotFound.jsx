import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageNav from '../components/PageNav';

function PageNotFound() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>PageNotFound</title>
        </Helmet>
        <PageNav />
        this is not found page
      </div>
    </HelmetProvider>
  );
}

export default PageNotFound;
