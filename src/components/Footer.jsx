import "../styles/layout/footer.scss";
import {NavLink} from 'react-router-dom'



const Footer = () => {
  return (
    <footer className="footer">
        
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink to="/" className="footer__menu-link">A jugar</NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink to="/Instructions" className="footer__menu-link active" 
              >¿Cómo se juega?</NavLink
            >
          </li>
          <li className="footer__menu-item">
            <NavLink to="/Options" className="footer__menu-link">Multijugador</NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
};

export default Footer;