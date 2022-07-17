
import { Link } from 'react-router-dom';
import Acoes from '../data/Acoes';

function AcoesDisponiveis () {  
  
  return(
    <section>
        <div className='Acoes'>Ações Disponíveis</div>
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
                <td className='acoes'>{ name }</td>
                <td className='qtde'>{ quantity }</td>
                <td className='valor'>{ valor }</td>
                <td className='buttons'> <button className='ButtonCompra'> <Link to='/compraVenda' > C </Link></button> <button disabled={true} className='ButtonVenda'>  V </button> </td>
              </tr>
            ))
          }

        </tbody>
      </table>

      <Link to="/meuSaldo"> <button className='Acoes'> Depósito / Retirada </button> </Link>
    </section>
  )
}

export default AcoesDisponiveis;