import Articulo from "./Articulo"

function Joyeria(props) {
  if(props.fail){
    return (
      <section>
        <h2 className="main__title">JOYERÍA</h2>
        <h3 className="loading">Oops! Parece que ha ocurrido algún problema, por favor vuelve a intentarlo más tarde.</h3>
      </section>
    )
  }else if(props.loading) {
    return (
      <section>
        <h2 className="main__title">JOYERÍA</h2>
        <h3 className="loading">Cargando...</h3>
      </section>
    )
  } else {
    return (
      <section>
        <h2 className="main__title">JOYERÍA</h2>
        <div className="catalog container">
          {props.joyas.map((articulo, index) => {
            return (<Articulo key={index} id={articulo.id} tipo="catalog" imagen={articulo.image} nombre={articulo.title} precio={articulo.price} />)
          })}
        </div>
      </section>
    )
  }
}

export default Joyeria