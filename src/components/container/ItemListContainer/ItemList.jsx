import { ItemListDetail } from "./ItemListDetail";

export const ItemList = ({ productos }) => {
  return productos.map((producto) => (
    <ItemListDetail producto={producto} key={producto.id} />
  ));
};
