import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react"

//IMPORT COMPONENTS
import Cabecera from './Components/Cabecera';
import Ropa from './Components/Ropa';
import Joyeria from './Components/Joyeria';
import Otros from './Components/Otros';
import Footer from './Components/Footer';
import Articulo from './Components/Articulo';
import Carrito from './Components/Carrito';
import Sugerencias from './Components/Sugerencias';
import Busqueda from './Components/Busqueda';
import Contacto from './Components/Contacto';
import Envios from './Components/Envios';
import Cookies from './Components/Cookies';
import Privacidad from './Components/Privacidad';

function App() {
  let [loading, setLoading] = useState(false)
  let [fail, setFail] = useState(false)
  let [inventario, setInventario] = useState([])
  let [ropaHombre, setRopaHombre] = useState([])
  let [ropaMujer, setRopaMujer] = useState([])
  let [joyas, setJoyas] = useState([])
  let [otros, setOtros] = useState([])
  let [carrito, setCarrito] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => respuesta.json())
      .then((res) => { setInventario(res); setLoading(false) })
      .catch((err)=>{
        setFail(true);
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((respuesta) => respuesta.json())
      .then((res) => { setRopaHombre(res); setLoading(false) })
      .catch((err)=>{
        setFail(true);
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((respuesta) => respuesta.json())
      .then((res) => { setRopaMujer(res); setLoading(false) })
      .catch((err)=>{
        setFail(true);
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((respuesta) => respuesta.json())
      .then((res) => { setJoyas(res); setLoading(false) })
      .catch((err)=>{
        setFail(true);
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((respuesta) => respuesta.json())
      .then((res) => { setOtros(res); setLoading(false) })
      .catch((err)=>{
        setFail(true);
        console.log(err.message)
      })
  }, [])

  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={
          <main>
            <Ropa loading={loading} fail={fail} ropaHombre={ropaHombre} ropaMujer={ropaMujer} />
            <Joyeria loading={loading} fail={fail} joyas={joyas} />
            <Otros loading={loading} fail={fail} otros={otros} />
          </main>
        } />
        <Route path="/merch" element={
          <main>
            <Ropa loading={loading} fail={fail} ropaHombre={ropaHombre} ropaMujer={ropaMujer} />
            <Joyeria loading={loading} fail={fail} joyas={joyas} />
            <Otros loading={loading} fail={fail} otros={otros} />
          </main>
        } />
        <Route path="/ropa" element={<main><Ropa loading={loading} fail={fail} ropaHombre={ropaHombre} ropaMujer={ropaMujer} /></main>} />
        <Route path="/joyeria" element={<main><Joyeria loading={loading} fail={fail} joyas={joyas} /></main>} />
        <Route path="/otros" element={<main><Otros loading={loading} fail={fail} otros={otros} /></main>} />
        <Route path="/contacto" element={<main><Contacto /></main>} />
        <Route path="/envios" element={<main><Envios /></main>} />
        <Route path="/cookies" element={<main><Cookies /></main>} />
        <Route path="/privacidad" element={<main><Privacidad /></main>} />
        <Route path="/busqueda" element={<main><Busqueda loading={loading} fail={fail} inventario={inventario} /></main>} />
        <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
        {inventario.map((articulo, index) => {
          return <Route key={index} path={`/merch/${articulo.id}`} element={<main><Articulo articulo={articulo} id={articulo.id} carrito={carrito} setCarrito={setCarrito} tipo="single" imagen={articulo.image} nombre={articulo.title} precio={articulo.price} descripcion={articulo.description} /> <Sugerencias /></main>} />
        })}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
