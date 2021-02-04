// import React from "react";
import React, {useState, useEffect} from 'react';
// import axios from "axios"
import API from "./utils/API";
import Header from "./components/Header";
import SearchBtn from "./components/SearchBtn";
import TableNav from './components/TableNav'
import Card from './components/Card'
import PageLoad from './components/PageLoad';
import RecordHeader from './components/RecordHeader';




function App() {
  // employees array will start out as an empty array

  const [employees, setEmployees] = useState([]);

  // calling useEffect to run the function one time
  useEffect(
    () =>{

      API.search ().then
      ((res) => {
        setEmployees(res.data.results);
        console.log("Developer State:");
        console.log(res.data.results);});
console.log("Ran once!")
    },[]
  )
  
  return (
      <div>
          <Header employees={employees} />
          {/* <Card /> */}
          <SearchBtn />
          <TableNav employees={employees} />
          <PageLoad />
          <RecordHeader employees={employees} />
        
      </div>
  );
};

export default App;















    





