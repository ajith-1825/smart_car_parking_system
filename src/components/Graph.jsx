import React, { useState ,useEffect} from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
// import { initializeApp, applicationDefault, cert } from 'firebase/app';
import {getDoc, doc } from 'firebase/firestore';
// initializeApp();
import { fs } from "../firebase";

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function Graph(param) {

  const [data,setData] = useState({
    labels: ["12:00 AM", "2:00 AM", "4:00 AM", "6:00 AM", "8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM", "10:00 PM",],
    datasets: [
      {
        label: param.lab,
        data: [],
        backgroundColor: '#f26522',
        pointBackgroundColor: '#000',
        borderColor: '#f26522',
        tension: 0.4,
        showLine: true
      }
    ]
  });
  useEffect(()=>{

  const docRef = doc(fs, "LastWeekData", "data");
  getDoc(docRef).then(response => {
    const tempdata=response.data();
    setData({
      labels: ["12:00 AM", "2:00 AM", "4:00 AM", "6:00 AM", "8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM", "10:00 PM",],
      datasets: [
        {
          label: param.lab,
          data: tempdata[param.lab],
          backgroundColor: '#f26522',
          pointBackgroundColor: '#000',
          borderColor: '#f26522',
          tension: 0.4,
          showLine: true
        }
      ],
    });
    
  console.log("okay");
  }).catch(error => console.log(error.message));


  },[param.lab]);
  return (<div class="graph">
    <Line data={data}>Hello</Line>
  </div>);

}

export default Graph;