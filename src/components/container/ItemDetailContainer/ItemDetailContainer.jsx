import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const {detailId} = useParams ()
  console.log(detailId)
  
  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer