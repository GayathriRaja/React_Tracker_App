import React from 'react';
import Logo from '../Images/Logo.svg';
// import SearchIcon from '../Images/icon_search.svg';
import SijoImage from '../Images/Sijo.svg';
import Notification_icon from '../Images/notification_icon2.png';

 const header=()=>{
    return (
        <div>
 
              
            <nav id="nav-header" class="navbar navbar-expand-lg navbar-light bg-light">



                    <a class="navbar-brand" class="logo" href="#"><img id="logo-image" width="150px" height="150px" class="logo" src={Logo}/><span id="logo-name">tracker</span></a>
           
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" id="search-header" type="search" placeholder="search.."/> 
                    </form>
                   <img id="notification_icon" width="50px" height="30px" src={Notification_icon} />
                   <img id="sijo-image" src={SijoImage}/>

            </nav>




        </div>
    )
}


export default header