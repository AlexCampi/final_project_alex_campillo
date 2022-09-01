import { Link } from 'react-router-dom'
import papelera from "../images/papelera.png"

function Articulo(props) {
  

  if(props.tipo==="catalog"){
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
  } else if(props.tipo==="single"){
    return (
      <section className="singleProduct container">
          <img className="singleProduct__img" src={props.imagen} alt={props.nombre} />
          <div className="singleProduct__container">
            <h4 className="singleProduct__titles-title">{props.nombre}</h4>
            <h5 className="singleProduct__titles-price">{props.precio}€</h5>
            <hr className="singleProduct__divider"/>
            <p className="singleProduct__p">{props.descripcion}</p>
            <button onClick={()=> props.setCarrito([...props.carrito, props.articulo])} className="button">Añadir al carrito</button>
          </div>
      </section>
    )
  } else if(props.tipo==="cart"){

    return(
      <div className="cartProduct">
        <img className="cartProduct__img" src={props.imagen} alt={props.nombre} />
        <div className="cartProduct__title">
        <h4 className="cartProduct__title-name">{props.nombre}</h4>
        <button className="cartProduct__title-delete" onClick={()=>{props.deleteCart(props.nombre)}}><img className="cartProduct__title-delete-img" src={papelera} alt="Quitar"/></button>
        </div>
        <h5 className="cartProduct__quantity">1</h5>
        <h5 className="cartProduct__price">{props.precio}€</h5>
      </div>
    )
  }
}

export default Articulo