function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Columna 1 - Logo / Info breve */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Libreria Pampa</h5>
            <p>
              Tu tienda de productos con la mejor atención y calidad.
              Compra fácil, rápido y seguro.
            </p>
          </div>

          {/* Columna 2 - Secciones */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Inicio</a></li>
              <li><a href="#" className="text-light text-decoration-none">Productos</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contacto</a></li>
              <li><a href="#" className="text-light text-decoration-none">Nosotros</a></li>
            </ul>
          </div>

          {/* Columna 3 - Redes Sociales */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Seguinos</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-whatsapp"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Línea inferior */}
        <div className="text-center">
          <small>© {new Date().getFullYear()} Libreria Pampa — Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

