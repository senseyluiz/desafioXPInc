import "../styles/Operacoes.css"
import { Link } from 'react-router-dom';
function Operacoes () {
return (
  <section className='Operacoes'>
    <div className="title"> Comprar / Vender Ações </div>

    <table>
      <thead>
        <tr>
          <th>Açoes</th>
          <th>Qtde</th>
          <th>Valor(R$)</th>          
        </tr>
      </thead>

      <tbody>
        <td className='nomeAcao'>AZUL4</td>
        <td className='qtdeAcao'>100</td>
        <td className='valorAcao'>350,00</td>
      </tbody>
      
    </table>

    <div className='buttons'>
        <button type="submit" className="btnDepositar"> Comprar </button>
        <button type="submit"  className="btnRetirada"> Vender </button>
    </div>

    <div className='buttons voltar'>
         <button type="submit"className='btnVoltar '> <Link to="/listaAcoes">VOLTAR </Link></button>        
    </div>

    <Link to="/meuSaldo"> <button type='submit' className='title btnDepositoRetirada'> Depósito / Retirada </button> </Link>   
  </section>
)

}

export default Operacoes