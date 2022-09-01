import {useState} from 'react'

function Contacto(){
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")
  let [contacto, setContacto] = useState({})
  let [cumplimentado, setCumplimentado] = useState(false)

  if(cumplimentado===false){
    return(
      <section>
        <h2 className="main__title">CONTACTO</h2>
        <div className="contact__container container">
          <div className="contact__name">
            <label className="contact__title">Nombre</label>
            <input className="contact__input" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
          </div>
          <div className="contact__email">
            <label className="contact__title">Email</label>
            <input className="contact__input" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <textarea className="contact__message" placeholder="Mensaje..." value={message} onChange={(e)=> setMessage(e.target.value)}/>
          <button className="contact__button button--xs" onClick={()=>{
            setCumplimentado(true)
            setContacto({nombre:name, correo:email, mensaje:message})
          }} >Enviar</button>
        </div>
      </section>
    )
  }else if(cumplimentado===true){
    return(
    <section>
        <h2 className="main__title">CONTACTO</h2>
        <div className="respuesta__container container">
        <h4 className="respuesta__mensaje">Hemos recibido tu mensaje correctamente, {contacto.nombre} nos pondremos en contacto contigo a la mayor brevedad posible.</h4>
        </div>
      </section>
    )
  }
}

export default Contacto