import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/firebasefile";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {

    const navigate = useNavigate();

    const NewObj = {
        image: "",
        title: "",
        price: "",
        description: "",
        category: ""
        
    };
    
      const [assign ,setassign] = useState(NewObj)
      console.log(assign);
      
     const handlesubmits = (e) => {
        e.preventDefault()
    
        const formsubmit = addDoc(collection(db,"products"),assign)
        .then(() => {
            // setassign(res.NewObj)
            alert("Product added successfully!");
            navigate("/Product");

        })
        .catch((err) => console.log(err))
     }

    //  useEffect(() => {
    //     handlesubmits
    //  },[])
    
     const handlechange = (e) => {
      setassign({ ...assign, [e.target.name]: e.target.value });
      console.log(e.target.value);
      
    };
  return (
    <div style={{display:"grid" , justifyContent:"center"}}>
      <h1>Addproduct</h1>
      <form onSubmit={handlesubmits} style={{width:"150px" , height:"35px"}}>
                <input type='text' placeholder='Image' name="image" value={assign.image} onChange={handlechange}   style={{padding : "10px 40px"}}/><br /><br />
                <input type='text' placeholder='Title' name="title"  value={assign.title} onChange={handlechange}  style={{padding : "10px 40px"}} /><br /><br />

                <select name="category"   style={{padding : "10px 58px"}} value={assign.category} onChange={handlechange} >
                    <option value="">Select Category</option>
                    <option value="mens_clothing">Men's Clothing</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="electronics">Electronics</option>
                    <option value="womens_clothing">Women's Clothing</option>
                </select><br /><br />

                <input type='text' placeholder='Price' name="price" value={assign.price} onChange={handlechange}  style={{padding : "10px 40px"}} /><br /><br />
                <input type='text' placeholder='Description' name="description"  value={assign.description} onChange={handlechange} style={{padding : "10px 40px"}} /><br /><br />
                <input type='submit' style={{padding : "8px 20px"}}/><br /><br />
            </form>
    </div>
  )
}

export default Addproduct
