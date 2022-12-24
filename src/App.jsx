
import './App.css'
import ComponenteContenedor from './components/ComponenteContenedor/ComponenteContenedor'





function App() {


  return (
    <>
      <nav>
        <p>Nombre de la tienda</p>
        <p>Remeras</p>
        <p>Gorras</p>
      </nav>
      <ComponenteContenedor saludo="Hola home" />
    </>
  )
}

export default App
