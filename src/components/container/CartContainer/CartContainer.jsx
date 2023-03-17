import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./CartContainer.css";
import { useMemo, useState } from "react";
import { CartItemDetail } from "./cartComponents/CartItemDetail.jsx";
import { Form } from "./cartComponents/Form.jsx";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  phone: "",
  email: "",
  validarEmail: "",
};

const CartContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dataForm, setDataForm] = useState(initialState);

  const [validateForm, setValidateForm] = useState(initialState);

  const validarInputForm = (campo, valor, mensajeDeError) => {
    if (!valor.length) {
      setValidateForm((prevValidateForm) => ({
        ...prevValidateForm,
        [campo]: mensajeDeError,
      }));
    }
  };

  const { cartList, vaciarCarrito, precioTotal } = useCartContext();

  const precioFinal = useMemo(() => {
    return precioTotal();
  }, [cartList]);

  const generarOrden = (evento) => {
    evento.preventDefault();

    const { name, phone, email, validarEmail } = dataForm;

    validarInputForm("name", name, "El nombre es obligatorio");
    validarInputForm("phone", phone, "El teléfono es obligatorio");
    validarInputForm("email", email, "El email es obligatorio");
    validarInputForm(
      "validarEmail",
      validarEmail,
      "La verificacion de email es obligatoria"
    );

    if (
      !name.length ||
      !phone.length ||
      !email.length ||
      !validarEmail.length
    ) {
      return;
    }

    const order = {
      buyer: dataForm,
      items: cartList.map(({ id, nombre, precio }) => ({
        nombre,
        precio,
        id,
      })),
      total: precioFinal,
    };

    const db = getFirestore();

    const queryCollection = collection(db, "orders");

    setLoading(true);
    addDoc(queryCollection, order)
      .then((resp) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Compra realizada",
          text: "Gracias por su compra, su número de orden es: " + resp.id,
          showConfirmButton: true,
        }).then(() => {
          vaciarCarrito();
          navigate("/");
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error al realizar la compra",
          showConfirmButton: false,
          timer: 3500,
        });
        // DEBUG ONLY
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
    setValidateForm(initialState);
  };

  return (
    <div className="cartContainer">
      {cartList.map((prod) => (
        <CartItemDetail key={prod.id} item={prod} />
      ))}

      <div className="resumenCarrito">
        {precioFinal !== 0 ? (
          <Form
            loading={loading}
            dataForm={dataForm}
            handleOnChange={handleOnChange}
            validateForm={validateForm}
            precioFinal={precioFinal}
            vaciarCarrito={vaciarCarrito}
            generarOrden={generarOrden}
          />
        ) : (
          <div className="carritoVacio">
            <h2>No hay nada en el carrito</h2>
            <div>
              <Link to={"/"}>
                <button className="btn btn-outline-primary">
                  Volver al inicio
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
