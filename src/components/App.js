import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [data, setData]=useState("OFF");
  const [data1,setData1]=useState("ON");
//code here 
  const handleClick=()=>{
      setData("ON");
      setData1("OFF");
  }
   const handleClick1=()=>{
      setData("OFF");
      setData1("ON");
  }

  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {/* assign value for button 1 */}
      {data}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick1}>
        {/* assign value for button 2 */}
        {data1}
      </button>
    </div>
  );
}


export default App;
