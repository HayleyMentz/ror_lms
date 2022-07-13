import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/home/Home';
import MainNavbar fro './components/MainNavbar';
import Footer from './components/shared/Footer';
import Nomatch from './components/shared/Nomatch';

const App = () => (
  <>
  <MainNavbar />
  <Routes>
<Route path='/' element={<Home />} />


<Route path='/*' element={<Nomatch />} /> 
  </Routes>
  <Footer />
  
  
  
  </>
)
 export default App;