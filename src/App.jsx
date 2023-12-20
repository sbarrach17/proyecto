import Navbar from "./components/Nbar";
import { Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Productos from "./views/Productos";
import Detalle from "./views/Detalle";
import Dashboard from "./views/Dashboard";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/producto/:id" element={<Detalle />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
