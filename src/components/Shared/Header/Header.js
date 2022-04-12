import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link,} from 'react-router-dom';
import logo from '../../../images/logo-black.png'
const Header = () => {
    return (
        <Navbar  sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand as={Link} to='/'>
      <img className='w-50' src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#banner">Home</Nav.Link>
      <Nav.Link href="home#services">services</Nav.Link>
      <Nav.Link href="home#experts">Experts</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      <Nav.Link as={Link} to='/login'>
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;