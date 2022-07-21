
import { Link } from 'react-router-dom';
import Acoes from '../data/Acoes';
import Users from '../data/Users';
import { useContext } from 'react';
import MyContext from './MyContext';

function AcoesDisponiveis () { 
  const {dadosLogin} = useContext(MyContext)
  const conected = Users.find((user) => user.email === dadosLogin.email);
  const acoesCarteira = []
  conected.acoes.forEach((acao) => {
    acoesCarteira.push(acao.name)
  })
  
  return(
    <section>
        <div className='title'>Ações Disponíveis</div>
      <table>
        <thead>
          <tr>
            <th>Açoes</th>
            <th>Qtde</th>
            <th>Valor Unit (R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>

        <tbody>

          {
            Acoes.map(({name, valor, quantity}) => (
              !acoesCarteira.includes(name) &&
              (<tr key={name}>
                <td className='nomeAcao'>{ name }</td>
                <td className='qtdeAcao'>{ quantity }</td>
                <td className='valorAcao'>{ valor }</td>
                <td className='buttons'> 
                <Link to='/compraVenda' ><button className='btnCompraVenda btnCompra'>  C </button></Link> 
                  <button disabled={true} className='btnCompraVenda btnVenda'>  V </button> </td>
              </tr>)
            ))
          }

        </tbody>
      </table>

      <Link to="/meuSaldo"> <button type='submit' className='title'> Depósito / Retirada </button> </Link>
    </section>
  )
}

export default AcoesDisponiveis;