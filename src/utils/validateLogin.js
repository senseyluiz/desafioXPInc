import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";

const validateLogin = (email, password) => {
  const isValidEmail = validateEmail(email);
  const isvalidPassword = validatePassword(password)

  if(!isValidEmail){
    
    return alert("Você deve digitar um email válido" )
  }

  if(!isvalidPassword){
    return alert("Você deve fornecer uma senha válida acima de 7 caracteres")
  }

  return true;
}


export default validateLogin;