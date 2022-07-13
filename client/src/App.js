import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/home/Home';
import MainNavbar from './components/MainNavbar';
import Footer from './components/shared/Footer';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/home/MainNavbar';
import Courses from './components/courses/Courses';
import CourseShow from './components/courses/CourseShow';
import Users from './components/users/Users';
import UserShow from './components/users/UserShow';

const App = () => (
  <>
  <MainNavbar />
  <Routes>
<Route path='/' element={<Home />} />
<Route path='/course' element={<Courses />} />
<Route path='/course/:id' element={<CourseShow />} />
<Route path='/users' element={<Users />} />
<Route path='/users/:id' element={<UserShow />} />


<Route path='/*' element={<Nomatch />} /> 
  </Routes>
  <Footer />
  
  
  
  </>
)
 export default App;