import { Link } from 'react-router-dom'

import logo from '../images/logo_triskai.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <nav className="footer__menu">
          <ul className="footer__list">
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/">INICIO</Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/merch">MERCH</Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/contacto">CONTACTO</Link>
            </li>
          </ul>
        </nav>
        <Link className="footer__link" to="/">
          <img className="footer__img" src={logo} alt="Triskai Logo" />
        </Link>
        <nav className="footer__menu">
          <ul className="footer__list">
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/envios">ENVÍOS</Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/cookies">POLÍTICA DE COOKIES</Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/privacidad">POLÍTICA DE PRIVACIDAD</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p class="footer__derechos">© 2022 Triskai todos los derechos reservados</p>
    </footer>
  )
}

export default Footer