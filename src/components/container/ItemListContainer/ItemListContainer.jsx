import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../utils/firebase";

import "./ItemListContainer.css";
import { Spinner } from "react-bootstrap";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    gFetch()
      .then((respuestaPromesa) => {
        setProducts(
          categoriaId
            ? respuestaPromesa.filter((items) => items.categoria == categoriaId)
            : respuestaPromesa
        );
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal!",
          showConfirmButton: false,
          timer: 3500,
        });
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="contenedorCards">
      {loading ? (
        <div className={"itemsLoading"}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
