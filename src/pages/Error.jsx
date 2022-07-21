import logo from "../img/xp-investimentos-logo-4.png"
import { Link } from 'react-router-dom';

function Error () {
  return(
    <main className="screenWidth Error">
      <h1>ERROR</h1>
      
        <p>Ops, algo deu errado</p>
        <p>Tente fazer o login novamente <br /><Link to='/login'>aqui</Link></p>
      
      <img src={logo} alt="" />
    </main>
  )
}

export default Error;