import "./topbar.scss"
import {Mail, LinkedIn, GitHub, Twitter} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">vusa.io</a>
          <div className="itemContainer">
            <LinkedIn className="icon"/>
            <span><a href="https://www.linkedin.com/in/vusumuzi-ngwazini/">LinkedIn</a></span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon"/>
            <span><a href="https://github.com/VNgwazini">GitHub</a></span>
          </div>
          <div className="itemContainer">
            <Twitter className="icon"/>
            <span><a href="https://twitter.com/VNgwazini">Twitter</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span><a href="mailto:vusumuzi.ngwazini@gmail.com">vusumuzi.ngwazini@gmail.com</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
