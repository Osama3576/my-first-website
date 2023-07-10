import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageNav from '../components/PageNav';

function Courses() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Courses</title>
        </Helmet>
        <PageNav />
        this is courses page
      </div>
    </HelmetProvider>
  );
}

export default Courses;
