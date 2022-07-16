import logo from '../img/xp-investimentos-logo-4.png';

function Header () {
  return(
    <header> 
      <img src={logo} alt="logo"/> 
      <span>Usuário:{}</span>
    </header>
  )
}

export default Header
