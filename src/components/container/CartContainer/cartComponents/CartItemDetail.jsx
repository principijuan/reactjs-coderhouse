import { useCartContext } from "../../../../context/CartContext";

export const CartItemDetail = ({ item }) => {
  const { eliminarItem } = useCartContext();

  return (
    <div key={item.id} className="productosCarrito">
      <img src={item.imagen} className="imagenProducto" />
      <br />
      <div className="detalleProducto">
        <label>
          Nombre: <b>{item.nombre}</b>
        </label>
        <button
          onClick={() => eliminarItem(item.id)}
          className="btn btn-outline-secondary btn-sm botonEliminar"
        >
          {" "}
          X{" "}
        </button>
        <br />
        <label>
          Cantidad: <b>{item.cantidad}</b>
        </label>
        <br />
        <label>
          Precio: <b>${item.precio}</b>
        </label>
        <br />
      </div>
    </div>
  );
};
