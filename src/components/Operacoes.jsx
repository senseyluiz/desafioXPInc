import "../styles/Operacoes.css"
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import MyContext from './MyContext';
import Acoes from '../data/Acoes';

function Operacoes () {

  const { negociar, userConected: {saldo}, setUserConected } = useContext(MyContext)
  const valorAcao = Acoes.find((acao) => acao.name === negociar.acao).valor; 
  const [ativo, setAtivo] = useState({name:"", qtdeAtivo: 0, valorAtivo: 0})
  const [totalPagar, setTotalPagar] = useState(0) 
  

  const handleChange = ({target}) => {
    const {name, value} = target
    setAtivo((previstate) => ({
      ...previstate,
      [name] : value
    }))
  }


  const comprar = () => {

    if(totalPagar > saldo) {
      return alert("Saldo Insuficiente")
    }

    setUserConected((previstate) => ({
      ...previstate,
      saldo: previstate.saldo - totalPagar,
      
    }))

    alert("Compra Realizada com Sucesso")

  }

  const vender = () => {    

    setUserConected((previstate) => ({
      ...previstate,
      saldo: previstate.saldo + totalPagar,
      minhasAcoes: [...previstate.minhasAcoes]
    }))



    alert("Venda Realizada com Sucesso")

  }

  useEffect(() => {
    const total = valorAcao * ativo.qtdeAtivo
    setTotalPagar(total)
  },[ativo.qtdeAtivo, valorAcao])


  
return (
  <section className='Operacoes'>
    <div className="saldo">Saldo: R$ {saldo.toFixed(2)}</div>

    <div className="title"> Comprar / Vender Ações </div>


    <table>
      <thead>
        <tr>
          <th>Ação</th>
          <th>Qtde</th>
          <th>Valor(R$)</th> 
          <th>Total(R$)</th>          
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className='nomeAcao'>{negociar.acao}</td>
          <td className='qtdeAcao'><input type="text"  name = "qtdeAtivo" onChange={handleChange}/></td>
          <td className='valorAcao'>{valorAcao}</td>
          <td className='totalPagar'>{totalPagar.toFixed(2)}</td>
        </tr>
      </tbody>
      
    </table>

    <div className='buttons'>
        <button type="submit" className="btnDepositar" onClick={comprar}> Comprar </button>
        <button type="submit"  className="btnRetirada" onClick={vender}> Vender </button>
    </div>

    <div className='buttons voltar'>
         <button type="submit"className='btnVoltar '> <Link to="/listaAcoes">VOLTAR </Link></button>        
    </div>

    <Link to="/meuSaldo"> <button type='submit' className='title btnDepositoRetirada'> Depósito / Retirada </button> </Link>   
  </section>
)

}

export default Operacoes