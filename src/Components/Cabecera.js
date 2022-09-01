
import { Link } from 'react-router-dom'

// IMPORT IMAGES
import logo from '../images/logo_triskai.svg'
import lupa from '../images/lupaBusqueda.png'
import carrito from '../images/carritoCompra.png'
import burger from '../images/burgerMenu.svg'

function Cabecera() {
  return (
    <header className="header">
      <div className="header__container container">
        <nav className="header__menu">
          <input type="checkbox" className="header__menu-checkinput" id="burger" />
          <label for="burger" className="header__menu-checkbttn">
            <img className="header__menu-burgerImg" src={burger} />
          </label>

          <ul className="header__list">
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/">INICIO</Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/merch">MERCH</Link>
              <ul className="header__menu-list">
                <li className="header__menu-list-item">
                  <Link className="header__menu-list-link" to="/ropa">ROPA</Link>
                </li>
                <li className="header__menu-list-item">
                  <Link className="header__menu-list-link" to="/joyeria">JOYERÍA</Link>
                </li>
                <li className="header__menu-list-item">
                  <Link className="header__menu-list-link" to="/otros">OTROS</Link>
                </li>
              </ul>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/contacto">CONTACTO</Link>
            </li>
          </ul>
        </nav>
        <Link to="/"><img className="header__logo" src={logo} /></Link>
        <nav className="header__user">
          <ul className="header__user-list">
            <li className="header__user-item">
              <Link className="header__user-link" to="/busqueda"><img src={lupa} /></Link>
            </li>
            <li className="header__user-item">
              <Link className="header__user-link" to="/carrito"><img src={carrito} /></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecera