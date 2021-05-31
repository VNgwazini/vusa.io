import "./topbar.scss";
import { 
  Nav, 
  Navbar, 
  NavDropdown 
} from 'react-bootstrap/'

export default function Topbar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Vusumuzi Ngwazini</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="https://www.linkedin.com/in/vusumuzi-ngwazini/">LinkedIn</Nav.Link>
      <Nav.Link href="https://github.com/VNgwazini">GitHub</Nav.Link>
      <Nav.Link href="https://twitter.com/VNgwazini">Twitter</Nav.Link>
      <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://play.google.com/store/apps/details?id=com.vusa.mymemory">Android Game</NavDropdown.Item>
        <NavDropdown.Item href="#healthcare">Healthcare App</NavDropdown.Item>
        <NavDropdown.Item href="#rental">Rental Property App</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
