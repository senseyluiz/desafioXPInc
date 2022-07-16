function validatePassword (password) {
  if(!password) {
    return false
  }

  if(password.length < 8){
    return false
  }

  return true;
}

export default validatePassword;