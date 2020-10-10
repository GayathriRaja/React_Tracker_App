import React from 'react';
import CreateCompleteComponent from './Components/Create/CreateCompleteComponent';
import IssuesCompleteComponent from './Components/Issues/IssuesCompleteComponent';
import IssuesInDetailCompleteComponent from './Components/IssuesInDetail/IssuesInDetailCompleteComponent';
import DashboardCompleteComponent from './Components/Dashboard/DashboardCompleteComponent'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import './stylesheet/biraStyleSheet.css'
// import DatePicker from 'react-month-picker';
// import logo from './logo.svg';
import './App.css';

function App() {

  const getID=useSelector(state=>state.getID.IssueID);


  return (
    <div className="App">


          <Router>

            <Switch>


                    {/* <Redirect from="/" to="/dashboard" exact component={ () =>  ( <DashboardCompleteComponent/> )  } />       */}

                    <Route path="/" exact component={ () =>  ( <DashboardCompleteComponent/> )  } />      

                    <Route path="/dashboard" exact component={ () =>  ( <DashboardCompleteComponent/> )  } />      

                    <Route path="/create" exact component={ () =>  ( <CreateCompleteComponent/> )  } />      


                    <Route  path="/issues"  exact component={ () =>  (<IssuesCompleteComponent/> )  } />      
                    
                    <Route path={'/issues/'+getID} exact component={ () =>  (<IssuesInDetailCompleteComponent/> )  } />      


            </Switch>
          </Router>

    </div>
  );
}

export default App;
