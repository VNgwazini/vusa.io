import "./menuItem.scss"

export default function MenuItem({menuOpen, setMenuOpen, info}) {
  //onClick to close menu after selecting any menuItem from menu list
  return (
      <li onClick={()=>setMenuOpen(false)}>
        {console.log(info.link, info.home)}
        <a href={"#" + info.link}>{info.name}</a>
      </li>
  )
}
