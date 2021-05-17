//import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';

import Home from './views/Home/Home';
import BancaPersonal from './views/BancaPersonal/BancaPersonal';
import BancaPrivate from './views/BancaPrivate/BancaPrivate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component= {Home}/>
          <Route path='/banca-personal' exact component= {BancaPersonal}/>
          <Route path='/banca-privada' exact component= {BancaPrivate}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
