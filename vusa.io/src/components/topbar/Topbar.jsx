import "./topbar.scss";
import { 
  Nav, 
  Navbar, 
  NavDropdown 
} from 'react-bootstrap/'
import {Home, Mail, LinkedIn, GitHub, Twitter, ViewCarousel, Android, Healing, AccountBalance} from "@material-ui/icons"

export default function Topbar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="#intro">Vusumuzi Ngwazini</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#intro">
      <Home className="icon"/>
      &nbsp; Home
    </Nav.Link>
    <Nav.Link href="https://www.linkedin.com/in/vusumuzi-ngwazini/">
      <LinkedIn className="icon"/>
      &nbsp; LinkedIn
    </Nav.Link>
      <Nav.Link href="https://github.com/VNgwazini">
        <GitHub className="icon"/>
        &nbsp; GitHub
      </Nav.Link>
      <Nav.Link href="https://twitter.com/VNgwazini">
        <Twitter className="icon"/>
        &nbsp; Twitter
      </Nav.Link>
      <Nav.Link href="mailto:vusumuzi.ngwazini@gmail.com">
        <Mail className="icon"/>
        &nbsp; Email
      </Nav.Link>
      <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://play.google.com/store/apps/details?id=com.vusa.mymemory">
          <Android className="icon"/>
          &nbsp; Android Game
        </NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/VNgwazini/Healthcare-App">
          <Healing className="icon"/>
          &nbsp; Healthcare App
        </NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/VNgwazini/Rental-Property-App">
          <AccountBalance className="icon"/>
          &nbsp; Rental Property App
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
