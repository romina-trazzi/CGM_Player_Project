import { useState, useRef } from "react";

import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge( {title, targetTime} ) {
    // References 
    const timer = useRef(); 
    const dialog = useRef();
    
    
    // Hooks

    // const [timerExpired, setTimerExpired] = useState(false);
    // const [timerStarted, setTimerStarted] = useState(false)
    const [timerRemaining, setTimerRemaining] = useState( targetTime * 1000 );
    const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

    // Cancelliamo il timer se è <= 0 
    if (timerRemaining <= 0) {
        clearInterval(timer.current);        
        // clearTimeout(timer.current);
        dialog.current.open();
    }


    // HandleFunction
    
    const handleReset = () => {
        setTimerRemaining(targetTime * 1000);
    }

    // Inizio del timer con controllo ogni 10ms
    const handleStart = () => {
        timer.current = setInterval(() => {
            // setTimerExpired(true);
            
            // PrevTime è come dire TimerRemaining
            setTimerRemaining((prevTime) => prevTime - 10);  
        }, 10);
        
        // setTimerStarted(true);
    }

    // Cancelliamo il timer al click
    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
        // clearTimeout(timer.current);
    }
    
    return (
        <>
            {<ResultModal targetTime={targetTime} ref={dialog} remainingTime={timerRemaining} onReset={handleReset}/>}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-item">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? "Stop " : "Start "}  Challenge </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}