import { Link } from 'react-router-dom'
import Articulo from "./Articulo";
import { useState } from "react"
import Sugerencias from "./Sugerencias";

function Carrito(props) {
  let [finalizar, setFinalizar] = useState(false)
  let [cumplimentado, setCumplimentado] = useState(false)
  let [name, setName] = useState("")
  let [surname, setSurname] = useState("")
  let [email, setEmail] = useState("")
  let [address, setAddress] = useState("")
  let [city, setCity] = useState("")
  let [province, setProvince] = useState("")
  let [phone, setPhone] = useState("")
  let [nameCard, setNameCard] = useState("")
  let [card, setCard] = useState("")
  let [cvv, setCvv] = useState("")
  let [expire, setExpire] = useState("")
  let [order, setOrder] = useState({})

  let precio = 0

  for (let i = 0; i < props.carrito.length; i++) {
    precio += props.carrito[i].precio * props.carrito[i].cantidad
  }

  function deleteCart(articulo) {
    props.setCarrito(props.carrito.filter((producto) => { return (producto.id !== articulo) }))
  }

  function aumentar(id) {
    for (let i = 0; i < props.carrito.length; i++) {
      if (props.carrito[i].id === id) {
        props.carrito[i].cantidad += 1
        props.setCarrito([...props.carrito])
      }
    }
  }

  function reducir(id) {
    for (let i = 0; i < props.carrito.length; i++) {
      if (props.carrito[i].id === id) {
        props.carrito[i].cantidad -= 1
        if (props.carrito[i].cantidad < 1) {
          deleteCart(id)
        } else {
          props.setCarrito([...props.carrito])
        }
      }
    }
  }

  if (props.carrito.length > 0 && finalizar === false) {
    return (
      <main>
        <section className="cart">
          <h2 className="main__title">CARRITO</h2>
          <div className="cart__container container">
            <div className="cart__info">
              <h4 className="cart__info-title">CANTIDAD</h4>
              <h4 className="cart__info-price">PRECIO</h4>
            </div>
            <hr className="cart__divider" />
            {props.carrito.map((articulo, index) => {
              return (<Articulo key={index} tipo="cart" deleteCart={deleteCart} id={articulo.id} imagen={articulo.imagen} nombre={articulo.nombre} precio={articulo.precio} cantidad={articulo.cantidad} aumentar={aumentar} reducir={reducir} />)
            })}
            <hr className="cart__divider" />
            <div className="cart__total">
              <h4 className="cart__total-title">TOTAL</h4>
              <h4 className="cart__total-price">{parseFloat(precio).toFixed(2)} €</h4>
              <button className="cart__total-button button--xs" onClick={() => { setFinalizar(true) }} >Comprar</button>
            </div>
          </div>
        </section>
        <Sugerencias />
      </main>
    )
  } else if (props.carrito.length === 0 && finalizar === false) {
    return (
      <main>
        <section className="cart">
          <h2 className="main__title">CARRITO</h2>
          <div className="cart__container container">
            <div className="cart__empty">
              <h3 className="cart__empty-title">Oops! Parece que aún no has añadido nada al carrito.</h3>
            </div>
          </div>
        </section>
        <Sugerencias />
      </main>
    )
  } else {
    if (cumplimentado === false) {
      return (
        <main>
          <section>
            <h2 className="main__title">TU PEDIDO</h2>
            <div className="order__container container">
              <h3 className="order__title">Información de contacto</h3>
              <input className="order__email" type="text" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
              <h3 className="order__title">Información de envío</h3>
              <input className="order__name" type="text" placeholder="Nombre..." value={name} onChange={(e) => setName(e.target.value)} />
              <input className="order__surname" type="text" placeholder="Apellidos..." value={surname} onChange={(e) => setSurname(e.target.value)} />
              <input className="order__address" type="text" placeholder="Dirección..." value={address} onChange={(e) => setAddress(e.target.value)} />
              <input className="order__city" type="text" placeholder="Ciudad..." value={city} onChange={(e) => setCity(e.target.value)} />
              <input className="order__province" type="text" placeholder="Provincia..." value={province} onChange={(e) => setProvince(e.target.value)} />
              <input className="order__phone" type="text" placeholder="Teléfono..." value={phone} onChange={(e) => setPhone(e.target.value)} />
              <h3 className="order__title">Método de pago</h3>
              <input className="order__nameCard" type="text" placeholder="Nombre en la tarjeta..." value={nameCard} onChange={(e) => setNameCard(e.target.value)} />
              <input className="order__card" type="text" placeholder="Tarjeta..." value={card} onChange={(e) => setCard(e.target.value)} />
              <input className="order__cvv" type="text" placeholder="CVV..." value={cvv} onChange={(e) => setCvv(e.target.value)} />
              <input className="order__expire" type="text" placeholder="Caducidad..." value={expire} onChange={(e) => setExpire(e.target.value)} />
              <h4 className="order__price">TOTAL {parseFloat(precio).toFixed(2)}€</h4>
              <button className="order__button-back button" onClick={() => { setFinalizar(false) }} >&lt; Volver al carrito</button>
              <button className="order__button button" onClick={() => {
                setCumplimentado(true)
                setOrder({
                  correo: email,
                  nombre: name,
                  apellidos: surname,
                  direccion: address,
                  ciudad: city,
                  provincia: province,
                  telefono: phone,
                  titular: nameCard,
                  tarjeta: card,
                  cvv: cvv,
                  caducidad: expire,
                })
                props.setCarrito([])
              }} >Finalizar compra</button>
            </div>
          </section>
        </main>
      )
    } else if (cumplimentado === true) {
      return (
        <main>
          <section>
            <h2 className="main__title">TU PEDIDO</h2>
            <div className="finish__container container">
              <h4 className="finish__mensaje">¡Gracias por tu compra! {order.nombre} en breve recibirás un e-mail de confirmación en {order.correo}.</h4>
              <Link className="finish__button button" to="/merch">Seguir comprando</Link>
            </div>
          </section>
        </main>
      )
    }
  }
}

export default Carrito