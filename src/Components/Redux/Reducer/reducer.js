const Reducer=(state=0,action)=>{
   switch(action.type){
       case "getID":
        //    console.log("GetID:"+action.payload)
           return state={
               IssueID:action.payload1,
               userID:action.payload2
            }
         
      default:
          return state

        
   }
}

export default Reducer
 