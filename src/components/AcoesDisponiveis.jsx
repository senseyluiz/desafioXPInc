
import { Link } from 'react-router-dom';
import Acoes from '../data/Acoes';

function AcoesDisponiveis () {  
  
  return(
    <section>
        <div className='title'>Ações Disponíveis</div>
      <table>
        <thead>
          <tr>
            <th>Açoes</th>
            <th>Qtde</th>
            <th>Valor(R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>

        <tbody>

          {
            Acoes.map(({name, valor, quantity}) => (
              <tr key={name}>
                <td className='nomeAcao'>{ name }</td>
                <td className='qtdeAcao'>{ quantity }</td>
                <td className='valorAcao'>{ valor }</td>
                <td className='buttons'> 
                <Link to='/compraVenda' ><button className='btnCompraVenda btnCompra'>  C </button></Link> 
                  <button disabled={true} className='btnCompraVenda btnVenda'>  V </button> </td>
              </tr>
            ))
          }

        </tbody>
      </table>

      <Link to="/meuSaldo"> <button type='submit' className='title'> Depósito / Retirada </button> </Link>
    </section>
  )
}

export default AcoesDisponiveis;