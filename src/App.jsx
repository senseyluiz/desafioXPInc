import "./styles/variaveis.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CompraVenda from './pages/CompraVenda';
import Error from './pages/Error';
import ListaAcoes from './pages/ListAcoes';
import Login from './pages/Login';
import MeuSaldo from './pages/MeuSaldo';
import { useState } from 'react';
import MyContext from './components/MyContext';

function App() {
  const [dadosLogin, setDadosLogin] = useState({email:"", password:""})
  const [acoes, setAcoes] = useState()
  const [saldo, setSaldo] = useState()

  const contextValue = {
    dadosLogin, setDadosLogin
  }
  return (
    <MyContext.Provider value={contextValue}>
      <BrowserRouter>  
        <Switch>      
          <Route path='/login' component={Login} />
          <Route path='/listaAcoes' component={ListaAcoes} />
          <Route path='/compraVenda' component={CompraVenda} />
          <Route path='/meuSaldo' component={MeuSaldo} /> 
          <Route path='*' component={Error} />
        </Switch>
      </BrowserRouter>  
    </MyContext.Provider>    
    
  );
}

export default App;