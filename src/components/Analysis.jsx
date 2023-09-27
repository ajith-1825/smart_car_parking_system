import React,{useState} from "react";
import Graph from "./Graph";

const Analysis = () => {
    const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
    const d = new Date();
    let day = weekday[d.getDay()];
    const [data, setData]= useState(day);
  return (
    <div className="mainA">
      <div className="Buttons">
        <button class="brk-btn mon" onClick={()=>setData("mon")}>MON</button>
        <button class="brk-btn tue" onClick={()=>setData("tue")}>TUE</button>
        <button class="brk-btn wed" onClick={()=>setData("wed")}>WED</button>
        <button class="brk-btn thu" onClick={()=>setData("thu")}>THU</button>
        <button class="brk-btn fri" onClick={()=>setData("fri")}>FRI</button>
        <button class="brk-btn sat" onClick={()=>setData("sat")}>SAT</button>
        <button class="brk-btn sun" onClick={()=>setData("sun")}>SUN</button>
      </div>
      <Graph lab={data}/>
    </div>
  );
};
  
export default Analysis;