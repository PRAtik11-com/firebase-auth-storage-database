import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { useState } from "react"
import { db } from "../Firebase/firebasefile"
import { useEffect } from "react"

const Product = () => {

  const [datas ,setData] = useState([])

  const getinfofromdatabase = getDocs(collection(db,"products"))
  .then((res) => setData(res.docs.map((el) => ({ id: el.id, ...el.data() }))))
  .catch((err) => console.log(err))

  useEffect(() => {
    getinfofromdatabase
  },[])

  const handleDelete = (id) => {
    deleteDoc(doc(db, "products", id))
      .then(() => {
        alert("Product deleted successfully!");
        getinfofromdatabase  
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Product</h1>
      <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)" , gap:"10px"}}>
        {datas.map((e) => (
          <div key={e.id} style={{border:"1px solid green" , borderRadius:"10px" ,padding:"10px"}}>
            <img  src={e.image}  alt={e.title}  width="250px" height="250px" />
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <h2>{e.category}</h2>
            <h1>{e.price}</h1>
            <button  onClick={() => handleDelete(e.id)}   style={{backgroundColor:"red"}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
