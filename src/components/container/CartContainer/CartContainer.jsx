import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
import { CartWidget } from "../../CartWidget/CartWidget"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import "./CartContainer.css"
import { useState } from "react"

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    validarEmail: ""

  })
  
  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()
  
  const generarOrden = (evento) => {
    evento.preventDefault()
    
    const order = {}

    order.buyer = dataForm

    order.items = cartList.map(({id, nombre, precio}) => ({nombre, precio, id}))

    order.total = precioTotal()

    console.log(order)

    const db = getFirestore()

    const queryCollection = collection(db, "orders")

    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }


  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
  }
  console.log(dataForm)

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

          <div>
            <div className="resumenCarrito">
              {precioTotal() != 0 && 
                <div> 
                  <form onSubmit={generarOrden} className="formularioCarrito">

                    <div className="formulariosInput">
                    <h3>Complete sus datos</h3>
                      <input
                        type="text"
                        name="name"
                        placeholder="Ingrese su nombre"
                        value={dataForm.name}
                        onChange={handleOnChange}/>

                      <input
                        type="text"
                        name="phone"
                        placeholder="Ingrese su teléfono"
                        value={dataForm.phone}
                        onChange={handleOnChange}/>

                      <input
                        type="text"
                        name="email"
                        placeholder="Ingrese su Email"
                        value={dataForm.email}
                        onChange={handleOnChange}/>

                      <input
                        type="text"
                        name="validarEmail"
                        placeholder="Confirme su Email"
                        value={dataForm.validarEmail}
                        onChange={handleOnChange}/>
                    </div>
                    <div className="detalleCarrito">
                      <h4>Precio total: ${precioTotal()}</h4>
                      <h4 className="resumenCantidad">Cantidad de productos: <CartWidget /></h4>
                      <button onClick={generarOrden} className="btn btn-outline-primary">Generar orden</button>
                      <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar carrito</button>
                    </div>
                    
                  </form>
                </ div>}

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


    </div>
  )
}

export default CartContainer