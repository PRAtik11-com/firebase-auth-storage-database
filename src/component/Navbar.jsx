import { NavLink } from "react-router"


const Navbar = () => {
  return (
    <div>
     <div style={{display:"flex" , justifyContent:"space-between" ,gap:"10px"}}>                    
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Product">Product</NavLink>
      <NavLink to="/Addproduct">Addproduct</NavLink>
      <NavLink to="/Login">Login</NavLink>
      
      </div>
    </div>
  )
}

export default Navbar
