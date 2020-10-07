import React, { useState } from 'react'
import SijoImage from '../Images/Sijo.svg';
import SaanviImage from '../Images/Saanvi.svg';
import SanalImage from '../Images/Sanal.svg';
import VivaanImage from '../Images/Vivaan.svg';
import DropDownImage from '../Images/SelectDropdown.svg';


const CreateComponent=()=>{


const [message,setMessage]=useState('');


var title=null;
var type=null;
var status=null;
var priority=null;
var resolution=null;
var affectVersion=null;
var fixVersion=null;
var component=null;
var assignee=null;
var label=null;
var reporter=null;
var sprint=null;
var description=null;
var storyPoint=null;
// var attachment=null;



//Used redux to store dummy data and display issues component









      const onChangeHandlerTitle=(e)=>{
           title = e.target.value;
           console.log("title:"+title);      
      }
      const onChangeHandlerType=(e)=>{
            type = e.target.value;
            console.log("type:"+type);      
       }
       const onChangeHandlerStatus=(e)=>{
            status = e.target.value;
            console.log("status:"+status);      
       }
       const onChangeHandlerPriority=(e)=>{
            priority = e.target.value;
            console.log("priority:"+priority);      
       }
       const onChangeHandlerResolution=(e)=>{
            resolution = e.target.value;
            console.log("resolution:"+resolution);      
       }
       const onChangeHandlerAffectVersion=(e)=>{
            affectVersion = e.target.value;
            console.log("affectVersion:"+affectVersion);      
       }
       const onChangeHandlerFixVersion=(e)=>{
            fixVersion = e.target.value;
            console.log("fixVersion:"+fixVersion);      
       }

       const onChangeHandlerComponent=(e)=>{
            component = e.target.value;
            console.log("component:"+component);      
       }

       const onChangeHandlerAssignee=(e)=>{
            assignee = e.target.value;
            console.log("assignee:"+assignee);      
       }

       const onChangeHandlerLabel=(e)=>{
            label = e.target.value;
            console.log("label:"+label);      
       }
 
       const onChangeHandlerReporter=(e)=>{
            reporter = e.target.value;
            console.log("reporter:"+reporter);      
       }

       const onChangeHandlerSprint=(e)=>{
            sprint = e.target.value;
            console.log("sprint:"+sprint);      
       }

       const onChangeHandlerDescription=(e)=>{
            description = e.target.value;
            console.log("description:"+description);      
       }

       const onChangeHandlerStoryPoint=(e)=>{
            storyPoint = e.target.value;
            console.log("storyPoint:"+storyPoint);      
       }



       const onClickHandlerSubmit=()=>{


            if(title!=null || type!=null || status!=null || priority!=null || resolution!=null || affectVersion!=null || fixVersion!=null ||component!=null || assignee!=null || label!=null || reporter!=null || sprint!=null || description!=null || storyPoint!=null){


                  //For dummy Post Status message
                  setMessage("Data Posted")



                  //Post data to the server by using fetch()

                              fetch(" Dummy Post API",{
                                    method:"POST",
                                    headers:{'Content-Type':'application/json'},
                                    body:JSON.stringify({
                                    Title:title,
                                    Type:type,
                                    Status:status,
                                    Priority:priority,
                                    Resolution:resolution,
                                    AffectVersion:affectVersion,
                                    FixVersion:fixVersion,
                                    Component:component,
                                    Assignee:assignee,
                                    Label:label,
                                    Reporter:reporter,
                                    Sprint:sprint,
                                    Description:description,
                                    StoryPoint:storyPoint

                                    })
                                    
                                    
                                    
                              }).then(result=>result.json()).then(result=>{
                                                if(result)
                                                {
                                                      setMessage("Data Posted Successfully")
                                                      
                                                }
                                                else{
                                                      setMessage("Error")

                                    
                                    
                                                }
                                          }
                                    
                                    
                                    )
            }

            else{
                  setMessage("Error")
            }


       }

    return (
        <div id="create-style" >
            <h3 id="heading-create">Create</h3>
            <label>Title:
                <p> <input onChange={onChangeHandlerTitle}  id="input-title"  type="text" placeholder="Text" /> </p>
            </label>

            {/* <label>type: <p> <input onChange={onChangeHandlerType}  id="text-box" type="text" /> </p> </label> */}
            <label for="type" id="text-box" class="dropdown-button">Type:

                  <select  onChange={onChangeHandlerType} id="type" class="dropdown">

                  {/* <option  value=""><img src={DropDownImage}/></option> */}
                  <option  value=""> </option>
                  <option  value="Type1">Type1</option>
                  <option  value="Type2">Type2</option>
                  <option  value="Type3">Type3</option>
                  <option  value="Type4">Type4</option>
                  </select>
            </label>
            <label>Status:
                  <p> <input onChange={onChangeHandlerStatus} id="text-box" type="text" /> </p>
            </label>

            {/* <label>Priority:
                  <p> <input onChange={onChangeHandlerPriority} id="text-box" type="text" /> </p>
            </label> */}

            <label for="priority" id="text-box" class="dropdown-button">Priority:

                        <select  onChange={onChangeHandlerPriority} id="priority" class="dropdown">
                                    <option  value=""> </option>
                                    <option  value="High">High Priority</option>
                                    <option  value="Low">Low Priority</option>
                                    <option  value="Medium">Medium Priority</option>
                        </select>
            </label>

            <label>Resolution:
                  <p> <input onChange={onChangeHandlerResolution} id="text-box" type="text" /> </p>
            </label>

            <label>Affects Version's:
                  <p> <input onChange={onChangeHandlerAffectVersion} id="text-box" type="text" /> </p>
            </label>

            {/* <label>Fix Version's:
                  <p> <input onChange={onChangeHandlerFixVersion} id="text-box" type="text" /> </p>
            </label> */}

            <label for="fix-version" id="text-box" class="dropdown-button">Fix Version's:

                  <select  onChange={onChangeHandlerFixVersion} id="fix-version" class="dropdown">

                              <option  value=""> </option>
                              <option  value="version1.1">Version 1.1</option>
                              <option  value="version1.2">Version 1.2</option>
                              <option  value="version1.3">Version 1.3</option>
                              <option  value="version1.4">Version 1.4</option>
                  </select>
            </label>

            <label>Components/s:
                  <p> <input onChange={onChangeHandlerComponent} id="text-box" type="text" /> </p>
            </label>

                  {/* <p> <input onChange={onChangeHandlerAssignee} id="text-box" type="text" /> </p> */}

            <label for="assignee" id="text-box" class="dropdown-button">Assignee:
                  <select  onChange={onChangeHandlerAssignee} id="assignee" class="dropdown">
                        <option  value=""> </option>
                        <option  value="sija"  >  Sijo M Peter</option>
                        <option  value="saanvi">  Saanvi</option>
                        <option  value="sanal">  Sanal</option>
                        <option  value="vivan">  Vivaan</option>
                  </select>
            </label>



            <label>Labels:
                  <p> <input onChange={onChangeHandlerLabel} id="text-box" type="text" /> </p>
            </label>

            <label>Reporter:
                  <p> <input onChange={onChangeHandlerReporter} id="text-box" type="text" /> </p>
            </label>

            <label>Sprint:
                  <p> <input onChange={onChangeHandlerSprint} id="text-box" type="text" /> </p>
            </label>

            <label>Description:
                  <p> <input onChange={onChangeHandlerDescription} id="text-box" type="text" /> </p>
            </label>

            <label>Story Points:
                  <p> <input onChange={onChangeHandlerStoryPoint} id="text-box" type="text" /> </p>
            </label>

            {/* <label>Attchments:
                  <p> <input  type="file" onChange={onChangeHandlerAttachment} id="text-box"  placeholder="drop files to attach, or browse"/> </p>
                  <p> <input id="text-box" type="text" placeholder="drop files to attach, or browse"/> </p>

            </label> */}
            <p><button id="btn_create_submit"  onClick={onClickHandlerSubmit} >Submit </button></p>
            <label id="text-box" >Post Status:{message} </label>

        </div>
    )
}

export default CreateComponent;