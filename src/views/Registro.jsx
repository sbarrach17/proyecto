import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Registro = () => {

  return (
    <div>
      <div className='login'>
        <div className='container-login'>
          <div className='card-login'>
            <div className='title-login text-white'>
              <h3>Registrarse</h3>
              <hr />
            </div>
            <Form className="inputs-register" >
            <div className='name-validation text-white'>
                <div>
                  <p>Nombre</p>
                  <Form.Control type="text" placeholder="Ingrese Nombre" name="name" required />
                </div>
                <div>
                  <p className='text-white'>Apellido</p>
                  <Form.Control type="text" placeholder="Ingrese Apellido" name="lastName" required />
                </div>
              </div>
              <div className='email-password text-white'>
                <p>Email</p>
                <Form.Control type="email" placeholder="Ingrese Email" name="email" required />
              </div>
              <div className='email-password text-white'>
                <p>Contraseña</p>
                <Form.Control type="password" placeholder="Nueva contraseña" name="password" required />
              </div>
              <div className='email-password text-white'>
                <p>Repetir contraseña</p>
                <Form.Control type="password" placeholder="Repetir Contraseña" name="repeatPassword" required />
              </div>
              
              <Link to="/productos">
              <Button id="btn-register" type='submit' variant='primary'>Registrarse</Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro