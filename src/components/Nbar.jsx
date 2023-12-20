import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import logo from '../components/logo1.png'



const Nbar = () => {

    return (
        <div>
            <Navbar expand="lg" className='navbar fixed-top' >
                <Container >
                    <div className='d-flex justify-content-center align-items-center'>
                        <Navbar.Brand className='logo' style={{ backgroundImage: `url('${logo}')`, width: '70px' }}>
                            <NavLink to="/" style={{ textDecoration: 'none' }}></NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="/" className={"p-2 text-dark"} style={{ textDecoration: 'none' }}><b>Películas y Documentales</b></NavLink>
                        </Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="navbar-collapse" className='bg-light text-light border border-primary' />
                        <Navbar.Collapse id="navbar-collapse">
                            <Nav className="me-auto">
                                <NavLink to="/productos" className={"m-2 p-2 text-dark"} style={{ textDecoration: 'none' }}> <b>Películas</b> </NavLink>
                                <NavLink to="/registro" className={"m-2 p-2 text-dark"} style={{ textDecoration: 'none' }}> <b>Registro</b> </NavLink>
                                <NavLink to="/login" className={"m-2 p-2 text-dark"} style={{ textDecoration: 'none' }}> <b>Iniciar Sesión</b> </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div >

    )
}

export default Nbar