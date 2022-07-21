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
  const [userConected, setUserConected] = useState({name:"", email: "", minhasAcoes: [], saldo: 0})
  const [negociar, setNegociar] = useState({acao:"", qtde: 0})
  

  const contextValue = {
    dadosLogin,
    setDadosLogin,
    userConected,
    setUserConected,
    negociar,
    setNegociar
  }
  return (
    <main className="App">    
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
    </main>  
    
  );
}

export default App;
