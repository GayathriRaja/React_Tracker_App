import React from 'react';
import CreateCompleteComponent from './Components/Create/CreateCompleteComponent';
import IssuesCompleteComponent from './Components/Issues/IssuesCompleteComponent';
import IssuesInDetailCompleteComponent from './Components/IssuesInDetail/IssuesInDetailCompleteComponent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './stylesheet/biraStyleSheet.css'
// import DatePicker from 'react-month-picker';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

          <Router>

            <Switch>
                    <Route path="/" exact component={ () =>  ( <CreateCompleteComponent/> )  } />      

                    <Route path="/issues" exact component={ () =>  (<IssuesCompleteComponent/> )  } />      
                    
                    <Route path="/details" exact component={ () =>  (<IssuesInDetailCompleteComponent/> )  } />      


            </Switch>
          </Router>

    </div>
  );
}

export default App;
