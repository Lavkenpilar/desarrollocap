import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Perfil from "../pages/Perfil";
import Carrito from "../pages/Carrito";
import CursosTipo from "../pages/CursosTipo";
import CursoDetalle from "../pages/CursoDetalle";

export default function AppRoutes() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col ">
        <Header />
        {token && <Navbar />} {/*solo mostramos el Navbar si está logueado */}
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/cursos/:tipo" element={<CursosTipo />} />
            <Route path="/curso/:id" element={<CursoDetalle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

