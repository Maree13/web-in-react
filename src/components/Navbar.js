import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from './logo.png'; // Importovanie loga

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        {/* <img src={logo} alt="Logo" className="logo" /> Pridanie loga */}
        <div className="menu">
          <Link to="/">Home</Link>
          <br />
          <Link to="/Contact">Contact</Link>
          <br />
          <Link to="/Aboutme">About me</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
