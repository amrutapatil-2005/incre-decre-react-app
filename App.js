import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './Component/First';










function App() {
 const[cnt,setcnt]=useState(0);
 const increment=()=>{
   setcnt(cnt+1);

 }
 const decrement=()=>{
 
  if(cnt>0)
    {
      setcnt(cnt-1);


    }
    else{
      setcnt(0);
      alert('sorry reached to limit 0');
    }

}

  
  
  
  return (
    <div className="main_div">
    <div className="center_div">
    <h1> {cnt}</h1>
    <div className="btn_div">
    <button onClick={increment}>Increm</button>
    <button onClick={decrement}>Decrem</button>
    </div>
  </div>

    </div>
    
   
  );
}

export default App;
