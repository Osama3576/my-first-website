import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';

function PageNotFound() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PageNotFound</title>
      </Helmet>
      <PageNav />
      this is not found page
    </div>
  );
}

export default PageNotFound;
