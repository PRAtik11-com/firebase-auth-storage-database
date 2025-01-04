import "./Login.css"
import GoogleButton from 'react-google-button'
import { signInWithPopup, signOut} from 'firebase/auth';
import { auth, provider } from "../Firebase/firebasefile";

const Login = () => {

  function Logout() {
    signOut(auth)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
  }

function handleClick() {
    signInWithPopup(auth, provider)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}


  return (
    <div>
      <h1>Login</h1>
      <div className='Login-form'>
        <form onClick={Logout}>
          <label htmlFor="useName">Email<span>*</span></label>
          <input type="email" placeholder='Enter your Email..' />
          <label htmlFor="usePass">Password<span>*</span></label>
          <input type="Password" placeholder='Enter your Password...' />
          <button type='submit' style={{marginRight:"60px"}}>LogOut</button>
        </form>
        <hr/>
        <GoogleButton style={{marginTop:"10px",textAlign:"center" ,marginLeft:"10px"}}  onClick={handleClick} />
      </div>

    </div>
  )
}

export default Login
