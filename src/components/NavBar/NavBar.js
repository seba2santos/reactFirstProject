import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import logotipo from "../../assets/img/logotipo.png"
import CartIcon from "../CartWidget/CartIcon.js";
import './NavBar.css';



function NavBar() {
  return (
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <CartIcon />
    <Container className = "logo-container">
      <Navbar.Brand href="#home">
        <img
          alt="logotipo"
          src= {logotipo}
          width="100"
          height="100"
          className="d-inline-block align-top logo"
        />{' '}
        Dark Zone
      </Navbar.Brand>
    </Container>
    <Container nav-container>
      <Nav className="me-auto navigation-menu nav-menu">
        <Nav.Link className= "menu-link" href="#inicio">Inicio</Nav.Link>
        <Nav.Link className= "menu-link" href="#productos">Productos</Nav.Link>
        <Nav.Link className= "menu-link" href="#quienes">Quienes Somos</Nav.Link>
        <Nav.Link className= "menu-link" href="#contacto">Contacto</Nav.Link>
      </Nav>
      
    </Container>
    
  
  </Navbar>
</>
  )
}

export default NavBar