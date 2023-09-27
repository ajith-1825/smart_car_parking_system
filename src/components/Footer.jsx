import React,{useState} from "react"

function Footer(){
    var c =0;
    var date = new Date();
    const time = " ";
    const interval= setInterval(update,1000);
    const[time_1,setTime]=useState(time);
    function update(){
        if(c===0){
            const new_time = date.toLocaleTimeString();
            setTime(new_time);
            c++;
        }
        else{
            clearInterval(interval);
        }
    }
    return <div>
        <p>
            {time_1}
        </p>
    </div>
}

export default Footer;
debugger;