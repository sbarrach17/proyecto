import React, { useContext } from 'react'
import "../styles/dashboard.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cardb from '../components/Cardb'

const Dashboard = () => {


  return (
    <div className='dashboard'>
      <div className='d-buttons'>
        <Link to="/publicaciones"><Button className='button bg-primary'> <b>Mis publicaciones</b> </Button></Link>
        <h1 className='h1-t'> <b>Dashboard</b> </h1>
        <Link to="/agregarp"><Button className='button bg-primary'><b>Agregar publicacion</b> </Button></Link>
      </div>
      <div>
        <h5> <b>Mis Favoritos</b> </h5>
      </div>
      <div className='d-galery'>
        <div className="card-g" style={{ width: '18rem' }}>
          <Cardb

          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard