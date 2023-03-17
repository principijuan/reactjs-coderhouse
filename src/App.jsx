import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListConteiner from "./components/container/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/NavbarComponent/NavBar";
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/container/CartContainer/CartContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./context/CartContext";
// import { app } from "./utils/firebase"
import { gFetch } from "./utils/firebase";
// import './App.css'

gFetch();

function App() {
  // app

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListConteiner />}
          />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          {/* <Route path="*" element={<Navigate to="/" />}/> */}
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
