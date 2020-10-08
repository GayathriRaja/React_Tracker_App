import React, { useState } from 'react'
import SijoImage from '../Images/Sijo.svg';
import {useHistory} from 'react-router-dom'

const Issues=()=>{


    const [getIssues, setGetIssues]=useState([]);
    const history=useHistory();
     // var status=[{toDoList:5},{inProgress:2},{done:3}]
     // var status=[5,2,3]
     // var toDoListID=[1,2,3,4,5]
     //var inProgressID=[1,2]
     //var doneID=[1,2,3]



   //Dummy data from the server

   var todoList=[{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'High Priority'},
   {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'High Priority'},
   {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Low Priority'},
   {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'High Priority'},
   {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Low Priority'}

]


var inProgress=[{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit dolor sit lorem ipsum lorem ipsum dolor sit",assigne:"Sijo",status:'inProgress'},
   {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'inProgress'}
]


var done=[{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Done'},
{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Done'},
{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Done'}

]




const onClickHandlerIssues=(id)=>{

    //  history.push('/details');
     console.log("ID:"+id);

     //Using redux to store the id and pass this id to issuesInDetail and using restApi get id specific data and display in IssuesInDetial.js

}



   //Fetch data from the server

    fetch('Dummy get API').then(result=>result.json()).then(result=>{
        setGetIssues(result)
    })




    return (
        <div id="issues-style">
            <h3 id="heading-issues">Issues</h3>
            <div>
                <table >
                    <tbody >
                         <div id="flexbox1" class="container">

                                    <td>
                                       <div id="flexbox">

                                                    <tr><h3>To Do  {todoList.length}</h3></tr>

                                                    {todoList.map( todoListValue=>{
                                                                            
                                                                                
                                                                                return (
                                                                                        <tr id="table" onClick={onClickHandlerIssues(todoListValue.id)}>
                                                                                                        
                                                                                                        <tr>
                                                                                                            <td>{todoListValue.id}</td>
                                                                                                            <td>{todoListValue.date}</td>
                                                                                                        </tr>
                                                                                                        <tr> <td><h5>{todoListValue.title}</h5></td> </tr>
                                                                                                        <tr> <td>{todoListValue.description}</td> </tr>
                                                                                                        <tr><p></p></tr>
                                                                                                        <tr>
                                                                                                            <td>Assignee <td> <img src={SijoImage} /></td>
                                                                                                            <td>{todoListValue.assigne} <tr>UI/UX Designer</tr></td> </td> 
                                                                                                            <td>Status <tr>{todoListValue.status}</tr></td>
                                                                                                            
                                                                                                        </tr>
                                                                                                        
                                                                                        </tr>
                                                                            )  } 
                                                                            
                                                                            )}



                                       </div>
                                    </td>


                                    <td>
                                        <div id="flexbox">


                                             <tr><h3>In Progress  {inProgress.length}</h3></tr>


                                                    {inProgress.map( progress=>{
                                                                            
                                                                                
                                                                            return (
                                                                                    <tr id="table"  onClick={onClickHandlerIssues(progress.id)}>
                                                                                        
                                                                                                    <tr>
                                                                                                        <td>{progress.id}</td>
                                                                                                        <td>{progress.date}</td>
                                                                                                    </tr>
                                                                                                    <tr> <td><h5>{progress.title}</h5></td> </tr>
                                                                                                    <tr> <td>{progress.description}</td> </tr>  
                                                                                                    <tr><p></p></tr>
                                                                                                    <tr>
                                                                                                        <td>Assignee <td> <img src={SijoImage} /></td>
                                                                                                        <td>{progress.assigne}<tr>UI/UX Designer</tr></td> </td> 
                                                                                                        <td>Status <tr id="issues-progress">{progress.status}</tr></td>
                                                                                                        
                                                                                                    </tr>
                                                                                                    
                                                                                    </tr>
                                                                        )  } 
                                                                        
                                                                )}


                                        </div>
                                    </td>


                                    <td>
                                        <div id="flexbox">

                                                 <tr><h3>Done {done.length}</h3></tr>

                                                {done.map( issuesDone=>{
                                                                        
                                                                            
                                                                        return (
                                                                                <tr id="table"  onClick={onClickHandlerIssues(issuesDone.id)}>
                                                                                    
                                                                                                <tr>
                                                                                                    <td>ID:{issuesDone.id}</td>
                                                                                                    <td>{issuesDone.date}</td>
                                                                                                </tr>
                                                                                                <tr> <td><h5>{issuesDone.title}</h5></td> </tr>
                                                                                                <tr> <td>{issuesDone.description}</td> </tr>     
                                                                                                <tr><p></p></tr>
                                                                                               <tr>
                                                                                                    <td>Assignee <td> <img src={SijoImage} /></td>
                                                                                                    <td>{issuesDone.assigne}<tr>UI/UX Designer</tr></td> </td> 
                                                                                                    <td>Status <tr id="issues-done">{issuesDone.status}</tr></td>
                                                                                                    
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
