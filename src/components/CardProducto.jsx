function CardProducto({ titulo, imagen, descripcion }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default CardProducto;
