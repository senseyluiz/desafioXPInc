
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import validateLogin from "../utils/validateLogin";
import MyContext from "./MyContext";
import Users from '../data/Users';

function Form () {  
  const {dadosLogin, setDadosLogin, setUserConected} = useContext(MyContext)
  const history = useHistory()
  

  const handleChange = ({target}) => {
    const {name, value} = target;
    setDadosLogin((previstate) => ({
      ...previstate,
      [name]:value,
    }))
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    const {email, password} = dadosLogin
    
    const isValidLogin = validateLogin(email, password)

    if(isValidLogin){

      const conected = Users.find((user) => user.email === dadosLogin.email);
      
      setUserConected((previstate) => ({
        ...previstate,
        name: conected.name,
        email: conected.email,
        minhasAcoes: conected.acoes,
        saldo: conected.saldo,
      }))
      
      
      history.push("/listaAcoes"); // Redireciona para página lista de Ações
    }    

  }
  return(
    
    <form action="" method="post" className="Form">
        <input type="text" placeholder="Email" name = "email" onChange={handleChange} />
        <input type="password" placeholder="Senha" name = "password" onChange={handleChange} />
        <button type="submit" onClick={handleClick} className ="btnDadosLogin btnAcessar"> Acessar </button> 
    </form>
    
    
  )

}

export default Form;
