import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (newProduct) => {
    const idx = cartList.findIndex((product) => product.id === newProduct.id);

    // isInCArt

    if (idx != -1) {
      cartList[idx].cantidad += newProduct.cantidad;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };

  // cantidad total

  const cantidadTotal = () =>
    cartList.reduce(
      (count, objetoProducto) => (count += objetoProducto.cantidad),
      0
    );

  // precio total

  const precioTotal = () =>
    cartList.reduce(
      (count, objetoProducto) =>
        (count += objetoProducto.cantidad * objetoProducto.precio),
      0
    );

  // eliminar por item

  const eliminarItem = (id) =>
    setCartList(cartList.filter((product) => product.id != id));

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        cantidadTotal,
        precioTotal,
        eliminarItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
