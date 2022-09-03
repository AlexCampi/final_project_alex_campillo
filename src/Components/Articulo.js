import { Link } from 'react-router-dom'
import papelera from "../images/papelera.png"



function Articulo(props) {

  function exist(id){
    return props.carrito.findIndex(producto => producto.id === id)
  }

  if (props.tipo === "catalog") {
    return (
      <div className="product">
        <Link to={`/merch/${props.id}`}>
          <img className="product__img" src={props.imagen} alt={props.nombre} />
          <div className="product__container">
            <h4 className="product__titles-title">{props.nombre}</h4>
            <h5 className="product__titles-price">{props.precio}€</h5>
          </div>
        </Link>
      </div>
    )
  } else if (props.tipo === "single") {
    return (
      <section className="singleProduct container">
        <img className="singleProduct__img" src={props.imagen} alt={props.nombre} />
        <div className="singleProduct__container">
          <h4 className="singleProduct__titles-title">{props.nombre}</h4>
          <h5 className="singleProduct__titles-price">{props.precio}€</h5>
          <hr className="singleProduct__divider" />
          <p className="singleProduct__p">{props.descripcion}</p>
          <button onClick={() => {
              if(exist(props.id)!==-1){
                props.carrito[exist(props.id)].cantidad += 1
              } else{
                props.setCarrito([...props.carrito, { id: props.id, imagen: props.imagen, nombre: props.nombre, precio: props.precio, cantidad: 1 }])
              }
          }} className="button">Añadir al carrito</button>
        </div>
      </section>
    )
  } else if (props.tipo === "cart") {

    return (
      <div className="cartProduct">
        <Link className="cartProduct__link" to={`/merch/${props.id}`}><img className="cartProduct__img" src={props.imagen} alt={props.nombre} /></Link>
        <div className="cartProduct__title">
          <Link className="cartProduct__title-link" to={`/merch/${props.id}`}><h4 className="cartProduct__title-name">{props.nombre}</h4></Link>
          <button className="cartProduct__title-delete" onClick={() => { props.deleteCart(props.id) }}><img className="cartProduct__title-delete-img" src={papelera} alt="Quitar" /></button>
        </div>
        <div className="cartProduct__quantity">
          <button className="cartProduct__quantity-mod" onClick={() => { props.reducir(props.id) }}>-</button>
          <h5 className="cartProduct__quantity-title">{props.cantidad}</h5>
          <button className="cartProduct__quantity-mod" onClick={() => { props.aumentar(props.id) }}>+</button>
        </div>
        <h5 className="cartProduct__price">{parseFloat(props.precio * props.cantidad).toFixed(2)} €</h5>
      </div>
    )
  }
}

export default Articulo