import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // fetches all data asynchronously
  async function fetchAll() {
    const [resTitle, resDate, resMessage] = await Promise.all([
      fetch("/get"),
      fetch("/get"),
      fetch("/get")
    ]);

    const thetitle = await resTitle.json();
    const thedate = await resDate.json();
    const themsg = await resMessage.json();

    return [thetitle, thedate, themsg];
  }

  // sets all values initally
  React.useEffect(() => {
    console.log("is running!");
    fetchAll().then(([thetitle, thedate, themsg]) => {
      setData(thedate.date);
      setData2(thetitle.title);
      setData3(themsg.message);
    }).catch((error) => {
      console.log("error is:", error);
    });
  }, []);

  //creates message title and date in db based on input field 
  React.useEffect(() => {

    // creates new data based on input field
    fetch('/create', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          "title": title,
          "date": date,
          "message": message,
      })
    });

    // fetches all data and displays on react app
    fetchAll().then(([thetitle, thedate, themsg]) => {
      setData(thetitle.title);
      setData2(thedate.date);
      setData3(themsg.message);
    }).catch((error) => {
      console.log("error is:", error);
    });
  }, [submitted]);


  // our application 
  return (
    <div className="App">

      {/* Displays data from doc*/}
      <p>{!data ? "" : data}</p>
      <p>{!data2 ? "" : data2}</p>
      <p>{!data3 ? "" : data3}</p>

      {/* Input Fields*/}
      <h6>Title</h6>
      <textarea placeholder="enter date here" className="txtarea-date" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
      <h6>Date</h6>
      <textarea placeholder="enter title here" className="txtarea-title" value={date} onChange={(e) => setDate(e.target.value)}></textarea>
      <h6>Entry</h6>
      <textarea placeholder="enter text here" className="txtarea-message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      
      {/* Button to submit */}
      <button className="btn" onClick={() => setSubmitted(!submitted)}>Submit</button>

    </div>
  );
}

export default App;