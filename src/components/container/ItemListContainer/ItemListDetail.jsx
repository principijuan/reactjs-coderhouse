import { Link } from "react-router-dom";

export const ItemListDetail = ({ producto }) => {
  return (
    <div key={producto.id} className="card w-25 mt-5">
      <div className="card-head">
        <img src={producto.imagen} className="w-100" />
      </div>
      <div className="card-body">
        <h5>{producto.nombre}</h5>
      </div>
      <div className="card-foot">
        <Link to={`/detail/${producto.id}`}>
          <button className="btn btn-outline-dark boton-detalle">
            Ir a detalle
          </button>
        </Link>
      </div>
    </div>
  );
};
