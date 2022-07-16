import "../styles/ListAcoes.css"
import AcoesDisponiveis from "../components/AcoesDisponiveis";
import Header from "../components/Header";
import MinhasAcoes from "../components/MinhasAcoes";

function ListaAcoes () {  

  return(
    <main className="ListAcoes">
      <Header />
      <MinhasAcoes />
      <AcoesDisponiveis />
    </main>
  )
}

export default ListaAcoes;