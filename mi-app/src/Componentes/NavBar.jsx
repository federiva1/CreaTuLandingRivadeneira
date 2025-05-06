import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/PLogo.png';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        <img src={logo} alt="Logo" style={{ height: '40px' }} />
      </Link>

      <div style={styles.links}>
        <Link to="/category/camisetas" style={styles.link}>Camisetas</Link>
        <Link to="/category/entradas" style={styles.link}>Entradas</Link>
      </div>

      <div style={styles.cart}>
        <CartWidget />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#00264d', // Azul oscuro
    borderBottom: '1px solid #ddd',
  },
  logo: {
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'white', // Blanco
    fontWeight: 'bold',
  },
  cart: {
    position: 'relative',
  },
};

export default NavBar;
