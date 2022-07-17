import  '../styles/MeuSaldo.css'
import DepositoRetirada from "../components/DepositoRetirada";
import Header from "../components/Header";

function MeuSaldo () {
  return(
    <main className='MeuSaldo'>
      <Header />
      <DepositoRetirada />
    </main>
  )
}

export default MeuSaldo;