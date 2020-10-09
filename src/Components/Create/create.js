import React, { useState } from 'react'
import SijoImage from '../Images/Sijo.svg';
import SaanviImage from '../Images/Saanvi.svg';
import SanalImage from '../Images/Sanal.svg';
import VivaanImage from '../Images/Vivaan.svg';
import DropDownImage from '../Images/SelectDropdown.svg';


const CreateComponent=()=>{


const [message,setMessage]=useState('');

const [id,setID]=useState("");
const [title,setTitle]=useState('');
const [description,setDescription]=useState('');
const [priority,setPriority]=useState('');
const [status,setStatus]=useState('');
const [createdByID,setcreatedByID]=useState(0);
const [assignee,setAssignee]=useState(0);
// const [affectVersion,setAffectVersion]=useState('');
// const [fixVersion,setFixVersion]=useState('');
// const [component,setComponent]=useState('');
// const [type,setType]=useState('');

// const [label,setLabel]=useState('');
// const [reporter,setReporter]=useState('');
// const [sprint,setSprint]=useState('');
// const [storyPoint,setStoryPoint]=useState('');



// var title=null;
// var type=null;
// var status=null;
// var priority=null;
// var resolution=null;
// var affectVersion=null;
// var fixVersion=null;
// var component=null;
// var assignee=null;
// var label=null;
// var reporter=null;
// var sprint=null;
// var description=null;
// var storyPoint=null;
// var attachment=null;









      const onChangeHandlerID=(e)=>{
            setID(e.target.value);
      }
      const onChangeHandlerTitle=(e)=>{
          setTitle(e.target.value);
      }
     

      const onChangeHandlerDescription=(e)=>{
            setDescription(e.target.value);
       }

       const onChangeHandlerPriority=(e)=>{
            setPriority(e.target.value);
       }


       const onChangeHandlerStatus=(e)=>{
            setStatus(e.target.value);
       }
       
      
       const onChangeHandlerCreatedBy=(e)=>{
            setcreatedByID(e.target.value);
       }

       const onChangeHandlerAssignee=(e)=>{
            setAssignee(e.target.value);
       }


       //  const onChangeHandlerFixVersion=(e)=>{
      //       setFixVersion(e.target.value);
      //  }

      //  const onChangeHandlerComponent=(e)=>{
      //       setComponent(e.target.value);
      //  }

        // const onChangeHandlerType=(e)=>{
      //       setType(e.target.value);
      //  }
      //  const onChangeHandlerLabel=(e)=>{
      //       setLabel(e.target.value);
      //  }
 
      //  const onChangeHandlerReporter=(e)=>{
      //       setReporter(e.target.value);
      //  }

      //  const onChangeHandlerSprint=(e)=>{
      //       setSprint(e.target.value);
      //  }

       
      //  const onChangeHandlerStoryPoint=(e)=>{
      //       setStoryPoint(e.target.value);
      //  }



       const onClickHandlerSubmit=()=>{


            if(id!=null || description!=null  || priority!=null || status!=null   || assignee!=null ){


                  //For dummy Post Status message
                  // setMessage("Data Posted")



                  //Post data to the server by using fetch()

                              fetch("http://localhost:8000/api/v1/issues/",{
                                    method:"POST",
                                    headers:{'Content-Type':'application/json'},
                                    body:JSON.stringify({
                                          short_id:id,
                                          title:title,
                                          description:description,
                                          priority:priority,
                                          status:status,
                                          created_by:createdByID,
                                          assignee:assignee,

                                    })
                                    
                                    
                                    
                              }).then(response=>response.json()).then(result=>{
                                    console.log("result:"+result);

                                                if(result)
                                                {
                                                      // console.log("result:"+result);
                                                      setMessage("Data Posted Successfully")
                                                      
                                                }
                                                else{
                                                      // console.log("result:"+result);

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

            <label>Id:
                <p> <input onChange={onChangeHandlerID}  id="text-box"  type="text" placeholder="ID" /> </p>
            </label>

            <label>Description:
                  <p> <input onChange={onChangeHandlerDescription} id="text-box" type="text" /> </p>
            </label>

            <label for="priority" id="text-box" class="dropdown-button">Priority:

                        <select  onChange={onChangeHandlerPriority} id="priority" class="dropdown">
                                    <option  value=""> </option>
                                    <option  value="SHOWSTOPPER">SHOWSTOPPER</option>
                                    <option  value="HIGH">High Priority</option>
                                    <option  value="MEDIUM">Medium Priority</option>
                                    <option  value="LOW">Low Priority</option>
                                    <option  value="VERY LOW">Very Low Priority</option>


                        </select>
            </label>






            <label for="status" id="text-box" class="dropdown-button">Status:

                                    <select  onChange={onChangeHandlerStatus} id="status" class="dropdown">

                                    <option  value=""></option>
                                    <option  value="TODO">To DO</option>
                                    <option  value="DOING">In Progress</option>
                                    <option  value="DONE">Done</option>
                                    </select>
                                    
                  </label>

                  <label>Created_by:
                        <p> <input onChange={onChangeHandlerCreatedBy} id="text-box" type="number" /> </p>
                 </label>

             <label>Assignee:
                  <p> <input onChange={onChangeHandlerAssignee} id="text-box" type="number" /> </p>
            </label>

            {/* <label for="assignee" id="text-box" class="dropdown-button">Assignee:
                  <select  onChange={onChangeHandlerAssignee} id="assignee" class="dropdown">
                        <option  value=""> </option>
                        <option  value="sija"  > <img src={SijoImage}/> Sijo M Peter</option>
                        <option  value="saanvi">  Saanvi</option>
                        <option  value="sanal">  Sanal</option>
                        <option  value="vivan">  Vivaan</option>
                  </select>
            </label> */}

            <p><button id="btn_create_submit"  onClick={onClickHandlerSubmit} >Submit </button></p>
            <label id="text-box" >Post Status:{message} </label>

        </div>
    )
}

export default CreateComponent;



                                    {/* <p> <input onChange={onChangeHandlerStatus} id="text-box" type="text" /> </p> */}


                              {/* <p> <input onChange={onChangeHandlerAssignee} id="text-box" type="text" /> </p> */}

                
                  {/* <label>type: <p> <input onChange={onChangeHandlerType}  id="text-box" type="text" /> </p> </label> */}
                              {/* <label for="type" id="text-box" class="dropdown-button">Type:

                                    <select  onChange={onChangeHandlerType} id="type" class="dropdown">

                                    <option  value=""><img src={DropDownImage}/></option>
                                    <option  value=""> </option>
                                    <option  value="Type1">Type1</option>
                                    <option  value="Type2">Type2</option>
                                    <option  value="Type3">Type3</option>
                                    <option  value="Type4">Type4</option>
                                    </select>
                              </label> */}

            

            {/* <label>Priority:
                  <p> <input onChange={onChangeHandlerPriority} id="text-box" type="text" /> </p>
            </label> */}
            {/* <label>Resolution:
                  <p> <input onChange={onChangeHandlerResolution} id="text-box" type="text" /> </p>
            </label> */}

            {/* <label>Affects Version's:
                  <p> <input onChange={onChangeHandlerAffectVersion} id="text-box" type="text" /> </p>
            </label> */}

            {/* <label>Fix Version's:
                  <p> <input onChange={onChangeHandlerFixVersion} id="text-box" type="text" /> </p>
            </label> */}

            {/* <label for="fix-version" id="text-box" class="dropdown-button">Fix Version's:

                  <select  onChange={onChangeHandlerFixVersion} id="fix-version" class="dropdown">

                              <option  value=""> </option>
                              <option  value="version1.1">Version 1.1</option>
                              <option  value="version1.2">Version 1.2</option>
                              <option  value="version1.3">Version 1.3</option>
                              <option  value="version1.4">Version 1.4</option>
                  </select>
            </label> */}

            {/* <label>Components/s:
                  <p> <input onChange={onChangeHandlerComponent} id="text-box" type="text" /> </p>
            </label> */}



                

           

            {/* <label>Labels:
                  <p> <input onChange={onChangeHandlerLabel} id="text-box" type="text" /> </p>
            </label>

            <label>Reporter:
                  <p> <input onChange={onChangeHandlerReporter} id="text-box" type="text" /> </p>
            </label>

            <label>Sprint:
                  <p> <input onChange={onChangeHandlerSprint} id="text-box" type="text" /> </p>
            </label>

            

            <label>Story Points:
                  <p> <input onChange={onChangeHandlerStoryPoint} id="text-box" type="text" /> </p>
            </label> */}

            {/* <label>Attchments:
                  <p> <input  type="file" onChange={onChangeHandlerAttachment} id="text-box"  placeholder="drop files to attach, or browse"/> </p>
                  <p> <input id="text-box" type="text" placeholder="drop files to attach, or browse"/> </p>

            </label> */}
          