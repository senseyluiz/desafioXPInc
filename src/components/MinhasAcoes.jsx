import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Acoes from '../data/Acoes';
import Users from '../data/Users';
import MyContext from './MyContext';


function MinhasAcoes () {

  const { userConected} = useContext(MyContext)
  const {name} = userConected
  const minhasAcoes = Users.find((user) => user.name === name).acoes

  const valorAcao = (name, qtde) => {
    const acao = Acoes.find((acao) => acao.name === name).valor;
    return (acao * qtde).toFixed(2)
  }
  
  return(
    <section>
        <div className='title'>Minhas Ações</div>
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
            minhasAcoes.map(({name, quantity}) => (
              <tr key={name}>
                <td className='nomeAcao'>{ name }</td>
                <td className='qtdeAcao'>{ quantity }</td>
                <td className='valorAcao'>{ valorAcao(name, quantity) }</td>
                <td className='buttons'>
                  <button className='btnCompraVenda btnCompra'> <Link to='/compraVenda' > C </Link></button>
                  <button className='btnCompraVenda btnVenda'> <Link to='/compraVenda' > V </Link> </button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>      
    </section>
  )
}

export default MinhasAcoes;