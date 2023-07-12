import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageNav from '../components/PageNav';

function Courses() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta
            name="keywords"
            content="codeiwebs,free coding courses,html CSS, Python, ReactJS, Angular, programming,coding journey."
          ></meta>
          <meta
            name="description"
            content="Explore our extensive collection of free coding courses at codeiwebs.com. Dive into the world of programming with our comprehensive tutorials on HTML, CSS, Python, ReactJS, Angular, and more. Learn from industry experts and acquire essential skills to thrive in the world of coding. Start your coding journey today with our free courses and unlock a world of possibilities."
          ></meta>
          <title>
            Master Coding Languages with Our Free Courses | CodeiWebs Courses
          </title>
        </Helmet>
        <PageNav />
        this is courses page
      </div>
    </HelmetProvider>
  );
}

export default Courses;
