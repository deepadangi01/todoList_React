import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addData } from "./dotoSlice";
const App=()=>{
  const [data,setData]=useState("")
  const Data=useSelector((state)=>state.todo.task)
  console.log(Data);
  const dispatch=useDispatch();
  const textDataAdd=()=>{
    dispatch(addData({id:Date.now(),work:data}))
    //dispatch(addData(data));
  }
  let sno=1;
  let ans=Data.map((key)=>{
  sno++;
     return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.work}</td>
      </tr>
      </>
     )
  })
  return (
    <>
   <h1>To Do App</h1>
   Enter Task: <input type="text" value={data}
   onChange={(e)=>{setData(e.target.value)}} />
   <button onClick={textDataAdd}>add</button>
   <hr />
   <table>
    <tr>
      <td>Sno</td>
      <td>Your Task</td>
    </tr>
    {ans}  
   </table>
    
    </>
  )
}
export default App;