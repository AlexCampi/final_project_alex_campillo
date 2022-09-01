import { useEffect, useState } from "react"
import Articulo from "./Articulo"

function Sugerencias() {
  let [fail, setFail] = useState(false)
  let [loading, setLoading] = useState(false)
  let [sugerencias, setSugerencias] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => respuesta.json())
      .then((res) => {
        let inventario = res
        let sugerenciaRandom = []
        for (let i = 0; i < 3; i++) {
          sugerenciaRandom.push(inventario[Math.floor(Math.random() * inventario.length)])
        }
        setSugerencias(sugerenciaRandom)
        setLoading(false)
      })
      .catch((err)=>{
        setFail(true);
        console.log(err.message)
      })
  }, [])

  if (fail) {
    return (
      <section>
        <h3 className="suggest__title">También te puede interesar</h3>
        <h3 className="loading">Oops! Parece que ha ocurrido algún problema, por favor vuelve a intentarlo más tarde.</h3>
      </section>
    )
  } else if (loading) {
    return (
      <section>
        <h3 className="suggest__title">También te puede interesar</h3>
        <h3 className="loading">Cargando...</h3>
      </section>
    )
  } else {

    return (
      <section>
        <h3 className="suggest__title">También te puede interesar</h3>
        <div className="catalog container" >
          {sugerencias.map((articulo, index) => {
            return (<Articulo key={index} onClick={() => setSugerencias([])} id={articulo.id} tipo="catalog" imagen={articulo.image} nombre={articulo.title} precio={articulo.price} />)
          })}
        </div>
      </section>
    )
  }
}

export default Sugerencias