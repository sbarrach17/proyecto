import React from 'react';

const Cardb = ({ image, name, direccion,country, gender, duracion, estreno, price, boton1, boton2, boton3 }) => {
  return (
    <div className="card" style={{ width: '16em', minHeight: '25em', overflow: 'hidden' }}>
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ objectFit: 'fill', height: '13em', width: '100%' }}
      />
      <div className="card-body">
        <h5 className="card-title textCard">{name}</h5>
        <p className="textCard">
          {new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
          }).format(price)}
        </p>
      </div>
      <ul className="list-group list-group-flush textCard">
        <li className="list-group-item">Año: {estreno}</li>
        <li className="list-group-item">Genero: {gender}</li>
        <li className="list-group-item">Duración: {duracion}</li>
      </ul>
      <div className="card-footer d-flex justify-content-center">
        {boton1}
        {boton2}
        {boton3}
      </div>
    </div>
  );
};

export default Cardb;
