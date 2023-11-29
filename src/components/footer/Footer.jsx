import "./footer.scss";
import {Mail, LinkedIn, GitHub, Twitter, Nature} from "@material-ui/icons"

export default function Footer() {
  return (
    <div className="footer d-flex align-items-center justify-content-between px-1 py-4 px-4">
      <span className="d-flex justify-content-start pl-2">Vusumuzi Ngwazini © 2024</span>
      <span className="d-flex justify-content-between">
        <a target="_blank" href="https://www.linkedin.com/in/vusumuzi-ngwazini/" rel="noreferrer"><LinkedIn className="mx-1"/></a>
        <a target="_blank" href="https://github.com/VNgwazini" rel="noreferrer"><GitHub className="mx-1"/></a>
        <a target="_blank" href="https://twitter.com/VNgwazini" rel="noreferrer"><Twitter className="mx-1"/></a>
        <a target="_blank" href="mailto:vusumuzi.ngwazini@gmail.com" rel="noreferrer"><Mail className="mx-1"/></a>
        <a target="_blank" href="https://linktr.ee/vusa" rel="noreferrer"><Nature className="ml-1 mr-4"/></a>
      </span>
    </div>
  )
}