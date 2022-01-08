import './App.css';
import React, { useState } from 'react';
function App() {
  const [start_time, set_start_time] = useState('');
  const [ethic, set_ethic] = useState('');
  const [name_1, setName_1] = useState('');
  const [name_2, setName_2] = useState('');
  const [name_3, setName_3] = useState('');
  const [name_4, setName_4] = useState('');
  const [name_5, setName_5] = useState('');
  const [diff_1, setDiff_1] = useState('');
  const [diff_2, setDiff_2] = useState('');
  const [diff_3, setDiff_3] = useState('');
  const [diff_4, setDiff_4] = useState('');
  const [diff_5, setDiff_5] = useState('');
  const [dura_1, setDura_1] = useState('');
  const [dura_2, setDura_2] = useState('');
  const [dura_3, setDura_3] = useState('');
  const [dura_4, setDura_4] = useState('');
  const [dura_5, setDura_5] = useState('');
  const start_1 = "";
  const start_2 = "";
  const start_3 = "";
  const start_4 = "";
  const start_5 = "";
  const done_1 = 0;
  const done_2 = 0;
  const done_3 = 0;
  const done_4 = 0;
  const done_5 = 0;
  
  var date = new Date();
  var time = (date.toLocaleString('en-GB'));
  var data = [
    [name_1, dura_1, 0,0, (ethic-3)*diff_1*dura_1],
    [name_2, dura_2, 0,0, (ethic-3)*diff_2*dura_2],
    [name_3, dura_3, 0,0, (ethic-3)*diff_3*dura_3],
    [name_4, dura_4, 0,0, (ethic-3)*diff_4*dura_4],
    [name_5, dura_5, 0,0, (ethic-3)*diff_5*dura_5],
  ];
  return(
    <div>
    <img src="icon.png" alt="Sedulatify" width="435.375px" height="107.25px"></img>
    <div id = "workethicbox">
      <h2>{ethic-1}How hardworking are you <strong>currently</strong> on a scale of 1-5?</h2>
      <input type="text"value={ethic}onInput={e=>set_ethic(e.target.value)}></input>
      </div>
    <div id = "timebox">
      <h2>What time will you start work? [24Hr Clock]</h2>
      <input type="text" value={start_time} onInput={e=>set_start_time(e.target.value)}></input>
      </div>
      <br/><br/><br/>
      <div id="task1">
      <br/>
          <h1 id="stuff">Task #1</h1>
          <label>Name of Task : </label>
          <input type="text" value={name_1} onInput={e=>setName_1(e.target.value)}></input> <br/><br/>
          <label>Task Difficulty [1-5] : </label>
          <input type="text"value={diff_1} onInput={e=>setDiff_1(e.target.value)}></input><br/><br/>
          <label>Duration [mins] : </label>
          <input type="text" value={dura_1} onInput={e=>setDura_1(e.target.value)}></input>
          </div>
        <div id="task2">
      <br/>
          <h1 id="stuff">Task #2</h1>
          <label>Name of Task : </label>
          <input type="text" value={name_2} onInput={e=>setName_2(e.target.value)}></input> <br/><br/>
          <label>Task Difficulty [1-5] : </label>
          <input type="text"value={diff_2} onInput={e=>setDiff_2(e.target.value)}></input><br/><br/>
          <label>Duration [mins] : </label>
          <input type="text"value={dura_2} onInput={e=>setDura_2(e.target.value)}></input>
          </div>
          <div id="task3">
      <br/>
          <h1 id="stuff">Task #3</h1>
          <label>Name of Task : </label>
          <input type="text" value={name_3} onInput={e=>setName_3(e.target.value)}></input> <br/><br/>
          <label>Task Difficulty [1-5] : </label>
          <input type="text"value={diff_3} onInput={e=>setDiff_3(e.target.value)}></input><br/><br/>
          <label>Duration [mins] : </label>
          <input type="text"value={dura_3} onInput={e=>setDura_3(e.target.value)}></input><br/><br/>
          </div>
          <div id="task4">
      <br/>
          <h1 id="stuff">Task #4</h1>
          <label>Name of Task : </label>
          <input type="text"value={name_4} onInput={e=>setName_4(e.target.value)}></input> <br/><br/>
          <label>Difficulty [1-5] : </label>
          <input type="text"value={diff_4} onInput={e=>setDiff_4(e.target.value)}></input><br/><br/>
          <label>Duration [mins] : </label>
          <input type="text"value={dura_4} onInput={e=>setDura_4(e.target.value)}></input>
          </div>
          <div id="task5">
      <br/>
          <h1 id="stuff">Task #5</h1>
          <label>Name of Task : </label>
          <input type="text"value={name_5} onInput={e=>setName_5(e.target.value)}></input> <br/><br/>
          <label>Difficulty [1-5] : </label>
          <input type="text"value={diff_5} onInput={e=>setDiff_5(e.target.value)}></input><br/><br/>
          <label>Duration [mins] : </label>
          <input type="text"value={dura_5} onInput={e=>setDura_5(e.target.value)}></input>
      </div>
      <div id = "out1">
        <h3>{} {}</h3>
      </div>
      <div id = "time1">
        <h3>{}</h3>
      </div>
      <div id = "out2">
        <h3>{} {}</h3>
      </div>
      <div id = "time2">
        <h3>{}</h3>
      </div>
      <div id = "out3">
        <h3>{} {}</h3>
      </div>
      <div id = "time3">
        <h3>{}</h3>
      </div>
      <div id = "out4">
        <h3>{} {}</h3>
      </div>
      <div id = "time4">
        <h3>{}</h3>
      </div>
      <div id = "out5">
        <h3>{} {}</h3>
      </div>
      <div id = "time5">
        <h3>{}</h3>
      </div>
      <div id = "desc">
        <p>Sedulatify is a smart website that intuitively assists with productivity and work management. It allows you to create tasks and automatically groups them into a schedule regardless of what your work ethic may be. Following scientifically proven methods to improve productivity (i.e. Flowtime), this website is designed for the modern day human. Enter tasks and configure them according to their specificity, and we will leverage an algorithm to sort and plan your workflow, while adding useful breaks and needed buffer timings. <b>Don’t be busy; be productive.</b></p>
      </div>
    </div>
  );
}
export default App; 
