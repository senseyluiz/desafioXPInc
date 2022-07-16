import "../styles/Header.css"
import logo from '../img/xp-investimentos-logo-4.png';
import { useContext} from 'react';
import MyContext from './MyContext';


function Header () {
  const { userConected} = useContext(MyContext)
  const {name} = userConected
  
  return(
    <header className='Header'> 
      <img src={logo} alt="logo"/> 
      <div>Usuário: <span>{name}</span></div>
    </header>
  )
}

export default Header
