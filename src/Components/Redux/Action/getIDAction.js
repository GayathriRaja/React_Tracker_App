const GetIDAction=(issueID,userID)=>{
   return{
       type:"getID",
       payload1:issueID,
        payload2:userID
   }
}

export default GetIDAction
