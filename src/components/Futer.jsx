import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'

const Futer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__copyright">© 2023 Películas y documentales &mdash; Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Futer