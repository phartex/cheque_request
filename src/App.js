import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from "./component/Form";
import Pending from "./component/Pending";
import Edit from "./component/Edit";
import View from "./component/View";
import Update from './component/Update';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <header className="header">
              <h3 style={{textAlign:'center', padding:'0.5em',color:'#fff',fontSize:'2em',}}>Cheque Automation</h3>
            </header>
          <Switch>
              <Route path="/" exact component={Form}></Route>
              <Route path="/Pending" exact component={Pending}></Route>
              <Route path="/update/:id" exact component={Update}></Route>
              <Route path="/view/:id" exact component={View}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
