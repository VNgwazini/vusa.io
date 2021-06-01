import "./topbar.scss";
import { 
  Nav, 
  Navbar, 
  NavDropdown 
} from 'react-bootstrap/'

export default function Topbar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="#intro">Vusumuzi Ngwazini</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#intro">Home</Nav.Link>
    <Nav.Link href="#portfolio">Preview</Nav.Link>
    <Nav.Link href="https://www.linkedin.com/in/vusumuzi-ngwazini/">LinkedIn</Nav.Link>
      <Nav.Link href="https://github.com/VNgwazini">GitHub</Nav.Link>
      <Nav.Link href="https://twitter.com/VNgwazini">Twitter</Nav.Link>
      <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://play.google.com/store/apps/details?id=com.vusa.mymemory">Android Game</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/VNgwazini/Healthcare-App">Healthcare App</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/VNgwazini/Rental-Property-App">Rental Property App</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
