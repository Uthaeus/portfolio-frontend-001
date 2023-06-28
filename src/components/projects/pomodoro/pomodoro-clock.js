import { useState, useEffect, useContext } from 'react';

import { UserContext } from '../../store/user-context';
import Display from './display';
import Settings from './settings';
import { set } from 'react-hook-form';

function PomodoroClock() {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [displayTime, setDisplayTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('session');
    const { user } = useContext(UserContext);

    const countdown = function timer() {
        setDisplayTime(prevTime => {
            if (prevTime === 0) {
                if (mode === 'session') {
                    setMode('break');
                    return breakLength * 60;
                } else {
                    setMode('session');
                    return sessionLength * 60;
                }
            } else {
                return prevTime - 1;
            }
        });
    }
    

    function resetHandler() {
        setSessionLength(25);
        setBreakLength(5);
        setDisplayTime(25 * 60);
        setMode('session');
        setIsRunning(false);
        clearInterval(countdown);
    }

    // q: why is clearInterval(timer) not working?
    // a: because timer is not a function, it's a number. clearInterval() expects a function.
    function startStopHandler() {
        console.log('startStopHandler');
        if (isRunning) {
            clearInterval(countdown);
        } else {
            countdown();
            setInterval(countdown, 1000);
        }

        setIsRunning(prevState => !prevState);
    }

    function timeChangeHandler(type, action) {
        if (type === 'session') {
            if (action === 'inc') {
                setSessionLength(prevLength => prevLength + 1);
                if (mode === 'session') setDisplayTime(prevLength => prevLength + 60);
            } else if (action === 'dec') {
                setSessionLength(prevLength => prevLength - 1);
                if (mode === 'session') setDisplayTime(prevLength => prevLength - 60);
            }
        } else if (type === 'break') {
            if (action === 'inc') {
                setBreakLength(prevLength => prevLength + 1);
                if (mode === 'break') setDisplayTime(prevLength => prevLength + 60);
            } else if (action === 'dec') {
                setBreakLength(prevLength => prevLength - 1);
                if (mode === 'break') setDisplayTime(prevLength => prevLength - 60);
            }
        }
    } 
    
    function modeChangeHandler(m) {
        setMode(m);
        if (m === 'session') {
            
            setDisplayTime(sessionLength * 60);
        } else if (m === 'break') {
            setDisplayTime(breakLength * 60);
        }
        clearInterval(countdown);
    }

    return (
        <div className="pomodoro-clock-container">
            <h1 className='pomodoro-clock-title'>Pomodoro Clock</h1>

            <div className="pomodoro-clock">
                <div className="pomodoro-clock__settings">
                    <Settings 
                        user={user}
                        sessionLength={sessionLength}
                        breakLength={breakLength}
                        mode={mode}
                        timeChangeHandler={timeChangeHandler}
                        modeChangeHandler={modeChangeHandler}
                        isRunning={isRunning}
                        resetHandler={resetHandler}
                        startStopHandler={startStopHandler}
                    />
                </div>

                <div className="pomodoro-clock__display">
                    <Display time={displayTime} />
                </div>
            </div>
        </div>
    );
}

export default PomodoroClock;
