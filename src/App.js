import React from 'react';
// import SignUp from './Components/SignUp';
// import Login from './Components/Login';
// import DatePicker from 'react-month-picker';
import HorizontalNavbar from './Components/Navbar/horizontalNavbar';
import VerticalNavbar from './Components/Navbar/verticalNavbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './stylesheet/biraStyleSheet.css'

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <HorizontalNavbar/>
      <VerticalNavbar/>


      {/* <Router>

        <Switch>
                 <Route path="/" exact component={ () =>  ( <Login/> )  } />      

                 <Route path="/signUp" exact component={ () =>  (<SignUp/> )  } />      

         </Switch>
       </Router> */}
    </div>
  );
}

export default App;
