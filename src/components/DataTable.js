import React, { useState, useEffect } from 'react';

const DataTable = () => {
  const [sensorData, setSensorData] = useState([]);

  const fetchSensorData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/get-data');
      const results = await response.json();
      setSensorData(results);
      //console.log(results);
    } catch (error) {
      console.error('Error', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchSensorData();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sensorData]);

  // fixTime(d) {
  //  var len = d.length();
  //  const time = d.slice(0,1);
  //   if (parseInt(time) > 12) {
  //     time = parseInt(time - 12);
  //     return 
  //   } else {
  //     return d;
  //   }
  // }

  return(
    <table className="tabledata">
      <thead>
        <tr>
          <td>Date</td>
          <td>Time</td>
          <td>Humidity</td>
          <td>PH Level</td>
          <td>Nutrients</td>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(sensorData.data) && sensorData.data.map((result) => (
    <tr key={result._id}>
    <td>{result.DateAndTime.slice(0,10)}</td>
    
    <td>{result.DateAndTime.slice(11,19)}</td>
    <td>&nbsp;{result.PLC_Humidity_Value}</td>
    <td>{result.PLC_pH_Value}</td>
    <td>{result.PLC_TDS_Value}</td>
  </tr>
))}
      </tbody>
    </table>
  )
   
};

export default DataTable;




