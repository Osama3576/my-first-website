/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';

import Compose from './pages/Compose';

// import storage from './Poststorage/Posts';
import BlogPost from './pages/BlogPost';
import BlogOpened from './components/Blog components/BlogOpened';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from './services/apiPosts';
import { Toaster } from 'react-hot-toast';
import Spinner from './components/Spinner/Spinner';

function App() {
  const { data: storage, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getPosts,
  });
  if (isLoading) return <Spinner />;
  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="compose" element={<Compose />} />
        <Route path="courses" element={<Courses />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blogpost" element={<BlogPost storage={storage} />}>
          {storage.map((cv, i) => {
            return (
              <Route
                key={i}
                path={cv.title.replace(/\s/g, '-')}
                element={<BlogOpened index={i} currentPost={cv} />}
              />
            );
          })}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-dark--1)',
            color: 'var(--color-light--2)',
          },
        }}
      />
    </BrowserRouter>
    // </QueryClientProvider>
  );
}

export default App;
// cv.title.replace(/\s/g, '-')
// {storage.map((cv, i) => {
//   return (
//     <Route key={i} path="toblog" element={<p>I am your post</p>} />
//   );
// })}
