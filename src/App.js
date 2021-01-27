// import React from "react";
import React, {useEffect} from 'react';
// import axios from "axios"
import API from "./utils/API";
import Header from "./components/Header";
import SearchBtn from "./components/SearchBtn";
import TableNav from './components/TableNav'
import Card from './components/Card'
import PageLoad from './components/PageLoad';
import RecordHeader from './components/RecordHeader';



const App = () => {
  // calling useEffect to run the function one time
  useEffect(
    () =>{

      API.search ().then
      ((res) => {
      //   setDeveloperState(res);
        console.log("Developer State:");
        console.log(res);});
console.log("Ran once!")
    },[]
  )
  
  return (
      <div>
          <Header />
          <Card />
          <SearchBtn />
          <TableNav />
          <PageLoad />
          <RecordHeader/>
        
      </div>
  );
};

export default App;















    





