import React,{useEffect, useState} from "react"
import {db} from "../firebase";
import {onValue, ref} from "firebase/database";

function Heading(){
    const num = 0;
    const[Values,setValue]= useState({"num":num,"list":[],"ratio":"0%","color":"red"});
    useEffect(()=>{
        onValue(ref(db),(snapshot)=>{
            const data=snapshot.val();
            if(data !=null ){
                const newNum = data["Sensor"]["Count"];
                const slots=data["Sensor"]["FreeSlots"].toString();
                const n=slots.length;
                var r=newNum/n *100;
                var color=""
                if(r>66.66){
                    color="green";
                }
                else if(r>33.33){
                    color="orange";
                }
                else{
                    color="red";
                }
                r=r.toFixed(2).toString()+"%";
                const newList=[];
                for(var i=0;i<n;i++){
                    if(slots[i]==="0"){
                        newList.push(<div className="slotCell" style={{backgroundColor:'green'}}><p>P{i+1}</p></div>);
                    }
                    else{
                        newList.push(<div className="slotCell" style={{backgroundColor:'red'}}><p>P{i+1}</p></div>);
                    }
                }
                setValue({"num":newNum,"list":newList,"ratio":r,"color":color});
            }
        });
    },[]);
            
    return (
        <div className="main">
        <h1>Available:</h1>
            <div className="box available">
                <div className="innerAvail">
                    <span className="num">{Values["num"]}</span>
                    <div className="skillBar">
                        <div className="MainBar">
                            <div className="bar" style={{width: Values["ratio"], backgroundColor: Values["color"]}}></div>
                            </div>
                        </div>
                </div>
            </div>
        <h1>Slots:</h1>
        <div className="box slots">
        {Values["list"]}
        </div>
        </div>);
}
export default Heading;