import React, { useState,useEffect } from 'react';
import CommentImage from '../Images/Comment.svg';
import EditImage from '../Images/Edit.svg';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'


function IssuesInDetailComponent() {


    const [specificIssue,setSpecificIssue]=useState({});
    const [getUserID,setGetUserID]=useState({});
    const [editUpdate,setEditUpdate]=useState(true);
    const [changePriority,setChangePriority]=useState(specificIssue.priority);
    const [changeStatus,setChangeStatus]=useState(specificIssue.status);
    const [changeTitle,setChangeTitle]=useState(specificIssue.title);
    // const [changeTitle,setChangeTitle]=useState('');






    const getID= useSelector(state=>state.getID.IssueID);
    const userID= useSelector(state=>state.getID.userID);
    
    
    const history=useHistory();

    // console.log("getID from IssuesInDetail:"+getID);
    // console.log("UserID from IssuesInDetail:"+userID);



const onChangeHandlerPriority=(e)=>{
setChangePriority(e.target.value);

// setSpecificIssue(specificIssue.priority=e.target.value)

}


const onChangeHandlerStatus=(e)=>{

    setChangeStatus(e.target.value);
    // console.log("status:"+e.target.value)
    }

    const onChangeHandlerTitle=(e)=>{
        setChangeTitle(e.target.value);
        }



    

            fetch('http://localhost:8000/api/v1/issues/'+getID).then(result=>result.json()).then(result=>{
                setSpecificIssue(result);
            })
    

     //Fetch data from the server (User Table)

        fetch('http://localhost:8000/api/v1/users/'+userID).then(result=>result.json()).then(result=>{
            setGetUserID(result)
        })

    


        const  onClickHandlerDelete=()=>{

           
                    fetch('http://localhost:8000/api/v1/issues/'+getID,{
                       method:"DELETE"
                    }).then(result=>result.json()).then(result=>{
                                if(result)
                                {    
                                }
                    })
                    history.push('/issues')

               
            }

           const onClickHandlerStatusChange=()=>{
            setEditUpdate(false);

           }

            const onClickHandlerPatch=()=>{
                setEditUpdate(false);
            }

            const onClickButtonSubmit=()=>{
                if(specificIssue.length>0)
                {

                        console.log("specificIssues:"+specificIssue.short_id+specificIssue.title+specificIssue.description+specificIssue.priority+specificIssue.status+specificIssue.created_by+specificIssue.assignee);
                        console.log("Changed Items:"+changeTitle+changePriority+changeStatus);
                        fetch('http://localhost:8000/api/v1/issues/'+getID,{
                            method:"PATCH",
                            headers:{'Content-Type':'application/json'},
                                            body:JSON.stringify({
                                                short_id:specificIssue.short_id,
                                                title:changeTitle,
                                                description:specificIssue.description,
                                                priority:changePriority,
                                                status:changeStatus,
                                                created_by:specificIssue.created_by,
                                                assignee:specificIssue.assignee,


                                                
                                            })
                                            
                                }).then(result=>result.json()).then(result=>{
                                    if(result){
                                        //   setEditUpdate(true)
                                        console.log("Result:"+result)
                                    }
                                })
                    }

            }
        


    // var dataBasedOnID={id:1000156,date:"10/05/2020",type:"Type1",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'High Priority'};
    
    return (
        <div id="issuesInDetail">
            
                 <h2>Lorem ipsum dolor sit lorem ipsum dolor sit</h2>
                 
                 <div >
                     <button id="btn_issues_in_detail" onClick={onClickHandlerPatch}> <img src={EditImage}/> Edit</button>
                     <button id="btn_issues_in_detail">Assign</button>
                     <button id="btn_issues_in_detail" onClick={onClickHandlerDelete}>Delete</button>
                     {/* <label for="btn_issues_in_detail">Status */}
                            <select  onChange={onChangeHandlerStatus} onClick={onClickHandlerStatusChange} id="btn_issues_in_detail1" class="dropdown">
                                            <option  value="">Status</option>
                                            <option  value="TODO">To DO</option>
                                            <option  value="DOING">In Progress</option>
                                            <option  value="DONE">Done</option>
                            </select>
                     {/* </label> */}
                 </div>


                 <div id="issue_detail1">
                     <p > <span >ID:</span>                      <span   class="span_values">{specificIssue.short_id}</span> </p>
                     <p > <span >Priority:</span>    {editUpdate ? <span  class="span_values">{specificIssue.priority}</span> : <input onChange={onChangeHandlerPriority} placeholder={specificIssue.priority} type="text" class="span_values"/>} </p>
                     {/* <label id="list"> <span id="">Created:</span>             <span>{specificIssue.updated_at}</span></label> */}

                     {/* <label id="list"> <span id="">Components/s:</span>         <span id="spn_issue_detail4" class="span_values"> None</span> </label> */}
                 </div>


                 <div id="issue_detail2">
    <p > <span >Status:</span>  <span class="span_values">{specificIssue.status}</span></p>
    <p > <span >Title:</span> { editUpdate ?  <span class="span_values">{specificIssue.title}</span> : <input onChange={onChangeHandlerTitle} placeholder={specificIssue.title} type="text" class="span_values"/> }</p>
                     {/* <label id="list"> <span id="">Fix Version's:</span>  <span id="spn_values3">None</span></label> */}
                     
                 </div>


                 <div id="issue_detail3">
                     <p > <span >Asignee:</span>  <span class="span_values"><img src={getUserID.profile_pic} width="30px" height="30px"/>  {getUserID.first_name} {getUserID.last_name}</span> </p>
                     <p > <span >Updated:</span> <span id="date_time" class="span_values">{specificIssue.updated_at}</span> </p>

                 </div>


                 {!editUpdate ? <button onClick={onClickButtonSubmit}>Submit</button> :null}


                 {/* <div id="issue_detail4">
                     <label>Description <p>{dataBasedOnID.description}</p></label>
                     <label>Agile <p>View on board</p></label>
                     <p>Attachment</p>
                     <p> <input id="attachment_pdf" type="text"/> </p>
                 </div> */}

        </div>
    )
}

export default IssuesInDetailComponent
