import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';

function Courses() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Courses</title>
      </Helmet>
      <PageNav />
      this is courses page
    </div>
  );
}

export default Courses;
