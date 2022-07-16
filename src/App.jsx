
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CompraVenda from './pages/CompraVenda';
import Error from './pages/Error';
import ListaAcoes from './pages/ListAcoes';
import Login from './pages/Login';
import MeuSaldo from './pages/MeuSaldo';

function App() {
  return (
    
    <BrowserRouter>  
      <Switch>      
        <Route path='/login' component={Login} />
        <Route path='/listaAcoes' component={ListaAcoes} />
        <Route path='/compraVenda' component={CompraVenda} />
        <Route path='/meuSaldo' component={MeuSaldo} /> 
        <Route path='*' component={Error} />
      </Switch>
    </BrowserRouter>      
    
  );
}

export default App;
