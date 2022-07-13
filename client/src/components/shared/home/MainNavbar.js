import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MainNavbar = () => (
<>
<Navbar>
  <Container>
    <Navbar.Brand href="#home">Learn LMS</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse classname="justify-content-end">
  <Link to='/'>Home</Link>
  <Link to='/course'>Courses</Link>
  <Link ro='/users'>Users</Link>
</Navbar.Collapse>
  </Container>
</Navbar>
</>


)

export default MainNavbar;