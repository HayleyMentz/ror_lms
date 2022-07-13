import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/home/Home';
import MainNavbar from './components/MainNavbar';
import Footer from './components/shared/Footer';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/home/MainNavbar';
import Courses from './components/courses/Courses';
import CourseShow from './components/courses/CourseShow';


const App = () => (
  <>
  <MainNavbar />
  <Routes>
<Route path='/' element={<Home />} />
<Route path='/course' element={<Courses />} />
<Route path='/course/:id' element={<CourseShow />} />


<Route path='/*' element={<Nomatch />} /> 
  </Routes>
  <Footer />
  
  
  
  </>
)
 export default App;