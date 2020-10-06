import React from 'react'
import SijoImage from '../Images/Sijo.svg';

const Issues=()=>{

    
    // var status=[{toDoList:5},{inProgress:2},{done:3}]
    // var status=[5,2,3]
   var toDoListID=[1,2,3,4,5]
   var inProgressID=[1,2]
   var doneID=[1,2,3]

    return (
        <div>
            <h3>Issues</h3>
            <div>
                <table >
                    <tbody>
                         <div id="flexbox1" class="container">

                                    <td>
                                       <div id="flexbox">

                                                    <tr><h3>To Do  {toDoListID.length}</h3></tr>

                                                    {toDoListID.map( todolist=>{
                                                                            
                                                                                
                                                                                return (
                                                                                        <tr id="table">
                                                                                                        
                                                                                                        <tr>
                                                                                                            <td>ID:PCG836342</td>
                                                                                                            <td>Date:January 02 2019</td>
                                                                                                        </tr>
                                                                                                        <tr> <td><h5>Lorem ipsum dolor sit</h5></td> </tr>
                                                                                                        <tr> <td>Lorem ipsum dolor sit amet abcdeabc</td> </tr>
                                                                                                        <tr> Lorem ipsum dolor sit amet abc </tr>
                                                                                                        <tr>
                                                                                                            <td>Assignee <td> <img src={SijoImage} /></td>
                                                                                                            <td>Sijo M Peter <tr>UI/UX Designer</tr></td> </td> 
                                                                                                            <td>Status <tr>High Priority</tr></td>
                                                                                                            
                                                                                                        </tr>
                                                                                                        
                                                                                        </tr>
                                                                            )  } 
                                                                            
                                                                            )}



                                       </div>
                                    </td>


                                    <td>
                                        <div id="flexbox">


                                             <tr><h3>In Progress  {inProgressID.length}</h3></tr>


                                                    {inProgressID.map( inProgress=>{
                                                                            
                                                                                
                                                                            return (
                                                                                    <tr id="table">
                                                                                        
                                                                                                    <tr>
                                                                                                        <td>ID:PCG836342</td>
                                                                                                        <td>Date:January 02 2019</td>
                                                                                                    </tr>
                                                                                                    <tr> <td><h5>Lorem ipsum dolor sit</h5></td> </tr>
                                                                                                    <tr> <td>Lorem ipsum dolor sit amet abcdeabc</td> </tr>
                                                                                                    <tr> Lorem ipsum dolor sit amet abc </tr>
                                                                                                    <tr>
                                                                                                        <td>Assignee <td> <img src={SijoImage} /></td>
                                                                                                        <td>Sijo M Peter <tr>UI/UX Designer</tr></td> </td> 
                                                                                                        <td>Status <tr>High Priority</tr></td>
                                                                                                        
                                                                                                    </tr>
                                                                                                    
                                                                                    </tr>
                                                                        )  } 
                                                                        
                                                                )}


                                        </div>
                                    </td>


                                    <td>
                                        <div id="flexbox">

                                                 <tr><h3>Done {doneID.length}</h3></tr>

                                                {doneID.map( done=>{
                                                                        
                                                                            
                                                                        return (
                                                                                <tr id="table">
                                                                                    
                                                                                                <tr>
                                                                                                    <td>ID:PCG836342</td>
                                                                                                    <td>Date:January 02 2019</td>
                                                                                                </tr>
                                                                                                <tr> <td><h5>Lorem ipsum dolor sit</h5></td> </tr>
                                                                                                <tr> <td>Lorem ipsum dolor sit amet abcdeabc</td> </tr>
                                                                                                <tr> Lorem ipsum dolor sit amet abc </tr>
                                                                                                <tr>
                                                                                                    <td>Assignee <td> <img src={SijoImage} /></td>
                                                                                                    <td>Sijo M Peter <tr>UI/UX Designer</tr></td> </td> 
                                                                                                    <td>Status <tr>High Priority</tr></td>
                                                                                                    
                                                                                                </tr>
                                                                                                
                                                                                </tr>
                                                                    )  } 
                                                                    
                                                                    )}



                                        </div>                   
                                    </td>
                     </div>
               </tbody>
         </table>
     </div>
</div>
    )
}

export default Issues
