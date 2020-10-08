import React from 'react';
import HorizontalNavbar from '../Navbar/horizontalNavbar';
import VerticalNavbar from '../Navbar/verticalNavbar';
import Dashboard from './dashboard';


const DashboardCompleteComponent=()=>{
    return (
        <div>
            <HorizontalNavbar/>
            <VerticalNavbar/>
            <Dashboard/>
        </div>
    )
}

export default DashboardCompleteComponent
