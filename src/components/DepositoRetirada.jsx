
import { useContext, useState } from 'react';
import Users from '../data/Users';
import MyContext from './MyContext';
function DepositoRetirada (){

  const [valorDigitado, setValorDigitado] = useState(Number(0))

  const {userConected, dadosLogin, setUserConected} = useContext(MyContext); 

  const handleClange = ({target}) => {
    setValorDigitado (target.value);
  }
    

  const depositar = (valor) => {
    Users.find((user) => user.email === dadosLogin.email).saldo += Number(valor);
    setUserConected((previstate) => ({
      ...previstate,
      saldo: Number(previstate.saldo) + Number(valor),
    }))
    
    alert("Depósito realizado com sucesso")
    
  }

  const retirar = (valor) => {
    Users.find((user) => user.email === dadosLogin.email).saldo += Number(valor);
    setUserConected((previstate) => ({
      ...previstate,
      saldo: Number(previstate.saldo) - Number(valor),
    }))
    
    alert("Retirada realizada com sucesso")
    
  }

  

  return(
    <section>
      <div>
        <span>Saldo: </span><span> { userConected.saldo}</span>
      </div>

      <input type="number" onChange={handleClange}/>

      <div><button type="submit" onClick={() => depositar(valorDigitado)}> Depósito </button><button type="submit" onClick={() => retirar(valorDigitado)}> Retirada </button></div>

      <div><button type="submit"> VOLTAR </button><button type="submit"> CONFIRMAR </button></div>
    </section>
  )

}

export default DepositoRetirada;