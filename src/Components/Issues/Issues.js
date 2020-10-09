import React, { useState } from 'react'
import SijoImage from '../Images/Sijo.svg';
import {useHistory} from 'react-router-dom';
import GetIDAction from '../Redux/Action/getIDAction';
import {useDispatch,useSelector} from 'react-redux'

const Issues=(props)=>{


    const [getIssues, setGetIssues]=useState([]);
    const [getUser,setGetUser]=useState([])
    // const [getID,setGetID]=useState(0);
    const history=useHistory();

    const dispatch=useDispatch();




     // var status=[{toDoList:5},{inProgress:2},{done:3}]
     // var status=[5,2,3]
     // var toDoListID=[1,2,3,4,5]
     //var inProgressID=[1,2]
     //var doneID=[1,2,3]










const onClickHandlerIssues=(id)=>{

     history.push('/details');
    //  setGetID(id);
     console.log("ID:"+id);

     //Using redux to store the id and pass this id to issuesInDetail and using restApi get id specific data and display in IssuesInDetial.js

}



   //Fetch data from the server (Issue Table)

    fetch('http://localhost:8000/api/v1/issues/').then(result=>result.json()).then(result=>{
        setGetIssues(result)
    })


   //Fetch data from the server (User Table)

   fetch('http://localhost:8000/api/v1/users/').then(result=>result.json()).then(result=>{
       setGetUser(result)
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

                                                    <tr><h3>To Do  {getIssues.filter(a=>a.status=="TODO").length}</h3></tr>

                                                    {getIssues.map( result=>{
                                                                           
                                                                    if(result.status==="TODO" )
                                                                    {
                                                                                return (
                                                                                        <tr id="table" onClick={()=>{dispatch(GetIDAction(result.id,result.assignee)); onClickHandlerIssues(result.id)}}>

                                                                                                        <tr>
                                                                                                            <td>ID:{result.short_id}</td>
                                                                                                            <td>Date{result.created_at}</td>
                                                                                                        </tr>
                                                                                                        <tr> <td><h5>{result.title}</h5></td> </tr>
                                                                                                        <tr> <td>{result.description}</td> </tr>
                                                                                                        <tr><p></p></tr>
                                                                                                        <tr>

                                                                                                            {getUser.map(userDetails=>{
                                                                                                                if(result.assignee==userDetails.id)  
                                                                                                                {
                                                                                                                    return(
                                                                                                                        <div>
                                                                                                                            <tr>Assignee <tr> <img width="30px" height="30px" src={userDetails.profile_pic} /> <td>  <td> {userDetails.first_name}  {userDetails.last_name}</td> <tr>{userDetails.title}</tr></td></tr>    </tr> 
                                                                                                                            {/* <tr>Assignee <tr> <td> <tr>{userDetails.title}</tr></td></tr>    </tr>  */}
                                                                                                                            {/* <td>{userDetails.assignee} </td> */}
                                                                                                                        </div>
                                                                                                                    )
                                                                                                                }
                                                                                                            })

                                                                                                            }

                                                                                                         <td>Status <tr>{result.priority}</tr></td>


                                                                                                            
                                                                                                        </tr>
                                                                                                        
                                                                                        </tr>
                                                                            ) } } 
                                                                            
                                                                            )}



                                       </div>
                                    </td>


                                    <td>
                                        <div id="flexbox">


                                             <tr><h3>In Progress  {getIssues.filter(a=>a.status==="DOING").length}</h3></tr>


                                                    {getIssues.map( resultInProgress=>{
                                                               if(resultInProgress.status==="DOING" )
                                                               {
                                                                                
                                                                            return (
                                                                                    <tr id="table"  onClick={()=>{dispatch(GetIDAction(resultInProgress.id,resultInProgress.assignee)); onClickHandlerIssues(resultInProgress.id)}}>
                                                                                        
                                                                                                    <tr>
                                                                                                        <td>ID:{resultInProgress.short_id}</td>
                                                                                                        <td>Date:{resultInProgress.created_at}</td>
                                                                                                    </tr>
                                                                                                    <tr> <td><h5>{resultInProgress.title}</h5></td> </tr>
                                                                                                    <tr> <td>{resultInProgress.description}</td> </tr>  
                                                                                                    <tr><p></p></tr>
                                                                                                    <tr>


                                                                                                    {getUser.map(userDetails=>{
                                                                                                                if(resultInProgress.assignee==userDetails.id)  
                                                                                                                {
                                                                                                                    return(
                                                                                                                        <div>
                                                                                                                            <tr>Assignee <tr> <img width="30px" height="30px" src={userDetails.profile_pic} /> <td>  <td> {userDetails.first_name}  {userDetails.last_name}</td> <tr>{userDetails.title}</tr></td></tr>    </tr> 
                                                                                                                            {/* <tr>Assignee <tr> <td> <tr>{userDetails.title}</tr></td></tr>    </tr>  */}
                                                                                                                            {/* <td>{userDetails.assignee} </td> */}
                                                                                                                        </div>
                                                                                                                    )
                                                                                                                }
                                                                                                            })

                                                                                                            }
                                                                                                        
                                                                                                        <td>Status <tr id="issues-progress">In Progress</tr></td>
                                                                                                        
                                                                                                    </tr>
                                                                                                    
                                                                                    </tr>
                                                                        ) } } 
                                                                        
                                                                )}


                                        </div>
                                    </td>


                                    <td>
                                        <div id="flexbox">

                                                 <tr><h3>Done  {getIssues.filter(a=>a.status==="DONE").length}</h3></tr>

                                                {getIssues.map( resultDone=>{
                                                                        
                                                    if(resultDone.status==="DONE" )
                                                    {
                                                                        return (
                                                                                <tr id="table"  onClick={()=>{dispatch(GetIDAction(resultDone.id,resultDone.assignee));onClickHandlerIssues(resultDone.id)}}>
                                                                                    
                                                                                                <tr>
                                                                                                    <td>ID:{resultDone.short_id}</td>
                                                                                                    <td>Date{resultDone.created_at}</td>
                                                                                                </tr>
                                                                                                <tr> <td><h5>{resultDone.title}</h5></td> </tr>
                                                                                                <tr> <td>{resultDone.description}</td> </tr>     
                                                                                                <tr><p></p></tr>
                                                                                               <tr>
                                                                                                    
                                                                                               {getUser.map(userDetails=>{
                                                                                                                if(resultDone.assignee==userDetails.id)  
                                                                                                                {
                                                                                                                    return(
                                                                                                                        <div>
                                                                                                                            <tr>Assignee <tr> <img width="30px" height="30px" src={userDetails.profile_pic} /> <td>  <td> {userDetails.first_name}  {userDetails.last_name}</td> <tr>{userDetails.title}</tr></td></tr>    </tr> 
                                                                                                                            {/* <tr>Assignee <tr> <td> <tr>{userDetails.title}</tr></td></tr>    </tr>  */}
                                                                                                                            {/* <td>{userDetails.assignee} </td> */}
                                                                                                                        </div>
                                                                                                                    )
                                                                                                                }
                                                                                                            })

                                                                                                            }


                                                                                                    <td>Status <tr id="issues-done">{resultDone.status}</tr></td>
                                                                                                    
                                                                                                </tr>
                                                                                                
                                                                                </tr>
                                                                    ) } } 
                                                                    
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




   //Dummy data from the server

//    var todoList=[{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'High Priority'},
//    {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'High Priority'},
//    {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Low Priority'},
//    {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'High Priority'},
//    {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Low Priority'}

// ]


// var inProgress=[{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit dolor sit lorem ipsum lorem ipsum dolor sit",assigne:"Sijo",status:'inProgress'},
//    {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'inProgress'}
// ]


// var done=[{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Done'},
// {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Done'},
// {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'Done'}

// ]
