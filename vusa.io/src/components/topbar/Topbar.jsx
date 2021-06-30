import "./topbar.scss";
import { 
  Nav, 
  Navbar, 
} from 'react-bootstrap/'
import {Home, Apps, Work, Mail, LinkedIn, GitHub, Twitter } from "@material-ui/icons"

export default function Topbar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" id="navbar">
  <Navbar.Brand href="/">Vusumuzi Ngwazini</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/">
      <Home className="icon"/>
      &nbsp; Home
    </Nav.Link>
    <Nav.Link href="/projects">
        <Apps className="icon"/>
        &nbsp; Projects
    </Nav.Link>
    <Nav.Link href="/experience">
      <Work className="icon"/>
      &nbsp; Experience
    </Nav.Link>
    <Nav.Link href="https://www.linkedin.com/in/vusumuzi-ngwazini/" target="_blank">
      <LinkedIn className="icon"/>
      &nbsp; LinkedIn
    </Nav.Link>
      <Nav.Link href="https://github.com/VNgwazini" target="_blank">
        <GitHub className="icon"/>
        &nbsp; GitHub
      </Nav.Link>
      <Nav.Link href="https://twitter.com/VNgwazini" target="_blank">
        <Twitter className="icon"/>
        &nbsp; Twitter
      </Nav.Link>
      <Nav.Link href="mailto:vusumuzi.ngwazini@gmail.com" target="_blank">
        <Mail className="icon"/>
        &nbsp; Email
      </Nav.Link>
      {/* <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://play.google.com/store/apps/details?id=com.vusa.mymemory" target="_blank">
          <Android className="icon"/>
          &nbsp; Android Game
        </NavDropdown.Item>
        <NavDropdown.Item href="https://demo-healthcare-app.vusa.io/" target="_blank">
          <Healing className="icon"/>
          &nbsp; Healthcare App
        </NavDropdown.Item>
        <NavDropdown.Item href="https://demo-rental-property-app.vusa.io/" target="_blank">
          <AccountBalance className="icon"/>
          &nbsp; Rental Property App
        </NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
