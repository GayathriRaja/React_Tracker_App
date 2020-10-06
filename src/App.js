import React from 'react';
import HorizontalNavbar from './Components/Navbar/horizontalNavbar';
import VerticalNavbar from './Components/Navbar/verticalNavbar';
import Create from './Components/Create/create';
import Issues from './Components/Issues/Issues'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './stylesheet/biraStyleSheet.css'
// import SignUp from './Components/SignUp';
// import Login from './Components/Login';
// import DatePicker from 'react-month-picker';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* <HorizontalNavbar/>
      <VerticalNavbar/> */}
      {/* <Create/> */}
       <Issues/>

      {/* <Router>

        <Switch>
                 <Route path="/" exact component={ () =>  ( <Create/> )  } />      

                 <Route path="/issues" exact component={ () =>  (<Issues/> )  } />      

         </Switch>
       </Router> */}
    </div>
  );
}

export default App;
