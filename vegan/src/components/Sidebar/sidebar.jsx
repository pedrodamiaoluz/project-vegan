import { Link } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs"
import { HiOutlineFolderAdd } from "react-icons/hi";
import { BsPersonVcard } from "react-icons/bs";
import { BsTelephonePlus } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";

import * as S from "./style"
import img from "../../assets/foto-email.jpg"

function Sidebar() {
  return (
    <S.SideBar_Container>
      <div className="sidebar__nav">
        <div className="sidebar__login">
          <img src={img} alt="" />
          <span>pedroluzzz28@gmail.com</span>
        </div>
        <ul className="navegacao">
          <li>
            <span><BsHouseDoor /></span>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span><HiOutlineFolderAdd /></span>
            <Link to="minhascategorias">Minhas Categorias</Link>
          </li>
          <li>
            <span><BsPersonVcard /></span>
            <Link to="sobrenos">Sobre Nos</Link>
          </li>
          <li>
            <span><BsTelephonePlus /></span>
            <Link to="contact">Contato-Nos</Link>
          </li>
        </ul>
        <div className="sidebar_desconect">
          <span><BsBoxArrowRight/></span>
          <Link>Desconectar</Link>
        </div>
      </div>
    </S.SideBar_Container>
  )

}

export default Sidebar;