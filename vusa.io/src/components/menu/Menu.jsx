import MenuItem from "../menuItem/MenuItem";
import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  const menuItems = [
    {link: "intro", name: "Home"},
    {link: "portfolio", name: "Portfolio"},
    {link: "works", name: "Works"},
    {link: "testimonials", name: "Testimonials"},
    {link: "contact", name: "Contact"}
  ];
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
      <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} info={menuItems[0]}/>
      <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} info={menuItems[1]}/>
      <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} info={menuItems[2]}/>
      <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} info={menuItems[3]}/>
      <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} info={menuItems[4]}/>
      </ul>
    </div>
  )
}
 /*
       <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
 */