import React from 'react'

const create=()=>{
    return (
        <div id="create-style" >
            <h3>Create</h3>
            <label>Title:
                <p> <input id="input-title"  type="text" placeholder="Text" /> </p>
            </label>
                              <label>Type:
                                    <p> <input  id="text-box" type="text" /> </p>
                              </label>

                              <label>Status:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Priority:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Resolution:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Affects Version's:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Fix Version's:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Components/s:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Assignee:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Labels:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Reporter:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Sprint:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Description:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Story Points:
                                    <p> <input id="text-box" type="text" /> </p>
                              </label>

                              <label>Attchments:
                                    {/* <p> <input id="text-box" type="file" placeholder="drop files to attach, or browse"/> </p> */}
                                    <p> <input id="text-box" type="text" placeholder="drop files to attach, or browse"/> </p>

                              </label>
            <p><button id="btn_create_submit">Submit</button></p>

        </div>
    )
}

export default create;