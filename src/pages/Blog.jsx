import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';

function Blog() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <PageNav />
      blog is here
    </div>
  );
}

export default Blog;
