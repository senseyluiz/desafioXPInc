import "../styles/Login.css"
import Form from "../components/Form";
import logo from "../img/xp-investimentos-logo-4.png"

function Login () {  
  return(
    <main className="screenWidth Login">
      <img src={logo} alt="logo" />
      <Form />
    </main>
  )
}

export default Login;