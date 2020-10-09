import React, { useState,useEffect } from 'react';
import CommentImage from '../Images/Comment.svg';
import EditImage from '../Images/Edit.svg';
import {useSelector,useDispatch} from 'react-redux'


function IssuesInDetailComponent() {


    const [specificIssue,setSpecificIssue]=useState({});
    const [getUserID,setGetUserID]=useState({});

    const getID= useSelector(state=>state.getID.IssueID);
    const userID= useSelector(state=>state.getID.userID);


    // console.log("getID from IssuesInDetail:"+getID);
    // console.log("UserID from IssuesInDetail:"+userID);

    if(getID>0)
    {

            fetch('http://localhost:8000/api/v1/issues/'+getID).then(result=>result.json()).then(result=>{
                setSpecificIssue(result);
            })
    }

     //Fetch data from the server (User Table)

        fetch('http://localhost:8000/api/v1/users/'+userID).then(result=>result.json()).then(result=>{
            setGetUserID(result)
        })

    


    var dataBasedOnID={id:1000156,date:"10/05/2020",type:"Type1",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'High Priority'};
    
    return (
        <div id="issuesInDetail">
            
                 <h2>Lorem ipsum dolor sit lorem ipsum dolor sit</h2>
                 
                 <div >
                     <button id="btn_issues_in_detail"> <img src={EditImage}/> Edit</button>
                     <button id="btn_issues_in_detail"> <img src={CommentImage}/> Comment</button>
                     <button id="btn_issues_in_detail">Assign</button>
                     <button id="btn_issues_in_detail">Wont't Fix</button>
                     <button id="btn_issues_in_detail">Accept</button>
                     <button id="btn_issues_in_detail">WorkFlow</button>
                 </div>


                 <div id="issue_detail1">
                     <label id="list"> <span >Type:</span>                      <span id="spn_issue_detail1"  class="span_values">Task</span> </label>
                     <label id="list"> <span id="">Priority:</span>             <span id="spn_issue_detail2" class="span_values">{specificIssue.priority}</span> </label>
                     <label id="list"> <span id="">Affects Version's:</span>    <span id="spn_issue_detail3" class="span_values">None</span> </label>
                     <label id="list"> <span id="">Components/s:</span>         <span id="spn_issue_detail4" class="span_values"> None</span> </label>
                     <label id="list"> <span id="">Labels:</span>               <span id="spn_issue_detail5" class="span_values"> Webetc</span> </label>
                     <label id="list"> <span id="">Sprint:</span> </label>
                     <label id="list"> <span id="">Story Points:</span>         <span id="spn_issue_detail6">6</span></label>
                 </div>


                 <div id="issue_detail2">
                     <label id="list"> <span id="">Status:</span>  <span id="spn_values1">{specificIssue.status}</span> </label>
                     <label id="list"> <span id="">Resolution:</span>  <span id="spn_values2">Unresolved</span></label>
                     <label id="list"> <span id="">Fix Version's:</span>  <span id="spn_values3">None</span></label>
                     
                 </div>


                 <div id="issue_detail3">
                     <label id="list"> <span id="">Asignee:</span>  <span><img src={getUserID.profile_pic} width="30px" height="30px"/> {getUserID.first_name} {getUserID.last_name}</span> </label>
                     <label id="list"> <span id="">Votes:</span>  <span>0</span></label>
                     <label id="list"> <span id="">Watchers:</span>  <span> 1 stop watch this issue</span></label>
                     <label id="list"> <span id="">Created:</span>  <span>02.01.2019</span></label>
                     <label id="list"> <span id="">Updated:</span> <span>{specificIssue.updated_at}</span> </label>
                 </div>


                 <div id="issue_detail4">
                     <label>Description <p>{dataBasedOnID.description}</p></label>
                     <label>Agile <p>View on board</p></label>
                     <p>Attachment</p>
                     <p> <input id="attachment_pdf" type="text"/> </p>
                 </div>

        </div>
    )
}

export default IssuesInDetailComponent
