import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {


    return (
        <div className='login'>
            <div className="container-login">
                <div className="card-login">
                    <div className="title-login">
                        <h3>Iniciar sesión</h3>
                        <hr />
                    </div>
                    <div className="email-password">
                        <p>Email</p>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su Email"

                        />
                    </div>
                    <div className="email-password">
                        <p>Contraseña</p>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                        />
                    </div>
                    <Link to="/productos">
                        <Button type="submit" variant="primary" >
                            Ingresar
                        </Button>
                    </Link>
                    <div className="validates-data">
                        <p>Aquí puedes crear una cuenta nueva</p>
                        <Link to="/registro">
                            <Button type="submit" variant="primary">
                                ir a Registro
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login