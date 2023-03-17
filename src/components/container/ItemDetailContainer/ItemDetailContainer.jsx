import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetchOk } from "../../../utils/firebase";
import ItemDetail from "../../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    gFetchOk(detailId).then((resp) => setProducto(resp));
  }, []);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
