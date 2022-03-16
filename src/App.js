import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
    const { time, startTimer, stopTimer, resetTimer, active, splitTimer, times } = useTimer(0);

    return (
        <div className="App container">
            <h1>Coder Timer</h1>
            <div className="timer__wrapper">
                <div className="timer__display">
                    <p>{formatTime(time)}</p>
                </div>
                <div className="button__wrapper">
                    <button className="button" onClick={stopTimer}>
                        Stop
                    </button>
                    <button className="button" ref={active} onClick={startTimer}>
                        Start
                    </button>
                    <button className="button" onClick={resetTimer}>
                        Reset
                    </button>
                    <button className="button" onClick={splitTimer}>
                        Split
                    </button>
                </div>
                <div className="split__timer__display">
                    {times.map((time, index) => (
                        <p key={index}>{formatTime(time)}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
