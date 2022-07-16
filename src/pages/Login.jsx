import { Link } from "react-router-dom";
import logo from "../img/xp-investimentos-logo-4.png"

function Login () {
  return(
    <main>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <Link to='/ListaAcoes' >  <button type="submit"> Acessar </button> </Link>
      </form>
    </main>
  )
}

export default Login;