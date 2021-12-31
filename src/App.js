
import {useEffect, useState} from 'react';

import './App.css';

import NewYearMessage from './componnents/NewYearMessage.js'
import CountDown      from './componnents/CountDown';



function App() {

  const [time, setTime] = useState(new Date());

  useEffect(function(){
    const interval = setInterval(()=>{
      setTime(new Date());
    }, 1000);
    return ()=>{clearInterval(interval)};
  })

  return (
    <div className="App">
      <header className="App-header">

        {
          (time.getFullYear() === 2021) ?  //to MODIFY
            <NewYearMessage /> :
            <CountDown date={ time }/> 
        }

      </header>
    </div>
  );
}

export default App;
