import { FormInput } from "./FormInput.jsx";
import { CartWidget } from "../../../CartWidget/CartWidget.jsx";
import Spinner from "../../../Spinner/Spinner.jsx";

export const Form = ({
  generarOrden,
  dataForm,
  handleOnChange,
  validateForm,
  precioFinal,
  vaciarCarrito,
  loading,
}) => {
  return (
    <form onSubmit={generarOrden} className="formularioCarrito">
      <div className="formulariosInput">
        <h3>Complete sus datos</h3>
        <FormInput
          type="text"
          name="name"
          placeHolder="Ingrese su nombre"
          value={dataForm.name}
          onChange={handleOnChange}
          errorMessage={validateForm.name}
        />
        <FormInput
          type="text"
          name="phone"
          placeHolder="Ingrese su teléfono"
          value={dataForm.phone}
          onChange={handleOnChange}
          errorMessage={validateForm.phone}
        />

        <FormInput
          type="text"
          name="email"
          placeHolder="Ingrese su Email"
          value={dataForm.email}
          onChange={handleOnChange}
          errorMessage={validateForm.email}
        />

        <FormInput
          type="text"
          name="validarEmail"
          placeHolder="Confirme su Email"
          value={dataForm.validarEmail}
          onChange={handleOnChange}
          errorMessage={validateForm.validarEmail}
        />
      </div>
      <div className="detalleCarrito">
        <h4>Precio total: ${precioFinal}</h4>
        <h4 className="resumenCantidad">
          Cantidad de productos: <CartWidget />
        </h4>

        <button className="btn btn-outline-primary" type="submit">
          {loading && <Spinner />}
          Generar orden
        </button>
        <button onClick={vaciarCarrito} className="btn btn-outline-danger">
          Vaciar carrito
        </button>
      </div>
    </form>
  );
};
