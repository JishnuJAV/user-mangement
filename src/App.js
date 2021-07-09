
import './App.css';
import Dashbord from './pages/dasboard/dasboad';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from '../src/components/form/form'
import historyPage from './pages/historyPage';
import adminPage from './pages/admin/admin';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Dashbord}/>
        <Route exact path='/history' component={historyPage}/>
        <Route exact path='/admin' component={adminPage}/>
      </Switch>
   
     
    </div>
    </BrowserRouter>
  );
}

export default App;
