import { FaHome, FaFolderOpen, FaPlusCircle, FaSignInAlt, FaSearch } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
        </div>
        <div className="sidebar-user">
          <span className="username">Username</span>
          <span className="formation">Formation</span>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="menu-item">
          <a href="/">
            <FaHome className="icon" />
            <span>Accueil</span>
          </a>
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
          <a href="/project_form">
            <FaPlusCircle className="icon" />
            <span>Créer un projet</span>
          </a>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="menu-item">
          <FaSignInAlt className="icon" />
          <span>Connexion</span>
        </div>
        <div className="footer-logos">
          <img src="/path-to-footer-logo1.png" alt="epsi" className="footer-logo" />
          <img src="/path-to-footer-logo2.png" alt="epsi" className="footer-logo" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
