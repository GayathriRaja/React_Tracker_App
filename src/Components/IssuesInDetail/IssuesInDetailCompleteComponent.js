import React from 'react'
import HorizontalNavbar from '../Navbar/horizontalNavbar';
import VerticalNavbar from '../Navbar/verticalNavbar';
import IssuesInDetail from './issuesInDetail';


const IssuesInDetailCompleteComponent=()=>{
    return (
        <div>

            <HorizontalNavbar/>
            <VerticalNavbar/>
            <IssuesInDetail/>

        </div>
    )
}

export default IssuesInDetailCompleteComponent
