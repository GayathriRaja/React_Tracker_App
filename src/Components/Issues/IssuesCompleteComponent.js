import React from 'react';
import HorizontalNavbar from '../Navbar/horizontalNavbar';
import VerticalNavbar from '../Navbar/verticalNavbar';
import Issues from './Issues';

const IssuesCompleteComponent=()=>{
    return (
        <div>
            
           <HorizontalNavbar/>
           <VerticalNavbar/>
           <Issues/>

        </div>
    )
}

export default IssuesCompleteComponent
