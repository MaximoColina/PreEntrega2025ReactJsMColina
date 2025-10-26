function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Libreria Pampa</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;