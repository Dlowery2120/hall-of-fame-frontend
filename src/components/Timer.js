
// import React, { useState, useEffect } from 'react';
// import '../App.scss';

// const cn = (...args) => {
//     return args.filter(x => x).join(' ');
//   };
  
// const Timer = () => {
//     const [seconds, setSeconds] = useState(10);
//     const [isRunning, setIsRunning] = useState(false);
  
//     useEffect(() => {
//       if (isRunning) {
//         const id = window.setInterval(() => {
//           setSeconds(seconds => seconds == 0);
//         }, 1000);
//         return () => window.clearInterval(id);
//       }
//       return undefined;
//     }, [isRunning]);
  
//     return(
//         <div className="timer-container">
//             <div className={cn('time-circle', !isRunning && 'paused')}>
//         <div className="time">
//           {seconds}
//         </div>
//       </div>
//       <div className="buttons">
//         {isRunning
//          ? (
//            <button className="play-pause" onClick={() => {
//              setIsRunning(false);
//            }}>
//              <i className="fa fa-pause fa-2x" />
//            </button>
//          )
//          : (
//            <button
//              className="play-pause"
//              onClick={() => setIsRunning(true)}>
//              <i className="fa fa-play fa-2x" />
//            </button>
//          )
//         }
//         <button
//           disabled={!isRunning}
//           className="reset"
//           onClick={() => {
//             setIsRunning(false);
//             setSeconds(10);
//           }}>
//           Reset
//         </button>
//       </div>
//         </div>
//     )
// }

// export default Timer;

import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "../App.scss";

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  
  function Timer() {
    return (
      <div className="App">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <p className="info">
          Change component properties in the code filed on the right to try
          difference functionalities
        </p>
      </div>
    );
  }

export default Timer;