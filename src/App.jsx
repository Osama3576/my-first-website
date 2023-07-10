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

import storage from './Poststorage/Posts';
import BlogPost from './pages/BlogPost';
import BlogOpened from './components/Blog components/BlogOpened';

function App() {
  return (
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
    </BrowserRouter>
  );
}

export default App;
// cv.title.replace(/\s/g, '-')
// {storage.map((cv, i) => {
//   return (
//     <Route key={i} path="toblog" element={<p>I am your post</p>} />
//   );
// })}
