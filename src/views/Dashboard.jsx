import { useContext } from "react";
import "../styles/dashboard.css";
import { Button } from "react-bootstrap";
import { Context } from "../Context/Provider";
import Cardb from "../components/Cardb";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { favoritos, sumaAc, setPrecioAc, añadirProducto, deleteFavoritos } =
        useContext(Context);

    return (
        <section className="dashboard">
            <div className="d-buttons">
                <h1 className="h1-t pt-5">
                    {" "}
                    <b>Películas Favoritas</b>{" "}
                    <h4 className="lengthText text-center">
                        {favoritos.length === 0
                            ? "No hay películas agregadas"
                            : ""}
                    </h4>
                </h1>
            </div>
            <div className="favorites">
                {favoritos.map((favorito) => (
                    <div
                        key={favorito.nombre}
                        className="card-g"
                        style={{ width: "18rem" }}
                    >
                        <Cardb
                            image={favorito.imagen}
                            name={favorito.nombre}
                            estreno={favorito.año}
                            gender={favorito.genero}
                            duracion={favorito.tiempo}
                            price={favorito.price}
                            boton2={
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        añadirProducto(favorito.id);
                                        setPrecioAc(sumaAc(favorito.id));
                                    }}
                                    className="mx-2 bg-danger border border-0"
                                >
                                    Añadir 
                                </Button>
                            }
                            boton1={
                                <Link
                                    to={`/producto/${favorito.id}`}
                                >
                                    <Button
                                        variant="primary"
                                        className="mx-2 bg-primary border border-0"
                                    >
                                        Detalle
                                    </Button>
                                </Link>
                            }
                            
                            boton3={
                                <Button
                                    onClick={() => {
                                        deleteFavoritos(favorito.id);
                                    }}
                                    className="mx-2 bg-warning border border-0"
                                >
                                    Eliminar
                                </Button>
                            }
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Dashboard;
