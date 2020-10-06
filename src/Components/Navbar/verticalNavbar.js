import React from 'react';
import DashboardImage from '../Images/Dashboard.svg';
import CreateImage from '../Images/Create.svg';
import IssuesImage from '../Images/Issues.svg';


const verticalNavbar=()=>{
    return (
        <div id="vertical-navbar" >

            <ul id="vertical-navbar-list">

                <li><button class="btn"><img id="img-vertical-navbar" src={DashboardImage}/> Dashboard</button></li>
                <li><button id="btn_issue" class="btn"> <img id="img-vertical-navbar" src={IssuesImage}/> Issues </button></li>
                <li><button id="btn_create" class="btn"> <img id="img-vertical-navbar" src={CreateImage}/> Create</button></li>
                
            </ul>

        </div>
    )
}


export default verticalNavbar;