import React from 'react';
import DashboardImage from '../Images/Dashboard.svg';
import CreateImage from '../Images/Create.svg';
import IssuesImage from '../Images/Issues.svg';
import {useHistory} from 'react-router-dom'


const VerticalNavbar=()=>{


    const history=useHistory();

    const onClickHandlerIssues=()=>{
       
          history.push('/issues');

    }

    const onClickHandlerCreate=()=>{
       
        history.push('/create');

  }

  const onClickHandlerDashboard=()=>{
       
    history.push('/dashboard');

}

    return (
        <div id="vertical-navbar" >

            <ul id="vertical-navbar-list">

                <li><button class="btn" onClick={onClickHandlerDashboard} ><img id="img-vertical-navbar" src={DashboardImage}   /> Dashboard</button></li>
                <li><button id="btn_issue" class="btn"  onClick={onClickHandlerIssues} > <img id="img-vertical-navbar" src={IssuesImage}/> Issues </button></li>
                <li><button id="btn_create" class="btn" onClick={onClickHandlerCreate} > <img id="img-vertical-navbar" src={CreateImage}/> Create</button></li>
                
            </ul>

        </div>
    )
}


export default VerticalNavbar;