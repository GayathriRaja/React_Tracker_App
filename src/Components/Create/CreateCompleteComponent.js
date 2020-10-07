import React from 'react';
import HorizontalNavbar from '../Navbar/horizontalNavbar';
import VerticalNavbar from '../Navbar/verticalNavbar';
import CreateComponent from './create'

const CreateCompleteComponent=()=>{
    return (
        <div>

            <HorizontalNavbar/>
            <VerticalNavbar/>
            <CreateComponent/>
            
        </div>
    )
}

export default CreateCompleteComponent
