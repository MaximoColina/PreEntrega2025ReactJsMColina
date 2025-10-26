import { useState } from "react"
import RandomUser from "./components/RandomUser"
import Header from "./components/Header"
import Footer from "./components/Footer";
import CardProducto from "./components/CardProducto";

function App() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <CardProducto 
            titulo="Producto A"
            imagen="https://via.placeholder.com/300"
            descripcion="Descripción breve del producto A"
          />
          <CardProducto 
            titulo="Producto B"
            imagen="https://via.placeholder.com/300"
            descripcion="Descripción breve del producto B"
          />
          <CardProducto 
            titulo="Producto C"
            imagen="https://via.placeholder.com/300"
            descripcion="Descripción breve del producto C"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
