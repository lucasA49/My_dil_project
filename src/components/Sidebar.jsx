import { FaHome, FaFolderOpen, FaPlusCircle, FaSignInAlt, FaSearch } from 'react-icons/fa'; 
import '../styles/Sidebar.css'; 
import EPSI from "../assets/epsi.png"
import WIS from "../assets/wis.png"
import PROFIL from "../assets/capybara.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={PROFIL} alt="Logo" className="logo" />
        </div>
        <div className="sidebar-user">
          <span className="username">Username</span>
          <span className="formation"> <br />Formation</span>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="menu-item">
          <FaHome className="icon" />
          <span>Accueil</span>
        </div>
        <div className="menu-item">
          <FaSearch className="icon" />
          <span>Explorer</span>
        </div>
        <div className="menu-item">
          <FaFolderOpen className="icon" />
          <span>Mes projets</span>
        </div>
        <div className="menu-item">
          <FaPlusCircle className="icon" />
          <span>Créer un projet</span>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="menu-item">
          <FaSignInAlt className="icon" />
          <span>Connexion</span>
        </div>
        <div className="footer-logos">
          <img src={EPSI} alt="epsi" className="footer-logo" />
          <img src={WIS} alt="epsi" className="footer-logo" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
