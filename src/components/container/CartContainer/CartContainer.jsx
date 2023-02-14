import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
import { CartWidget } from "../../CartWidget/CartWidget"
import "./CartContainer.css"

const CartContainer = () => {
  
  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()
  
  return (
    <div className="cartContainer">
      {cartList.map ( prod => 
        <div key={prod.id} className="productosCarrito">
          <img src={prod.imagen} className="imagenProducto" /><br />
          <div className="detalleProducto">
            <label>Nombre: <b>{prod.nombre}</b></label>
            <button onClick={() => eliminarItem(prod.id)} className="btn btn-outline-secondary btn-sm botonEliminar"> X </button><br />
            <label>Cantidad: <b>{prod.cantidad}</b></label><br />
            <label>Precio: <b>${prod.precio}</b></label><br />
          </div>
        </ div> )}
        <div className="resumenCarrito">
          {precioTotal() != 0 && <h4>Precio total: ${precioTotal()}</h4>}
          {precioTotal() != 0 && <h4 className="resumenCantidad">Cantidad de productos: <CartWidget /></h4>}
          {precioTotal() != 0 && <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar carrito</button>}

          {precioTotal() === 0 &&
            <div className="carritoVacio">
              <h2>No hay nada en el carrito</h2>
              <div>              
                <Link to={"/"}>
                <button className="btn btn-outline-primary">Volver al inicio</button>

                </Link>
              </div>
            </ div>}
        </div>
    </div>
  )
}

export default CartContainer