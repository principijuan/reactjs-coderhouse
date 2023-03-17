import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ producto }) => {
  const [isInCount, setIsInCount] = useState(true);
  const { agregarCarrito } = useCartContext();

  const onAdd = (cant) => {
    agregarCarrito({ ...producto, cantidad: cant });
    setIsInCount(false);
  };

  return (
    <div className="containerr">
      <div className="detailContainer">
        <div>
          <img src={producto.imagen} className="detail__imagen" />
        </div>
        <div>
          <h2>{producto.nombre}</h2>
          <h3>$ {producto.precio}</h3>
          {isInCount ? (
            <ItemCount onAdd={onAdd} />
          ) : (
            <>
              <Link to={"/cart"}>
                <button className="btn btn-outline-primary">
                  Ir al carrito
                </button>
              </Link>
              <Link to={"/"}>
                <button className="btn btn-outline-success">
                  Seguir comprando
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

// return (
//   <div className="contenedorCards">
//       { loading
//       ?
//           <h1>Cargando...</h1>
//       :

//       productos.map( producto =>  <div key={producto.id} className="card w-25 mt-5">
//                                       <div className="card-head">
//                                           <img src={producto.imagen} className="w-100"/>
//                                       </div>
//                                       <div className="card-body">
//                                           <h5>{producto.nombre}</h5>
//                                       </div>
//                                       <div className="card-foot">
//                                           <Link to={`/detail/${producto.id}`}>
//                                               <button className="btn btn-outline-dark boton-detalle">Ir a detalle</button>{}
//                                           </Link>
//                                       </div>

//                                   </div>)
//       }
//   </div>
// )
// }
