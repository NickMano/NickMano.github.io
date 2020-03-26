import React from "react";
import '../assets/styles/components/Footer.scss'
import '../assets/styles/components/Contact.scss'
import '../assets/styles/components/Input.scss'

const Footer = () => (
    <footer id="contact" className="footer">
      <form action="/suscripcion/" className="contact">
          <h3>¿Creamos algo juntos?</h3>
          <input type="text" placeholder="Déjame tu mail" className="input" />
          <textarea placeholder="Motivo" className="input input-textarea"></textarea>
          <button className="button button--red" disabled>Enviar</button>
        </form> 
    </footer>
)

export default Footer