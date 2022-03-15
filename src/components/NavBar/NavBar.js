import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import logotipo from "../../assets/img/logotipo.png"
import CartIcon from "../CartWidget/CartIcon.js";


function NavBar() {
  return (
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="logotipo"
          src= {logotipo}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
        Dark Zone
      </Navbar.Brand>
    </Container>
    <Container nav-container>
      <Nav className="me-auto navigation-menu">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#productos">Productos</Nav.Link>
        <Nav.Link href="#destacados">Destacados</Nav.Link>
      </Nav>
      <CartIcon />
    </Container>
    
  
  </Navbar>
</>
  )
}

export default NavBar