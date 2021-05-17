//import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';

import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component= {Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
