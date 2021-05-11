
import React, { useState, useEffect } from 'react';
import '../App.scss';

const cn = (...args) => {
    return args.filter(x => x).join(' ');
  };
  
const Timer = () => {
    const [seconds, setSeconds] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      if (isRunning) {
        const id = window.setInterval(() => {
          setSeconds(seconds => seconds-1);
        }, 1000);
        return () => window.clearInterval(id);
      }
      return undefined;
    }, [isRunning]);
  
    return(
        <div className="timer-container">
            <div className={cn('time-circle', !isRunning && 'paused')}>
        <div className="time">
          {seconds}
        </div>
      </div>
      <div className="buttons">
        {isRunning
         ? (
           <button className="play-pause" onClick={() => {
             setIsRunning(false);
           }}>
             <i className="fa fa-pause fa-2x" />
           </button>
         )
         : (
           <button
             className="play-pause"
             onClick={() => setIsRunning(true)}>
             <i className="fa fa-play fa-2x" />
           </button>
         )
        }
        <button
          disabled={!isRunning}
          className="reset"
          onClick={() => {
            setIsRunning(false);
            setSeconds(10);
          }}>
          Reset
        </button>
      </div>
        </div>
    )
}

export default Timer;