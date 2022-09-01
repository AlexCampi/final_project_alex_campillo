import Articulo from "./Articulo"

import { useState } from "react"

function Busqueda(props) {
  let [text, setText] = useState("")
  let [resultados, setResultados] = useState(props.inventario)

  function search(producto) {
    setResultados(props.inventario.filter((product) => { return ((product.title).toLowerCase()).includes(producto) }))
  }

  if(props.fail){
    return (
      <section>
        <h2 className="main__title">BUSCAR</h2>
        <h3 className="loading">Oops! Parece que ha ocurrido algún problema, por favor vuelve a intentarlo más tarde.</h3>
      </section>
    )
  } else if (props.loading) {
    return (
      <section>
        <h2 className="main__title">BUSCAR</h2>
        <h3 className="loading">Cargando...</h3>
      </section>
    )
  } else {
    return (
      <section>
        <h2 className="main__title">BUSCAR</h2>
        <div className="buscador container">
          <input className="buscador__input" type="text" placeholder="Buscar..." value={text} onChange={(e) => {
            setText(e.target.value)
            search((e.target.value).toLowerCase())
          }} />
        </div>
        <div className="catalog container">
          {resultados.map((articulo, index) => {
            return (<Articulo key={index} id={articulo.id} tipo="catalog" imagen={articulo.image} nombre={articulo.title} precio={articulo.price} />)
          })}
        </div>
      </section>
    )
  }
}

export default Busqueda