import "./footer.scss";
import {Mail, LinkedIn, GitHub, Twitter} from "@material-ui/icons"

export default function Footer() {
  return (
    <div className="footer d-flex align-items-center justify-content-between px-1 py-4">
      <span className="d-flex justify-content-start">Vusumuzi Ngwazini © 2021</span>
      <span className="d-flex justify-content-between">
        <a target="_blank" href="https://twitter.com/VNgwazini"><Twitter className="mx-1"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/vusumuzi-ngwazini/"><LinkedIn className="mx-1"/></a>
        <a target="_blank" href="mailto:vusumuzi.ngwazini@gmail.com"><Mail className="mx-1"/></a>
        <a target="_blank" href="https://github.com/VNgwazini"><GitHub className="mx-1"/></a>
      </span>
    </div>
  )
}