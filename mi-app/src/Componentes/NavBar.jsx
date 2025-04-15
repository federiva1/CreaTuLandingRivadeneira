import CartWidget from "./CartWidget";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/Plogo.png" alt="PremierShop Logo" className="logo" />
      </div>

      <div className="navbar-center">
        <p>Camisetas</p>
        <p>Buzos</p>
        <p>Entradas</p>
      </div>

      <div className="navbar-right">
        <CartWidget />
      </div>
    </div>
  );
}

export default Navbar;
