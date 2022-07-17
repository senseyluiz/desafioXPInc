
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Acoes from '../data/Acoes';
import Users from '../data/Users';
import MyContext from './MyContext';


function AcoesDisponiveis () {

  const { userConected} = useContext(MyContext)
  const {name} = userConected
  const minhasAcoes = Users.find((user) => user.name === name).acoes

    

  // const valorAcao = (name, qtde) => {
  //   const acao = Acoes.find((acao) => acao.name === name).valor;
  //   return (acao * qtde).toFixed(2)
  // }
  
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

      <button className='Acoes'> Depósito / Retirada </button>
    </section>
  )
}

export default AcoesDisponiveis;