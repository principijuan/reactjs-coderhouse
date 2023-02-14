import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../../utils/firebase"

import "./ItemListContainer.css"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    useEffect( () => {
        if (categoriaId) {
            gFetch()
                .then(respuestaPromesa => {
                setProductos(respuestaPromesa.filter(items => items.categoria == categoriaId))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            gFetch()
                .then(respuestaPromesa => {
                setProductos(respuestaPromesa)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [categoriaId])

    return (
        <div className="contenedorCards">
            { loading
            ?
                <h1>Cargando...</h1>
            :

            productos.map( producto =>  <div key={producto.id} className="card w-25 mt-5">
                                            <div className="card-head">
                                                <img src={producto.imagen} className="w-100"/>
                                            </div>
                                            <div className="card-body">
                                                <h5>{producto.nombre}</h5>
                                            </div>                                                
                                            <div className="card-foot">                                                
                                                <Link to={`/detail/${producto.id}`}>
                                                    <button className="btn btn-outline-dark boton-detalle">Ir a detalle</button>{}
                                                </Link>
                                            </div>

                                        </div>) 
            }
        </div>
    )
}



export default ItemListContainer
