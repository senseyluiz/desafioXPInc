import '../styles/CompraVenda.css'
import Header from "../components/Header";
import Operacoes from '../components/Operacoes';

function CompraVenda () {
  return(
    <main className="CompraVenda screenWidth">      
      <Header />
      <Operacoes />
    </main>
  )
}

export default CompraVenda;