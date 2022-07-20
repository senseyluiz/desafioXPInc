
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <section className='DepositoRetirada'>
      <div className='saldo title'>
        <span>Saldo: </span><span> R$ { userConected.saldo}</span>
      </div>

      <input type="text" onChange={handleClange} className='inputValor' placeholder='Informe  Valor'/>

      <div className='buttons'>
        <button type="submit" onClick={() => depositar(valorDigitado)} className="btnDepositar"> Depósito </button>
        <button type="submit" onClick={() => retirar(valorDigitado)} className="btnRetirada"> Retirada </button>
      </div>

      <div className='buttons'>
         <button type="submit"className='btnVoltar'> <Link to="/listaAcoes">VOLTAR </Link></button>
        <button type="submit" className='btnConfirmar'> CONFIRMAR </button>
      </div>
    </section>
  )

}

export default DepositoRetirada;