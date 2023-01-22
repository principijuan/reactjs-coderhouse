import { BrowserRouter, Routes, Route} from "react-router-dom"

import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/container/ItemListContainer/ItemListContainer'
import Titulo from './components/Titulo/Titulo'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/container/CartContainer/CartContainer'

import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css'



function App() {


  return (
    <BrowserRouter>
      <Titulo />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListConteiner />}/>
        <Route path="/categoria/:categoriaId" element={<ItemListConteiner />}/>
        <Route path="/detail/:detailId" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<CartContainer />}/>

        {/* <Route path="*" element={<Navigate to="/" />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
