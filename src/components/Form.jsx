import "../styles/Form.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import validateLogin from "../utils/validateLogin";
import MyContext from "./MyContext";

function Form () {  
  const {dadosLogin, setDadosLogin} = useContext(MyContext)
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
      history.push("/listaAcoes"); // Redireciona para página lista de Ações
    }    

  }
  return(
    
    <form action="" method="post" className="Form">
        <input type="text" placeholder="Email" name = "email" onChange={handleChange} />
        <input type="password" placeholder="Senha" name = "password" onChange={handleChange}/>
        <button type="submit" onClick={handleClick}> Acessar </button> 
    </form>
    
    
  )

}

export default Form;
