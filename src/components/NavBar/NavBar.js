import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";



function NavBar() {
  return (
    <>
   <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Dark Zone
      </Navbar.Brand>
    </Container>
    <Container nav-container>
      <Nav className="me-auto navigation-menu">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    
  
    </Container>
  </Navbar>
</>
  )
}

export default NavBar