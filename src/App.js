import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './component/Header';
import Pending from "./component/Pending";
import Edit from "./component/Edit";
import View from "./component/View";
import FormPage from './component/FormPage';
import Home from './component/Home';
import Approved from './component/Approved';
import Rejected from './component/Rejected';
import AdminPending from './component/Authoriser/AdminPending';
import AdminRejected from './component/Authoriser/AdminRejected';
import AdminApproved from './component/Authoriser/AdminApproved';
import AdminHeader from './component/Authoriser/AdminHeader';
import AdminHome from './component/Authoriser/AdminHome';
import Draft from './component/Draft';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            {/* <Header/> */}
            <ToastContainer position="top-center"/>
          <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/pending" exact component={Pending}></Route>
              
              <Route path="/formpage" exact component={FormPage}></Route>
              <Route path="/update/:id" exact component={FormPage}></Route>
              <Route path="/view" exact component={View}></Route>
              <Route path="/approved" exact component={Approved}></Route>
              <Route path="/rejected" exact component={Rejected}></Route>
              <Route path="/adminapproved" exact component={AdminApproved}></Route>
              <Route path="/adminrejected" exact component={AdminRejected}></Route>
              <Route path="/adminpending" exact component={AdminPending}></Route>
              <Route path="/adminHeader" exact component={AdminHeader}></Route>
              <Route path="/adminhome" exact component={AdminHome}></Route>
              <Route path="/draft" exact component={Draft}></Route>
              
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
